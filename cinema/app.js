/* ─── Errata store (localStorage) ─── */
const ERRATA_KEY = 'cartography.errata.v1';
const ERRATA_FIELDS = ['title', 'director', 'year', 'place', 'other'];
const errataStore = (() => {
  let data = {};
  try { data = JSON.parse(localStorage.getItem(ERRATA_KEY) || '{}'); } catch {}
  return {
    key: (m) => `${m.name}|${m.year ?? ''}`,
    get(m) { return data[this.key(m)] || null; },
    all() { return data; },
    set(m, entry) {
      const k = this.key(m);
      if (!entry || (!entry.fields?.length && !entry.note)) delete data[k];
      else data[k] = { ...entry, ts: new Date().toISOString() };
      localStorage.setItem(ERRATA_KEY, JSON.stringify(data));
    },
    remove(key) { delete data[key]; localStorage.setItem(ERRATA_KEY, JSON.stringify(data)); },
    clear() { data = {}; localStorage.removeItem(ERRATA_KEY); },
    count() { return Object.keys(data).length; },
  };
})();

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
    marker.on('popupopen', (ev) => {
      highlightList(idx, false);
      wireErrataForm(ev.popup, m, idx, marker);
    });
    byIdx.set(idx, marker);
    return { marker, data: m, idx };
  });

  /* ─── Errata: popup form wiring ─── */
  function wireErrataForm(popup, m, idx, marker) {
    const root = popup.getElement();
    if (!root) return;
    const form = root.querySelector('form[data-errata]');
    if (!form) return;
    const dot = root.querySelector('.save-dot');
    const clearBtn = root.querySelector('.errata-clear-one');
    const seal = root.querySelector('.disputed-seal');

    const flash = () => {
      if (!dot) return;
      dot.classList.remove('pulse');
      void dot.offsetWidth;
      dot.classList.add('pulse');
    };
    const readForm = () => {
      const fields = [...form.querySelectorAll('input[type=checkbox][name=field]:checked')]
        .map(i => i.value);
      const note = form.querySelector('textarea[name=note]').value.trim();
      return { fields, note };
    };
    const persist = () => {
      const { fields, note } = readForm();
      errataStore.set(m, (fields.length || note) ? { fields, note } : null);
      updateMovieRow(idx, m);
      updateErrataTally();
      if (seal) seal.style.display = (fields.length || note) ? '' : 'none';
      flash();
    };

    let debTimer;
    form.addEventListener('change', persist);
    form.querySelector('textarea[name=note]').addEventListener('input', () => {
      clearTimeout(debTimer);
      debTimer = setTimeout(persist, 420);
    });
    if (clearBtn) clearBtn.addEventListener('click', (e) => {
      e.preventDefault();
      form.querySelectorAll('input[type=checkbox]').forEach(c => c.checked = false);
      form.querySelector('textarea[name=note]').value = '';
      persist();
      form.closest('details').removeAttribute('open');
    });
  }

  function updateMovieRow(idx, m) {
    const li = listEl.querySelector(`li[data-idx="${idx}"]`);
    if (!li) return;
    li.classList.toggle('is-disputed', !!errataStore.get(m));
  }

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
  const dpEl = document.getElementById('disputed');
  const resetBtn = document.getElementById('reset');
  const errataCountEl = document.getElementById('errata-count');
  const errataTallyEl = document.getElementById('errata-tally');

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
      const disputed = !!errataStore.get(m);
      if (disputed) li.classList.add('is-disputed');
      const badges = [
        m.checked ? '<span class="dot">·</span><span class="check" title="watched">●</span>' : '',
        m.cannes  ? '<span class="dot">·</span><span class="palm" title="Cannes 2026">★</span>' : '',
        disputed  ? '<span class="dot">·</span><span class="flag" title="flagged as incorrect">⚑</span>' : '',
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
    const dp = dpEl.checked;

    const visible = markers.filter(({ data: m }) => {
      if (q && !`${m.name} ${m.director} ${m.place}`.toLowerCase().includes(q)) return false;
      if (yv && String(m.year) !== yv) return false;
      if (dv && !(m.director || '').toLowerCase().includes(dv)) return false;
      if (ck && !m.checked) return false;
      if (cn && !m.cannes) return false;
      if (dp && !errataStore.get(m)) return false;
      return true;
    });

    const set = new Set(visible.map(v => v.idx));
    markers.forEach(({ marker, idx }) => {
      if (set.has(idx)) { if (!map.hasLayer(marker)) marker.addTo(map); }
      else if (map.hasLayer(marker)) map.removeLayer(marker);
    });
    renderList(visible);
  }

  [qEl, yearSel, dirSel, ckEl, cnEl, dpEl].forEach(el => el.addEventListener('input', applyFilters));
  resetBtn.addEventListener('click', () => {
    qEl.value = ''; yearSel.value = ''; dirSel.value = '';
    ckEl.checked = false; cnEl.checked = false; dpEl.checked = false;
    applyFilters();
  });

  /* ─── Errata drawer (review log) ─── */
  const drawerEl = document.getElementById('errata-drawer');
  const drawerBody = document.getElementById('errata-body');
  const drawerClose = document.getElementById('errata-close');
  const exportBtn = document.getElementById('errata-export');
  const clearBtn = document.getElementById('errata-clear');

  function updateErrataTally() {
    const n = errataStore.count();
    errataCountEl.textContent = String(n).padStart(2, '0');
    errataTallyEl.classList.toggle('empty', n === 0);
  }

  function renderDrawer() {
    const data = errataStore.all();
    const entries = Object.entries(data).sort((a, b) => (b[1].ts || '').localeCompare(a[1].ts || ''));
    if (entries.length === 0) {
      drawerBody.innerHTML = '<div class="errata-empty">No disputed entries yet.<br>Flag a film from its popup.</div>';
      return;
    }
    drawerBody.innerHTML = entries.map(([key, v]) => {
      const [name, year] = key.split('|');
      const tags = (v.fields || []).map(f => `<span class="errata-tag">${esc(f)}</span>`).join('');
      const note = v.note ? `<div class="errata-entry-note">${esc(v.note)}</div>` : '';
      return `
        <div class="errata-entry" data-key="${esc(key)}">
          <div class="errata-entry-title">${esc(name)}<span class="yr">${esc(year || '—')}</span></div>
          ${tags ? `<div class="errata-entry-fields">${tags}</div>` : ''}
          ${note}
        </div>`;
    }).join('');

    drawerBody.querySelectorAll('.errata-entry').forEach(el => {
      el.addEventListener('click', () => {
        const [name, year] = el.dataset.key.split('|');
        const hit = markers.find(x => x.data.name === name && String(x.data.year ?? '') === (year || ''));
        if (!hit) return;
        closeDrawer();
        map.flyTo([hit.data.lat, hit.data.lon], Math.max(map.getZoom(), 6), { duration: 1.1 });
        hit.marker.openPopup();
        highlightList(hit.idx, true);
      });
    });
  }

  function openDrawer() {
    renderDrawer();
    drawerEl.classList.add('open');
    drawerEl.setAttribute('aria-hidden', 'false');
  }
  function closeDrawer() {
    drawerEl.classList.remove('open');
    drawerEl.setAttribute('aria-hidden', 'true');
  }

  errataTallyEl.addEventListener('click', openDrawer);
  drawerClose.addEventListener('click', closeDrawer);
  drawerEl.addEventListener('click', (e) => { if (e.target === drawerEl) closeDrawer(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeDrawer(); });

  exportBtn.addEventListener('click', async () => {
    const json = JSON.stringify(errataStore.all(), null, 2);
    try {
      await navigator.clipboard.writeText(json);
      exportBtn.classList.add('copied');
      exportBtn.textContent = 'copied ✓';
      setTimeout(() => {
        exportBtn.classList.remove('copied');
        exportBtn.textContent = 'copy as json';
      }, 1600);
    } catch {
      exportBtn.textContent = 'copy failed';
      setTimeout(() => exportBtn.textContent = 'copy as json', 1600);
    }
  });

  clearBtn.addEventListener('click', () => {
    if (!confirm('Clear all errata? This cannot be undone.')) return;
    errataStore.clear();
    updateErrataTally();
    renderDrawer();
    applyFilters();
  });

  updateErrataTally();

  /* ─── sidebar toggle ─── */
  document.getElementById('toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('closed');
    setTimeout(() => map.invalidateSize(), 420);
  });

  renderList(markers);
})();

function esc(s) {
  return (s ?? '').toString().replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function renderPopup(m, i) {
  const num = String(i + 1).padStart(3, '0');
  const director = (m.director && !/^https?:/i.test(m.director)) ? m.director : 'unknown';
  const badges = [
    `<span class="badge ${m.checked ? 'watched' : ''}">${m.checked ? '● watched' : '○ unseen'}</span>`,
    m.cannes ? `<span class="badge cannes">★ cannes 26</span>` : '',
  ].filter(Boolean).join('');
  const link = m.link
    ? `<a class="link" href="${esc(m.link)}" target="_blank" rel="noopener">view ↗</a>` : '';

  const entry = errataStore.get(m);
  const seal = entry ? `<div class="disputed-seal">disputed</div>` : '';
  const fieldChecks = ERRATA_FIELDS.map(f => {
    const on = entry && entry.fields?.includes(f) ? 'checked' : '';
    return `<label class="errata-check"><input type="checkbox" name="field" value="${f}" ${on}><span>${f}</span></label>`;
  }).join('');
  const noteVal = entry?.note ? esc(entry.note) : '';
  const hasAny = !!entry;

  return `
    <div class="popup" style="position:relative;">
      ${seal}
      <div class="frame"><span>№ ${num}</span><span class="year">${m.year ?? ''}</span></div>
      <h2>${esc(m.name)}</h2>
      <div class="director">${esc(director)}</div>
      <div class="place">${esc(m.place)}</div>
      <div class="badges">${badges}</div>
      ${link}
      <details class="errata" ${hasAny ? 'open' : ''}>
        <summary>mark as incorrect<span class="save-dot"></span></summary>
        <form class="errata-form" data-errata onsubmit="return false;">
          <div class="errata-row">${fieldChecks}</div>
          <textarea class="errata-note" name="note" rows="1" placeholder="note — what's wrong? (optional)">${noteVal}</textarea>
          <button type="button" class="errata-clear-one">clear flag</button>
        </form>
      </details>
    </div>`;
}
