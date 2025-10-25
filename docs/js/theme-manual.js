(function () {
  const html = document.documentElement;
  const body = document.body;

  const ALLOWED = (window.ALLOWED_THEMES || ["dark", "light", "hacker", "solarized", "kimbie"])
    .map(t => String(t).toLowerCase());
  const DEFAULT_THEME = (window.DEFAULT_THEME || "dark").toLowerCase();

  function clearThemeClasses() {
    [...html.classList].forEach(c => {
      if (c.startsWith("theme") || c === "dark" || c === "light") html.classList.remove(c);
    });
    [...body.classList].forEach(c => {
      if (c.startsWith("theme") || c === "dark" || c === "light") body.classList.remove(c);
    });
  }

  function applyTheme(t) {
    t = (t || "").toLowerCase();
    if (!ALLOWED.includes(t)) return;

    clearThemeClasses();

    html.dataset.theme = t;
    body.dataset.theme = t;
    html.classList.add("theme__" + t);
    body.classList.add("theme__" + t);

    if (t === "dark") {
      html.classList.add("dark");
      body.classList.add("dark");
    }

    localStorage.setItem("theme", t);
    if (typeof window.setMetaColor === "function") window.setMetaColor(t);
    console.log("✅ Theme applied:", t);
  }

  // ưu tiên: ?theme -> localStorage -> default
  const qp = new URLSearchParams(location.search);
  const qpTheme = (qp.get("theme") || "").toLowerCase();
  const stored = (localStorage.getItem("theme") || "").toLowerCase();
  const start = qpTheme || stored || DEFAULT_THEME;
  applyTheme(start);

  window.setTheme = applyTheme;
  window.toggleTheme = function () {
    const cur = (html.dataset.theme || DEFAULT_THEME).toLowerCase();
    const idx = ALLOWED.indexOf(cur);
    const next = ALLOWED[(idx + 1) % ALLOWED.length];
    applyTheme(next);
  };

  // bắt sự kiện click trong menu
  document.addEventListener("click", e => {
    const el = e.target.closest("[data-theme]");
    if (el) {
      const t = el.getAttribute("data-theme") || el.textContent;
      applyTheme(t);
    }
  });
})();
