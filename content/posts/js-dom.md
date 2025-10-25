---
title: "Tương tác với DOM trong JavaScript"
date: 2025-10-25
description: "Tìm hiểu cách JavaScript tương tác với DOM để thay đổi nội dung, thêm phần tử và xử lý sự kiện trên trang web."
categories: ["JavaScript"]
tags: ["JavaScript", "DOM", "Event", "HTML", "Browser"]
thumbnail: "/images/posts/js-dom.jpg"
---

## 🌐 1. DOM là gì?

**DOM (Document Object Model)** là mô hình cho phép JavaScript **truy cập và thao tác với nội dung HTML** của trang web.  
Trình duyệt tự động **chuyển đổi mã HTML** thành một cây DOM (DOM tree).

Ví dụ:
```html
<html>
  <body>
    <h1 id="title">Xin chào!</h1>
    <p class="text">Đây là ví dụ DOM.</p>
  </body>
</html>
```
Cấu trúc DOM tương ứng:

```less
Document
 └── html
      └── body
           ├── h1 (id="title")
           └── p (class="text")

```
🧭 2. Truy cập phần tử trong DOM
Dựa trên ID
```js
let tieuDe = document.getElementById("title");
console.log(tieuDe.textContent);
```
Dựa trên Class
```js
let doanVan = document.getElementsByClassName("text");
console.log(doanVan[0].innerHTML);
```
Dựa trên Tag
```js
let theH1 = document.getElementsByTagName("h1");
console.log(theH1[0].innerText);
```
Dựa trên CSS Selector (phổ biến nhất)
```js
let p = document.querySelector(".text"); // phần tử đầu tiên
let allP = document.querySelectorAll("p"); // tất cả các thẻ p
```
🧱 3. Thay đổi nội dung và thuộc tính
Thay đổi nội dung:
```js
let title = document.getElementById("title");
title.textContent = "Chào mừng bạn đến với JavaScript!";
```
Thay đổi HTML bên trong:
```js
title.innerHTML = "<em>Chào mừng bạn!</em>";
```
Thay đổi thuộc tính:
```js
title.style.color = "red";
title.style.fontSize = "28px";
title.setAttribute("class", "highlight");
```
➕ 4. Thêm và xóa phần tử DOM
Tạo phần tử mới:
```js
let newP = document.createElement("p");
newP.textContent = "Đoạn văn mới được thêm bằng JavaScript!";
document.body.appendChild(newP);
```
Xóa phần tử:
```js
let oldP = document.querySelector(".text");
oldP.remove();
```
🧠 5. Xử lý sự kiện (Event Handling)
Cách 1: Dùng HTML attribute
```html
<button onclick="alert('Xin chào!')">Nhấn vào tôi</button>

```
Cách 2: Dùng addEventListener()
```js
let btn = document.createElement("button");
btn.textContent = "Nhấn vào đây";
document.body.appendChild(btn);

btn.addEventListener("click", function() {
  alert("Bạn vừa nhấn nút!");
});
```
Cách 3: Arrow function
```js
btn.addEventListener("mouseover", () => {
  btn.style.backgroundColor = "lightgreen";
});
```
🔁 6. Ví dụ tổng hợp
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Demo DOM</title>
  </head>
  <body>
    <h2 id="greeting">Xin chào!</h2>
    <button id="btn">Thay đổi lời chào</button>

    <script>
      const greeting = document.getElementById("greeting");
      const btn = document.getElementById("btn");

      btn.addEventListener("click", () => {
        greeting.textContent = "Chào mừng bạn đến với DOM!";
        greeting.style.color = "blue";
      });
    </script>
  </body>
</html>
```
Giải thích:

Khi người dùng nhấn nút, đoạn <h2> sẽ thay đổi nội dung và màu sắc.

💬 7. Một số sự kiện phổ biến
Loại sự kiện	Mô tả	Ví dụ
click	Khi nhấn chuột	btn.addEventListener("click", ...)
mouseover	Khi rê chuột vào	Thay đổi màu khi hover
keydown	Khi nhấn phím	Dùng để bắt phím người dùng
submit	Khi gửi form	Kiểm tra dữ liệu form
change	Khi giá trị input thay đổi	Xác thực đầu vào người dùng

⚡ 8. DOM Traversal (Duyệt cây DOM)
Dùng để di chuyển giữa các phần tử trong cây DOM:

```js
let parent = document.querySelector("#content");
let firstChild = parent.firstElementChild;
let siblings = firstChild.nextElementSibling;

console.log(parent.children);
console.log(siblings);
```
📚 9. Tổng kết
Tính năng	Giải thích
DOM	Cấu trúc cây đại diện cho tài liệu HTML
Truy cập phần tử	getElementById, querySelector...
Thay đổi nội dung	textContent, innerHTML, style
Thêm / Xóa phần tử	createElement, appendChild, remove
Xử lý sự kiện	addEventListener để lắng nghe và phản hồi hành động
Traversal	Duyệt giữa các node trong DOM
