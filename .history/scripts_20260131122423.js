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
    const images = [
      'pics/syn.png','pics/dark.png','pics/stone.png','pics/night.png','pics/girl.png','pics/voila.png',
      'pics/red.png','pics/yellow.png','pics/buddha.png','pics/sh.png','pics/scaoe.png','pics/yaddha.png','pics/bureal.png','pics/gang.png'
    ];
    let currentIndex = 0;
    function changeImage() {
      currentIndex = (currentIndex + 1) % images.length;
      const img = imgContainer.querySelector('img');
      if (img) img.src = images[currentIndex];
    }
    // Respect user's reduced-motion preference
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) {
      setInterval(changeImage, 3000);
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
