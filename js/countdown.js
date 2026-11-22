// Counts down to the start of LAMP (midnight, Jan 1 2027, Eastern). Without JavaScript the tile just shows the date.
(function () {
  var el = document.getElementById("countdown");
  if (!el) return;
  var start = new Date("2027-01-01T00:00:00-05:00").getTime();
  var end = new Date("2027-01-03T00:00:00-05:00").getTime();
  var now = Date.now();
  if (now >= end) { el.textContent = "Thanks for coming"; return; }
  if (now >= start) { el.textContent = "Happening now"; return; }
  var days = Math.ceil((start - now) / 864e5);
  el.textContent = days === 1 ? "1 day" : days + " days";
})();
