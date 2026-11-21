// Mobile header: stays pinned, slides away while scrolling down, returns on scroll up.
(function () {
  var header = document.querySelector('.site-header');
  if (!header) return;
  var last = window.scrollY, ticking = false;
  function update() {
    var y = window.scrollY;
    if (header.querySelector('.wrap.open')) { last = y; ticking = false; return; }
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

// Hamburger menu
(function () {
  var btn = document.querySelector('.menu-btn');
  var wrap = document.querySelector('.site-header .wrap');
  if (!btn || !wrap) return;
  function setOpen(open) { wrap.classList.toggle('open', open); btn.setAttribute('aria-expanded', open ? 'true' : 'false'); }
  btn.addEventListener('click', function () { setOpen(btn.getAttribute('aria-expanded') !== 'true'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setOpen(false); });
  document.addEventListener('click', function (e) { if (!wrap.contains(e.target)) setOpen(false); });
})();
