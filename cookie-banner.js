/* Hinweis-Banner (keine Cookies, kein Tracking). Speichert nur ein Merkzeichen im lokalen Speicher. */
(function () {
  var KEY = 'gm-hinweis-bestaetigt';
  var banner = document.getElementById('cookie-hinweis');
  if (!banner) return;

  function gespeichert() {
    try { return window.localStorage.getItem(KEY) === '1'; } catch (e) { return false; }
  }
  function speichern() {
    try { window.localStorage.setItem(KEY, '1'); } catch (e) { /* Speicher gesperrt: Banner erscheint beim nächsten Besuch erneut */ }
  }
  function zeigen() { banner.hidden = false; }
  function schliessen() { banner.hidden = true; }

  if (!gespeichert()) zeigen();

  var ok = document.getElementById('cookie-ok');
  if (ok) ok.addEventListener('click', function () { speichern(); schliessen(); });

  var erneut = document.querySelectorAll('[data-hinweis-oeffnen]');
  for (var i = 0; i < erneut.length; i++) {
    erneut[i].addEventListener('click', function () {
      zeigen();
      var b = document.getElementById('cookie-ok');
      if (b) b.focus();
    });
  }
})();
