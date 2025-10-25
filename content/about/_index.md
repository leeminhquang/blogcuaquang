---
title: "About Me"
type: "about"
description: "Lê Minh Quang – AI Engineer & Developer"
showToc: false
---

<link rel="stylesheet" href="{{ "css/about-modern.css" | relURL }}">
<script defer src="{{ "js/about-modern.js" | relURL }}"></script>

<!-- HERO -->
<section class="hero" id="hero">
  <audio id="bg-music" loop>
    <source src="{{ "music/background.mp3" | relURL }}" type="audio/mpeg">
  </audio>
  <button id="music-toggle" class="music-btn" title="Tắt/Bật nhạc">🔊</button>

  <div class="hero-content">
    <h1 class="fade-in">Lê Minh Quang</h1>
    <h3 class="typing"></h3>
    <p class="fade-in-delay2">Học hỏi – Sáng tạo – Ứng dụng AI vào cuộc sống</p>
    <button class="btn scroll-btn" onclick="scrollToAbout()">TÌM HIỂU THÊM</button>
  </div>
</section>

<!-- ABOUT -->
<section id="about" class="intro fade-up">
  <div class="intro-card">
    <div class="intro-text">
      <h2>LÊ MINH QUANG LÀ AI?</h2>
      <p>
        Tôi là sinh viên Công nghệ Thông tin, chuyên ngành An ninh mạng, với niềm đam mê nghiên cứu 
        <b>Mạng máy tính</b> và <b>phân tích dữ liệu</b>. 
        Mục tiêu của tôi là phát triển các giải pháp thông minh mang lại giá trị thực tế trong lĩnh vực mạng và đời sống.
      </p>
      <p>
        Với nền tảng vững chắc về lập trình (Python, C#, JavaScript) và kinh nghiệm thực hành qua nhiều dự án, 
        tôi luôn hướng đến việc học hỏi, thử nghiệm, và ứng dụng công nghệ vào các bài toán thực tế.
      </p>
      <p><b>Giúp bạn</b> hiểu rõ cách công nghệ có thể thay đổi cuộc sống.</p>
    </div>
  </div>
</section>

<!-- EXPERIENCE -->
<section class="experience fade-up">
  <h2>📘 Hành trình & Kinh nghiệm</h2>
  <ul>
    <li><b>2025:</b> Phát triển hệ thống dự đoán chứng khoán từ giao dịch cũ (15.8k mẫu, Accuracy 0.87)</li>
    <li><b>2024:</b> Ứng dụng quản lý học viên và thiết bị – C# + SQL + WinForms</li>
    <li><b>2023:</b> Xây dựng blog cá nhân bằng Hugo</li>
  </ul>
</section>

<!-- SKILLS -->
<section class="skills fade-up">
  <h2>💡 Kỹ năng chuyên môn</h2>
  <div class="skill-item"><span>Python / Machine Learning</span><div class="bar"><div data-width="90%"></div></div></div>
  <div class="skill-item"><span>Data Processing & Feature Engineering</span><div class="bar"><div data-width="85%"></div></div></div>
  <div class="skill-item"><span>Web Development (HTML/CSS/JS)</span><div class="bar"><div data-width="75%"></div></div></div>
  <div class="skill-item"><span>Git / Hugo / Project Management</span><div class="bar"><div data-width="80%"></div></div></div>
</section>

<!-- PROJECTS -->
<section class="projects fade-up">
  <h2>🚀 Dự án tiêu biểu</h2>
  <div class="project-grid">
    <div class="project-card">
      <h3>Stock Price Prediction</h3>
      <p>Xây dựng mô hình học máy dự đoán giá cổ phiếu dựa trên dữ liệu lịch sử (Open, Close, Volume).
Ứng dụng các thuật toán LSTM và Random Forest để phân tích xu hướng thị trường và đưa ra dự báo ngắn hạn.</p>
    </div>
    <div class="project-card">
      <h3>AI Chatbot Tutor</h3>
      <p>Ứng dụng chatbot sử dụng Natural Language Processing (NLP) giúp sinh viên luyện tiếng Anh và trả lời câu hỏi học tập.
Dự án dùng Python + Flask + OpenAI API để tạo giao diện hội thoại tự nhiên và thân thiện.</p>
    </div>
    <div class="project-card">
      <h3>Smart Attendance System</h3>
      <p>Ứng dụng nhận diện khuôn mặt (Face Recognition) giúp giáo viên điểm danh tự động bằng webcam.
Công nghệ sử dụng: OpenCV, dlib, SQLite, giao diện viết bằng Python (Tkinter).</p>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="contact fade-in">
  <h2>📫 Liên hệ</h2>
  <p>
    ✉️ <a href="mailto:leminhquang213@gmail.com">leminhquang213@gmail.com</a><br>
    🐙 <a href="https://github.com/leeminhquang" target="_blank">github.com/leeminhquang</a><br>
    🌐 <a href="https://leeminhquang.github.io" target="_blank">Portfolio Website</a>
  </p>
</section>
