document.addEventListener('DOMContentLoaded', function() {
  // Tooltip (if present)
  const questionMark = document.querySelector('.question-mark');
  const tooltip = document.querySelector('.tooltip');
  if (questionMark && tooltip) {
    questionMark.addEventListener('mouseover', () => {
      tooltip.style.display = 'inline-block';
    });
    questionMark.addEventListener('mouseout', () => {
      tooltip.style.display = 'none';
    });
    tooltip.addEventListener('mouseout', () => {
      tooltip.style.display = 'none';
    });
  }

  // fullpage.js init (guarded)
  if (typeof fullpage !== 'undefined') {
    try {
      new fullpage('#fullpage', { autoScrolling: true, scrollHorizontally: true });
    } catch (e) {
      // ignore init errors
    }
  }

  // Image rotator for sidebar
  const imgContainer = document.querySelector('.img-container-change');
  if (imgContainer) {
    const img = imgContainer.querySelector('img');
    // Derive the path prefix from the initial src so this works from any
    // directory depth (e.g. "/" -> "pics/...", "/cv/" -> "../pics/...").
    const rawSrc = img ? img.getAttribute('src') : 'pics/dark.png';
    const pivot = rawSrc.indexOf('pics/');
    const prefix = pivot >= 0 ? rawSrc.slice(0, pivot) : '';
    const names = [
      'IMG_2397.jpeg',
      'syn.png','dark.png','stone.png','night.png','girl.png','voila.png',
      'red.png','yellow.png','buddha.png','sh.png','scaoe.png','yaddha.png','bureal.png','gang.png'
    ];
    const images = names.map(function (n) { return prefix + 'pics/' + n; });
    // The first image (index 0) lingers longer than the rest.
    const FIRST_DELAY = 8000;
    const DELAY = 3000;
    let currentIndex = 0;
    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      if (img) img.src = images[currentIndex];
      schedule();
    }
    function schedule() {
      const delay = currentIndex === 0 ? FIRST_DELAY : DELAY;
      setTimeout(changeImage, delay);
    }
    // Respect user's reduced-motion preference
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      schedule();
    }
  }
});

// Toggle courses (kept global for inline usage if needed)
function toggleCourses() {
  const arrow = document.getElementById('arrow');
  const courses = document.getElementById('courses');
  if (!courses || !arrow) return;
  if (courses.style.display === 'none') {
    courses.style.display = 'block';
    arrow.innerHTML = '\u25BC; Selected Courses';
  } else {
    courses.style.display = 'none';
    arrow.innerHTML = '\u25B6; Selected Courses';
  }
}
