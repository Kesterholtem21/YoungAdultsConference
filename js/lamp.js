// Lamplight: a soft extra glow follows the pointer across the hero. Skipped for reduced motion.
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var el = document.querySelector(".hero, .page-head");
  if (!el) return;
  el.addEventListener("pointermove", function (e) {
    var r = el.getBoundingClientRect();
    el.style.setProperty("--lx", (e.clientX - r.left) + "px");
    el.style.setProperty("--ly", (e.clientY - r.top) + "px");
  }, { passive: true });
})();
