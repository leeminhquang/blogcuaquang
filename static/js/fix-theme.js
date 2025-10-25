// --- Fix broken setMetaColor() in Zzo theme ---
// Tạo hàm an toàn ghi đè hàm cũ gây lỗi
window.setMetaColor = function (t) {
  try {
    const theme = (t || document.documentElement.dataset.theme || "light").toLowerCase();
    const colorMap = {
      dark: "#111111",
      light: "#ffffff",
      hacker: "#0b0f0c",
      solarized: "#002b36",
      kimbie: "#221a0f"
    };
    const color = colorMap[theme] || colorMap.light;
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "theme-color");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", color);
  } catch (err) {
    console.warn("setMetaColor suppressed:", err);
  }
};
console.log("✅ Patched setMetaColor() loaded safely");
