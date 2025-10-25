---
title: "Fetch API và Giao tiếp với Server trong JavaScript"
date: 2025-10-25
description: "Tìm hiểu cách sử dụng Fetch API để gửi yêu cầu HTTP (GET, POST), xử lý dữ liệu JSON và làm việc với async/await trong JavaScript."
categories: ["JavaScript"]
tags: ["JavaScript", "Fetch API", "HTTP", "JSON", "Async"]
thumbnail: "/images/posts/js-fetch-api.jpg"
---

## 🌐 1. Giới thiệu về Fetch API

**Fetch API** là công cụ tích hợp sẵn trong trình duyệt giúp JavaScript **gửi và nhận dữ liệu từ server** mà không cần tải lại trang.

Fetch được sử dụng phổ biến trong:
- Gọi API (REST, GraphQL)
- Gửi dữ liệu form
- Lấy dữ liệu JSON từ backend

---

## ⚙️ 2. Cú pháp cơ bản

```js
fetch(url)
  .then(response => response.json()) // chuyển dữ liệu JSON
  .then(data => console.log(data))
  .catch(error => console.error("Lỗi:", error));
  ```
Ví dụ:

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(res => res.json())
  .then(data => console.log("Dữ liệu:", data))
  .catch(err => console.error("Lỗi:", err));
  ```
Kết quả:

```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati",
  "body": "quia et suscipit..."
}
```
🧠 3. Fetch với Async / Await
Cách viết hiện đại, dễ đọc hơn Promise chaining.

```js
async function getPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await res.json();
    console.log("Tiêu đề:", data.title);
  } catch (error) {
    console.error("Lỗi:", error);
  }
}

getPost();
```
💡 Dùng try...catch để bắt lỗi khi fetch thất bại (ví dụ: mất mạng, server lỗi).

🧩 4. Gửi dữ liệu với phương thức POST
Fetch mặc định là GET.
Nếu muốn gửi dữ liệu lên server, dùng phương thức POST và thêm body (thường là JSON).

```js
async function createPost() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "Bài viết mới",
        body: "Đây là nội dung bài viết",
        userId: 1
      })
    });

    const data = await res.json();
    console.log("Kết quả:", data);
  } catch (error) {
    console.error("Lỗi gửi dữ liệu:", error);
  }
}

createPost();
```
Kết quả:

```json
{
  "title": "Bài viết mới",
  "body": "Đây là nội dung bài viết",
  "userId": 1,
  "id": 101
}
```
🔁 5. Các phương thức HTTP phổ biến
Phương thức	Mục đích	Ví dụ
GET	Lấy dữ liệu	Lấy danh sách bài viết
POST	Gửi dữ liệu mới	Tạo bài viết mới
PUT	Cập nhật toàn bộ tài nguyên	Cập nhật bài viết
PATCH	Cập nhật một phần	Sửa một trường
DELETE	Xóa tài nguyên	Xóa bài viết

💡 6. Kiểm tra mã phản hồi (HTTP Status Code)
Fetch không ném lỗi cho mã HTTP 404 hay 500 — bạn cần kiểm tra thủ công:

```js
async function getData() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/abc");

    if (!res.ok) {
      throw new Error("Lỗi HTTP: " + res.status);
    }

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err.message);
  }
}

getData();
```
Kết quả:

```css
Lỗi HTTP: 404
```
📬 7. Gửi dữ liệu Form
```html
<form id="myForm">
  <input type="text" name="username" placeholder="Tên người dùng" />
  <button type="submit">Gửi</button>
</form>

<script>
  const form = document.getElementById("myForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const res = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    console.log(await res.json());
  });
</script>
```
⚠️ 8. Bắt lỗi mạng và Timeout
Fetch không có timeout mặc định, nhưng ta có thể tự xử lý bằng Promise.race():

```js
async function fetchWithTimeout(url, ms) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);

  try {
    const res = await fetch(url, { signal: controller.signal });
    return await res.json();
  } catch (error) {
    console.error("Lỗi hoặc quá thời gian:", error.name);
  } finally {
    clearTimeout(timeout);
  }
}

fetchWithTimeout("https://jsonplaceholder.typicode.com/users", 2000);
```
📚 9. Tổng kết
Tính năng	Mô tả
Fetch API	Gửi/nhận dữ liệu từ server
Promise & Async/Await	Giúp xử lý bất đồng bộ dễ đọc hơn
GET / POST / PUT / DELETE	Các phương thức HTTP phổ biến
Kiểm tra res.ok	Đảm bảo phản hồi thành công
Bắt lỗi mạng	Dùng try...catch và timeout

✅ Kết luận
Fetch API là công cụ mạnh mẽ để giao tiếp giữa frontend và backend.

Kết hợp async/await giúp mã dễ hiểu, rõ ràng và tránh callback hell.

Hiểu rõ HTTP status code giúp bạn kiểm soát logic và hiển thị thông báo hợp lý.