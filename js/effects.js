/* LAMP effects: (1) speaker photos "light up" when they scroll into view, (2) the schedule highlights what is happening right now.
   Both are skipped for visitors who have "reduce motion" turned on, except the schedule highlight, which is not motion. */
(function () {
  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Candle-lit speaker photos
  var photos = document.querySelectorAll(".speaker .photo, .speaker-tile img");
  if (photos.length && !reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.remove("lamp-dim"); io.unobserve(e.target); }
      });
    }, { threshold: 0.35 });
    photos.forEach(function (p) {
      p.classList.add("lamp-dim");
      io.observe(p);
      // tapping or hovering also lights a photo that is still dim
      ["pointerenter", "touchstart"].forEach(function (ev) {
        p.addEventListener(ev, function () { p.classList.remove("lamp-dim"); }, { passive: true });
      });
    });
  }

  // 2. Schedule: highlight the session happening now (rows carry data-start times in Eastern)
  var rows = Array.prototype.slice.call(document.querySelectorAll(".slots li[data-start]"));
  if (rows.length) {
    var starts = rows.map(function (r) { return new Date(r.getAttribute("data-start")).getTime(); });
    var END = new Date("2027-01-02T15:00:00-05:00").getTime();
    var mark = function () {
      var now = Date.now(), cur = -1;
      for (var i = 0; i < starts.length; i++) {
        var end = i + 1 < starts.length ? starts[i + 1] : END;
        if (now >= starts[i] && now < end) cur = i;
      }
      rows.forEach(function (r, i) {
        var on = i === cur;
        r.classList.toggle("is-now", on);
        var b = r.querySelector(".now-badge");
        if (on && !b) {
          b = document.createElement("span"); b.className = "now-badge"; b.textContent = "Happening now";
          r.querySelector("time").appendChild(b);
        } else if (!on && b) { b.remove(); }
      });
    };
    mark();
    setInterval(mark, 30000);
  }
})();
