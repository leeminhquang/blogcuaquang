document.addEventListener("DOMContentLoaded", () => {
  // MATRIX BACKGROUND (mờ)
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  document.body.prepend(canvas);
  Object.assign(canvas.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    zIndex: "-1",
    opacity: "0.2",
    pointerEvents: "none",
  });

  const resize = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);

  const letters = "01AIHACKDATA".split("");
  const fontSize = 14;
  const columns = Math.floor(canvas.width / fontSize);
  const drops = Array(columns).fill(1);

  const draw = () => {
    ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 255, 255, 0.35)";
    ctx.font = fontSize + "px monospace";
    drops.forEach((y, i) => {
      const text = letters[Math.floor(Math.random() * letters.length)];
      ctx.fillText(text, i * fontSize, y * fontSize);
      if (y * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    });
  };
  setInterval(draw, 45);

  // Typing effect
  const text = "🚀 Đam mê sáng tạo và công nghệ";
  const typing = document.getElementById("typing-text");
  let i = 0;
  const type = () => {
    if (i < text.length) {
      typing.textContent += text.charAt(i);
      i++;
      setTimeout(type, 80);
    }
  };
  type();
});
