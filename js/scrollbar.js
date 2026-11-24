/* LAMP scrollbar + smooth scrolling (computers only; phones and tablets already scroll smoothly with their own bars).
   1) A thin, rounded, dark-orange gradient bar floats OVER the page with no background behind it. It can be dragged.
   2) Mouse-wheel scrolling glides smoothly instead of jumping. Keyboard and touch scrolling are unchanged.
   Smooth scrolling is skipped for people who have "reduce motion" turned on. */
(function () {
  if (!window.matchMedia || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
  var root = document.documentElement;
  root.classList.add("lamp-scroll");          // hides the browser's own bar (see styles.css)

  var bar = document.createElement("div");
  bar.className = "lamp-scrollbar";
  bar.setAttribute("aria-hidden", "true");
  var thumb = document.createElement("div");
  thumb.className = "lamp-scrollbar-thumb";
  bar.appendChild(thumb);
  document.body.appendChild(bar);

  var hideTimer = 0, dragging = false, startY = 0, startScroll = 0;

  function update() {
    var view = window.innerHeight, full = root.scrollHeight;
    if (full <= view + 1) { bar.style.display = "none"; return; }
    bar.style.display = "";
    var track = view - 8;                                   // 4px of space at the top and bottom
    var h = Math.max(40, track * view / full);
    var y = (track - h) * (window.scrollY / (full - view));
    thumb.style.height = h + "px";
    thumb.style.transform = "translateY(" + y + "px)";
  }
  function show() {
    bar.classList.add("is-active");
    clearTimeout(hideTimer);
    hideTimer = setTimeout(function () { if (!dragging) bar.classList.remove("is-active"); }, 1200);
  }

  window.addEventListener("scroll", function () { update(); show(); }, { passive: true });
  window.addEventListener("resize", update);
  new ResizeObserver(update).observe(document.body);       // page height changes (images, FAQ answers opening)

  thumb.addEventListener("pointerdown", function (e) {
    gliding = false;
    dragging = true; startY = e.clientY; startScroll = window.scrollY;
    thumb.setPointerCapture(e.pointerId); bar.classList.add("is-active", "is-dragging"); e.preventDefault();
  });
  thumb.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    var view = window.innerHeight, full = root.scrollHeight, track = view - 8;
    var ratio = (full - view) / (track - thumb.offsetHeight);
    window.scrollTo({ top: startScroll + (e.clientY - startY) * ratio, behavior: "instant" });
  });
  function stop() { dragging = false; bar.classList.remove("is-dragging"); show(); }
  thumb.addEventListener("pointerup", stop);
  thumb.addEventListener("pointercancel", stop);

  /* ---- Smooth wheel scrolling ---- */
  var gliding = false, target = 0;
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function canScrollInside(el) {       // let boxes with their own scrolling (e.g. a long form) handle the wheel themselves
    for (; el && el !== document.body && el !== root; el = el.parentElement) {
      var oy = getComputedStyle(el).overflowY;
      if ((oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight) return true;
    }
    return false;
  }
  function glide() {
    if (!gliding) return;
    var y = window.scrollY, next = y + (target - y) * 0.12;   // 0.12 = how soft the glide is (smaller = softer)
    if (Math.abs(target - next) < 0.5) { window.scrollTo({ top: target, behavior: "instant" }); gliding = false; return; }
    window.scrollTo({ top: next, behavior: "instant" });
    requestAnimationFrame(glide);
  }
  if (!reduce) {
    window.addEventListener("wheel", function (e) {
      if (e.ctrlKey || e.defaultPrevented || Math.abs(e.deltaX) > Math.abs(e.deltaY) || canScrollInside(e.target)) return;
      e.preventDefault();
      var d = e.deltaY * (e.deltaMode === 1 ? 40 : e.deltaMode === 2 ? window.innerHeight : 1);
      if (!gliding) target = window.scrollY;
      target = Math.max(0, Math.min(root.scrollHeight - window.innerHeight, target + d));
      if (!gliding) { gliding = true; requestAnimationFrame(glide); }
    }, { passive: false });
    window.addEventListener("keydown", function () { gliding = false; });   // keyboard scrolling takes over at once
  }

  update(); show();
})();
