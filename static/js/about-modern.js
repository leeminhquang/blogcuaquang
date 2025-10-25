// =====================================================
// ✨ Hiệu ứng chữ typing
// =====================================================
const typing = document.querySelector(".typing");
const roles = ["AI Engineer", "Developer", "Dreamer ✨"];
let roleIndex = 0, charIndex = 0, isDeleting = false;

function typeText() {
  const current = roles[roleIndex];
  typing.textContent = isDeleting
    ? current.substring(0, charIndex--)
    : current.substring(0, charIndex++);

  if (!isDeleting && charIndex === current.length) {
    isDeleting = true;
    setTimeout(typeText, 1500);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeText, 400);
  } else {
    setTimeout(typeText, isDeleting ? 60 : 100);
  }
}
typeText();

// =====================================================
// 🎵 Bật/Tắt nhạc nền + hiệu ứng icon sáng
// =====================================================
const music = document.getElementById("bg-music");
const musicBtn = document.getElementById("music-toggle");
let isPlaying = false;

function toggleMusic() {
  if (isPlaying) {
    music.pause();
    musicBtn.textContent = "🔇";
    musicBtn.classList.remove("playing");
  } else {
    music.play();
    musicBtn.textContent = "🔊";
    musicBtn.classList.add("playing");
  }
  isPlaying = !isPlaying;
}

musicBtn.addEventListener("click", toggleMusic);

// Cho phép tự động phát khi người dùng tương tác lần đầu
document.body.addEventListener("click", () => {
  if (!isPlaying) toggleMusic();
}, { once: true });

// =====================================================
// 🖱️ Cuộn xuống phần "About"
// =====================================================
function scrollToAbout() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}
window.scrollToAbout = scrollToAbout;

// =====================================================
// 🌫️ Hiệu ứng fade-in khi cuộn
// =====================================================
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
});
document.querySelectorAll(".fade-in, .fade-up").forEach(el => observer.observe(el));

// =====================================================
// 📊 Thanh kỹ năng động
// =====================================================
const bars = document.querySelectorAll(".bar div");
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const width = e.target.getAttribute("data-width");
      e.target.style.width = width;
    }
  });
});
bars.forEach(b => skillObs.observe(b));

// =====================================================
// 🌄 Hiệu ứng Parallax nhẹ cho nền hero
// =====================================================
window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");
  if (window.scrollY > 100) hero.classList.add("scrolled");
  else hero.classList.remove("scrolled");
});
