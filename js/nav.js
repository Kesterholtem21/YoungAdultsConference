// Mobile header: stays pinned, slides away while scrolling down, returns on scroll up.
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  var last = window.scrollY, ticking = false;
  function update() {
    var y = window.scrollY;
    if (y > last + 6 && y > 140) header.classList.add('is-hidden');
    else if (y < last - 6 || y <= 140) header.classList.remove('is-hidden');
    last = y; ticking = false;
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; window.requestAnimationFrame(update); }
  }, { passive: true });
  // Keep the header visible while keyboard-tabbing through it
  header.addEventListener('focusin', function () { header.classList.remove('is-hidden'); });
})();
