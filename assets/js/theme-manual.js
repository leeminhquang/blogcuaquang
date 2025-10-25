(function () {
  const html = document.documentElement;

  const DEFAULT_THEME = window.DEFAULT_THEME || "light";
  const ALLOWED = window.ALLOWED_THEMES || ["dark", "light"];

  function applyTheme(t) {
    if (!ALLOWED.includes(t)) return;
    html.dataset.theme = t;
    html.classList.toggle("dark", t === "dark"); // ZZO đọc class 'dark'
  }

  // Ưu tiên: ?theme=... -> localStorage -> DEFAULT
  const qp = new URLSearchParams(location.search);
  const qpTheme = qp.get("theme");
  const stored = localStorage.getItem("theme");
  const start = qpTheme || stored || DEFAULT_THEME;
  applyTheme(start);
  if (qpTheme) localStorage.setItem("theme", qpTheme);

  // API global để menu/nút gọi
  window.setTheme = function (t) {
    applyTheme(t);
    localStorage.setItem("theme", t);
  };
  window.toggleTheme = function () {
    const cur = html.dataset.theme || DEFAULT_THEME;
    window.setTheme(cur === "dark" ? "light" : "dark");
  };

  // Phím tắt: t (toggle), Shift+D, Shift+L
  document.addEventListener("keydown", (e) => {
    if (e.key === "t" && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault(); window.toggleTheme();
    }
    if (e.shiftKey && e.key.toLowerCase() === "d") window.setTheme("dark");
    if (e.shiftKey && e.key.toLowerCase() === "l") window.setTheme("light");
  });

  // Bắt click vào <a data-theme="..."> nếu theme gốc có dropdown
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-theme]");
    if (!a) return;
    e.preventDefault();
    const t = a.getAttribute("data-theme");
    if (t) window.setTheme(t);
  });
})();
