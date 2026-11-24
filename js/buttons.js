/* LAMP ember drift: every second or so a single glowing ember lifts off a button and floats up, like from a lamp.
   Runs on the header Register button (every page), the two hero buttons and the "Go to registration" button at the
   end of the home page, from the moment the page loads.
   Hovering makes the embers come a little faster. "See the schedule" gets fewer embers so the Register buttons stay the focus.
   Off for people with "reduce motion" on; pauses while a button is off-screen or the tab is hidden. */
(function () {
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!Element.prototype.animate) return;

  var buttons = document.querySelectorAll(".site-header .nav a.cta, .hero .btn, .cta-band .btn");
  function rand(a, b) { return a + Math.random() * (b - a); }

  Array.prototype.forEach.call(buttons, function (btn) {
    btn.classList.add("has-embers");
    var rate = btn.classList.contains("ghost") ? .45 : 1;   // fewer embers on the secondary button
    var inHeader = !!btn.closest(".site-header");            // the header sits at the very top of the screen, so its embers
                                                               // start at the button's bottom edge and rise across its face
    var visible = true, timer = 0;

    function ember() {
      timer = 0;
      if (!visible || document.hidden) return;
      var e = document.createElement("span");
      e.className = "ember"; e.setAttribute("aria-hidden", "true");
      var size = rand(3, 5.5);
      e.style.left = (rand(.1, .9) * btn.offsetWidth) + "px";
      if (inHeader) e.style.top = (btn.offsetHeight - 4) + "px";
      e.style.width = e.style.height = size + "px";
      btn.appendChild(e);
      var dx = rand(-12, 12), dy = inHeader ? -rand(30, 48) : -rand(28, 55);
      e.animate([
        { transform: "translate(0, 0) scale(1)", opacity: 0 },
        { opacity: 1, offset: .15 },
        { transform: "translate(" + dx * .5 + "px, " + dy * .55 + "px) scale(.85)", opacity: .85, offset: .55 },
        { transform: "translate(" + dx + "px, " + dy + "px) scale(.3)", opacity: 0 }
      ], { duration: rand(1400, 2200), easing: "cubic-bezier(.2, .6, .4, 1)" }).onfinish = function () { e.remove(); };
      schedule();
    }
    function schedule() {
      var wait = btn.matches(":hover") ? rand(120, 260) : rand(450, 1000);   // faster while hovering
      timer = setTimeout(ember, wait / rate);
    }
    function start() { if (!timer) timer = setTimeout(ember, rand(0, 1200)); }

    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) { visible = entries[0].isIntersecting; if (visible) start(); }).observe(btn);
    } else { start(); }
    document.addEventListener("visibilitychange", function () { if (!document.hidden && visible) start(); });
  });
})();