/* LAMP effects: (1) the header photo drifts slightly as you scroll (parallax), (2) the schedule highlights what is happening right now. */
(function () {
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var el = document.querySelector(".hero-art, .page-head");
  if (!el) return;
  var pending = false;
  function update() {
    pending = false;
    var y = Math.min(window.scrollY, 330);   // stops drifting after 330px so the photo never runs out of room
    el.style.setProperty("--py", (y * 0.12).toFixed(1) + "px");   // 0.12 = how fast the photo drifts; bigger = more movement
  }
  window.addEventListener("scroll", function () { if (!pending) { pending = true; requestAnimationFrame(update); } }, { passive: true });
})();

(function () {
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
