---
title: "Trang chủ"
type: "home"
description: "Chào mừng bạn đến với blog của Lê Minh Quang – nơi chia sẻ kiến thức lập trình và dự án cá nhân."
showToc: false
---

<!-- ✅ Dẫn đúng file CSS/JS: không thêm ./ ở đầu -->
<link rel="stylesheet" href="{{ "css/home-style.css" | relURL }}">
<script defer src="{{ "js/home-effect.js" | relURL }}"></script>

<!-- ===== HERO SECTION ===== -->
<section class="home-hero fade-in">
  <div class="avatar-glow">
    <!-- ✅ Đặt ảnh thật vào static/images/avatar.jpg -->
    <img src="{{ "images/avatar.jpg" | relURL }}" alt="Lê Minh Quang" class="avatar">
  </div>

  <h1 class="name">Lê Minh Quang</h1>
  <p class="subtitle">💻 Lập trình viên & sinh viên An ninh mạng</p>

  <div class="home-buttons">
    <a href="{{ "about/" | relURL }}" class="btn btn-primary">Giới thiệu bản thân</a>
    <a href="{{ "posts/" | relURL }}" class="btn btn-secondary">Blog</a>
  </div>

  <div class="links">
    ✉️ <a href="mailto:leminhquang213@gmail.com">leminhquang213@gmail.com</a> • 
    🐙 <a href="https://github.com/leeminhquang" target="_blank">github.com/leeminhquang</a>
  </div>
</section>

<!-- ===== CONTACT SECTION ===== -->
<section class="home-section fade-up">
  <h2>📫 Liên hệ</h2>
  <p>
    ✉️ <a href="mailto:leminhquang213@gmail.com">leminhquang213@gmail.com</a><br>
    🐙 <a href="https://github.com/leeminhquang" target="_blank">github.com/leeminhquang</a>
  </p>
</section>
