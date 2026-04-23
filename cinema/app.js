(async () => {
  const res = await fetch('data.json');
  if (!res.ok) {
    document.getElementById('map').innerHTML =
      '<div style="padding:40px;color:#f4ecd8;font-family:EB Garamond,serif">' +
      'data.json not found — run <code>python3 build.py</code> first.</div>';
    return;
  }
  const { movies } = await res.json();

  document.getElementById('count-line').textContent = `${movies.length} films across the world.`;

  const map = L.map('map', { zoomControl: true, worldCopyJump: true })
    .setView([32, 8], 3);

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &nbsp;&middot;&nbsp; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19,
  }).addTo(map);

  const byIdx = new Map();
  const markers = movies.map((m, idx) => {
    const cls = [
      'pin',
      m.checked ? 'pin-checked' : 'pin-unchecked',
      m.cannes ? 'pin-cannes' : '',
    ].filter(Boolean).join(' ');
    const icon = L.divIcon({
      className: 'pin-wrap',
      html: `<div class="${cls}"></div>`,
      iconSize: [14, 14],
      iconAnchor: [7, 7],
      popupAnchor: [0, -10],
    });
    const marker = L.marker([m.lat, m.lon], { icon, riseOnHover: true }).addTo(map);
    marker.bindPopup(renderPopup(m, idx), { closeButton: true, autoPan: true, maxWidth: 310 });
    marker.on('popupopen', () => highlightList(idx, false));
    byIdx.set(idx, marker);
    return { marker, data: m, idx };
  });

  /* ─── filter controls ─── */
  const yearSel = document.getElementById('year');
  const dirSel  = document.getElementById('director');
  const years   = [...new Set(movies.map(m => m.year).filter(Boolean))].sort((a, b) => b - a);
  years.forEach(y => yearSel.appendChild(opt(y)));
  const directors = [...new Set(
    movies.flatMap(m => (m.director || '').split(',').map(s => s.trim()).filter(Boolean))
          .filter(d => !/^https?:/i.test(d))
  )].sort((a, b) => a.localeCompare(b));
  directors.forEach(d => dirSel.appendChild(opt(d)));

  const listEl = document.getElementById('list');
  const qEl = document.getElementById('q');
  const ckEl = document.getElementById('checked');
  const cnEl = document.getElementById('cannes');
  const resetBtn = document.getElementById('reset');

  function opt(v, label = v) {
    const o = document.createElement('option');
    o.value = v;
    o.textContent = label;
    return o;
  }

  function esc(s) {
    return (s ?? '').toString().replace(/[&<>"']/g, c =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function renderList(items) {
    listEl.innerHTML = '';
    const frag = document.createDocumentFragment();
    items.forEach(({ data: m, idx }) => {
      const li = document.createElement('li');
      li.dataset.idx = idx;
      const badges = [
        m.checked ? '<span class="dot">·</span><span class="check" title="watched">●</span>' : '',
        m.cannes  ? '<span class="dot">·</span><span class="palm" title="Cannes 2026">★</span>' : '',
      ].join('');
      li.innerHTML = `
        <div class="movie-title">${esc(m.name)}</div>
        <div class="movie-meta">
          <span>${m.year ?? '—'}</span>
          <span class="dot">·</span>
          <span class="director">${esc(formatDirector(m.director)) || '—'}</span>
          ${badges}
        </div>`;
      li.addEventListener('click', () => {
        map.flyTo([m.lat, m.lon], Math.max(map.getZoom(), 6), { duration: 1.2 });
        byIdx.get(idx).openPopup();
        highlightList(idx, true);
      });
      frag.appendChild(li);
    });
    listEl.appendChild(frag);
    document.getElementById('visible-count').textContent = items.length;
  }

  function formatDirector(d) {
    if (!d) return '';
    if (/^https?:/i.test(d)) return '';
    return d;
  }

  function highlightList(idx, scroll) {
    [...listEl.children].forEach(li => {
      const on = +li.dataset.idx === idx;
      li.classList.toggle('active', on);
      if (on && scroll) li.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
    });
  }

  /* ─── filtering ─── */
  function applyFilters() {
    const q = qEl.value.trim().toLowerCase();
    const yv = yearSel.value;
    const dv = dirSel.value.toLowerCase();
    const ck = ckEl.checked;
    const cn = cnEl.checked;

    const visible = markers.filter(({ data: m }) => {
      if (q && !`${m.name} ${m.director} ${m.place}`.toLowerCase().includes(q)) return false;
      if (yv && String(m.year) !== yv) return false;
      if (dv && !(m.director || '').toLowerCase().includes(dv)) return false;
      if (ck && !m.checked) return false;
      if (cn && !m.cannes) return false;
      return true;
    });

    const set = new Set(visible.map(v => v.idx));
    markers.forEach(({ marker, idx }) => {
      if (set.has(idx)) { if (!map.hasLayer(marker)) marker.addTo(map); }
      else if (map.hasLayer(marker)) map.removeLayer(marker);
    });
    renderList(visible);
  }

  [qEl, yearSel, dirSel, ckEl, cnEl].forEach(el => el.addEventListener('input', applyFilters));
  resetBtn.addEventListener('click', () => {
    qEl.value = ''; yearSel.value = ''; dirSel.value = '';
    ckEl.checked = false; cnEl.checked = false;
    applyFilters();
  });

  /* ─── sidebar toggle ─── */
  document.getElementById('toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('closed');
    setTimeout(() => map.invalidateSize(), 420);
  });

  renderList(markers);
})();

function renderPopup(m, i) {
  const esc = s => (s ?? '').toString().replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const num = String(i + 1).padStart(3, '0');
  const director = (m.director && !/^https?:/i.test(m.director)) ? m.director : 'unknown';
  const badges = [
    `<span class="badge ${m.checked ? 'watched' : ''}">${m.checked ? '● watched' : '○ unseen'}</span>`,
    m.cannes ? `<span class="badge cannes">★ cannes 26</span>` : '',
  ].filter(Boolean).join('');
  const link = m.link
    ? `<a class="link" href="${esc(m.link)}" target="_blank" rel="noopener">view ↗</a>` : '';

  return `
    <div class="popup">
      <div class="frame"><span>№ ${num}</span><span class="year">${m.year ?? ''}</span></div>
      <h2>${esc(m.name)}</h2>
      <div class="director">${esc(director)}</div>
      <div class="place">${esc(m.place)}</div>
      <div class="badges">${badges}</div>
      ${link}
    </div>`;
}
