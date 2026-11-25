/* LAMP countdown: shows the time left until the conference next to the Register button in the header.
   To change the start time, edit EVENT_START below (the -05:00 means Eastern time). */
(function () {
  var EVENT_START = new Date("2027-01-01T00:00:00-05:00");
  var EVENT_END = new Date("2027-01-03T00:00:00-05:00");

  var cta = document.querySelector(".site-header .nav a.cta");
  if (!cta || Date.now() >= EVENT_END) return;

  // Put the countdown and the Register button together in one slot on the right of the header
  var slot = document.createElement("span");
  slot.className = "nav-end";
  cta.parentNode.insertBefore(slot, cta);

  var box = document.createElement("span");
  box.className = "countdown";
  box.setAttribute("role", "timer");
  box.setAttribute("aria-label", "Countdown to LAMP, January 1, 2027");
  box.innerHTML =
    '<span class="countdown-label">Starts in</span>' +
    '<span class="countdown-time">' +
      '<span><b data-u="d">00</b><i>d</i></span>' +
      '<span><b data-u="h">00</b><i>h</i></span>' +
      '<span><b data-u="m">00</b><i>m</i></span>' +
      '<span class="countdown-s"><b data-u="s">00</b><i>s</i></span>' +
    '</span>';
  slot.appendChild(box);
  slot.appendChild(cta);

  var out = {};
  ["d", "h", "m", "s"].forEach(function (u) { out[u] = box.querySelector('[data-u="' + u + '"]'); });
  function pad(n) { return (n < 10 ? "0" : "") + n; }

  function tick() {
    var now = Date.now();
    if (now >= EVENT_END) { slot.parentNode.insertBefore(cta, slot); slot.remove(); return; }
    if (now >= EVENT_START) {
      box.classList.add("is-live");
      box.innerHTML = '<span class="countdown-label">LAMP is</span><span class="countdown-time">Happening now</span>';
      setTimeout(tick, 60000);
      return;
    }
    var left = Math.floor((EVENT_START - now) / 1000);
    out.d.textContent = Math.floor(left / 86400);
    out.h.textContent = pad(Math.floor(left % 86400 / 3600));
    out.m.textContent = pad(Math.floor(left % 3600 / 60));
    out.s.textContent = pad(left % 60);
    setTimeout(tick, 1000 - (now % 1000));
  }
  tick();
})();
