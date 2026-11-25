/* LAMP effects: the schedule highlights what is happening right now. */
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
