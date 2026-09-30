/* ============================================================
   CRENSHAW — ARTWORK FALLBACKS
   The site is designed around 33 illustrations (see Crenshaw_Image_Prompt_Library.md).
   Until you add each picture, a matching built-in placeholder from images/placeholder/ is shown.
   Look-up order for every picture:
     1) images/web/<name>.webp   (optimised copy — used by the site)
     2) images/<name>.png        (original — used if there is no webp yet)
     3) images/placeholder/<name>.svg  (built-in placeholder)
   Just drop a file with the right name into images/ or images/web/ and it takes over automatically.
   ============================================================ */
(function () {
  const SLOTS = [
    "logo-crenshaw", "nav-texture", "hero-banner",
    "week1-banner", "week2-banner", "week3-banner", "week4-banner", "week5-banner",
    "week6-banner", "week7-banner", "week8-banner", "week9-banner", "week10-banner",
    "icon-teacher-read", "icon-group-read", "icon-quiz", "icon-poster", "icon-comic", "icon-drama", "icon-journal",
    "icon-print-all", "icon-leadin", "icon-goaway", "icon-comprehension", "icon-rubric", "icon-presentation", "icon-schedule",
    "badge-truth", "badge-quiz-champion", "badge-reading-streak",
    "certificate-border", "final-project-banner", "keepsakes-bg",
  ];
  const web = (n) => `images/web/${n}.webp`;
  const png = (n) => `images/${n}.png`;
  const ph = (n) => `images/placeholder/${n}.svg`;
  const root = document.documentElement;

  // 1) CSS-driven pictures start on their placeholder…
  SLOTS.forEach((n) => root.style.setProperty("--img-" + n, `url("${ph(n)}")`));

  // 2) …and switch to the real artwork the moment it is found.
  function probe(list, done) {
    const src = list.shift();
    if (!src) return;
    const im = new Image();
    im.onload = () => done(src);
    im.onerror = () => probe(list, done);
    im.src = src;
  }
  SLOTS.forEach((n) => probe([web(n), png(n)], (src) => {
    root.style.setProperty("--img-" + n, `url("${src}")`);
    if (n === "logo-crenshaw") setFavicon(src);
  }));

  // 3) <img> tags: webp → png → placeholder
  document.addEventListener("error", (e) => {
    const t = e.target;
    if (!t || t.tagName !== "IMG") return;
    const src = t.getAttribute("src") || "";
    const m = src.match(/(?:^|\/)([A-Za-z0-9_-]+)\.(webp|png|svg)$/);
    if (!m) return;
    const name = m[1];
    if (src.indexOf("images/web/") === 0 || src.indexOf("/images/web/") >= 0) t.src = png(name);
    else if (src.indexOf("/placeholder/") < 0 && m[2] === "png") t.src = ph(name);
  }, true);

  function setFavicon(href) {
    let l = document.querySelector("link[rel~='icon']");
    if (!l) { l = document.createElement("link"); l.rel = "icon"; document.head.appendChild(l); }
    l.href = href;
  }
  window.BG_SLOTS = SLOTS;
})();
