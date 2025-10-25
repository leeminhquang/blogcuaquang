---
title: "Xử lý bất đồng bộ với Async/Await trong JavaScript"
date: 2025-10-25
description: "Học cách xử lý tác vụ bất đồng bộ trong JavaScript bằng Promise, async/await và cách viết mã gọn gàng, dễ đọc hơn."
categories: ["JavaScript"]
tags: ["JavaScript", "Async", "Promise", "Await", "Asynchronous"]
thumbnail: "/images/posts/js-async-await.jpg"
---

## ⚙️ 1. Bất đồng bộ là gì?

JavaScript là ngôn ngữ **đơn luồng (single-threaded)** — nghĩa là nó chỉ xử lý **một tác vụ tại một thời điểm**.  
Tuy nhiên, trong thực tế, ta thường cần:
- Gọi API lấy dữ liệu từ server  
- Đọc/ghi file  
- Chờ người dùng nhập liệu  

➡️ Các tác vụ này mất thời gian, nên nếu xử lý **đồng bộ (synchronous)** thì chương trình sẽ bị “đơ”.  
Giải pháp là **xử lý bất đồng bộ (asynchronous)** để không chặn luồng chính.

---

## 🧱 2. Ví dụ về đồng bộ vs bất đồng bộ

### 🔹 Đồng bộ (Synchronous)
```js
console.log("Bắt đầu");
console.log("Đang xử lý...");
console.log("Kết thúc");
```
Kết quả:

```css
Bắt đầu
Đang xử lý...
```
Kết thúc
🔹 Bất đồng bộ (Asynchronous)
```js
console.log("Bắt đầu");

setTimeout(() => {
  console.log("Xử lý xong sau 2 giây!");
}, 2000);

console.log("Kết thúc");
```
Kết quả:

```css
Bắt đầu
Kết thúc
Xử lý xong sau 2 giây!
```
💡 JavaScript tiếp tục chạy mà không cần chờ setTimeout xong — đây chính là bất đồng bộ.

🧩 3. Callback
Callback là hàm được truyền vào như một tham số để gọi lại sau khi tác vụ hoàn tất.

```js
function layDuLieu(callback) {
  console.log("Đang tải dữ liệu...");
  setTimeout(() => {
    callback("Dữ liệu đã tải xong!");
  }, 2000);
}

layDuLieu((ketqua) => {
  console.log(ketqua);
});
```
⚠️ Tuy nhiên, nếu lồng nhiều callback → sẽ gặp Callback Hell (rất khó đọc, khó bảo trì).

🔁 4. Promise – Giải pháp cho callback hell
Promise là đối tượng đại diện cho một giá trị sẽ có trong tương lai:

pending – đang chờ xử lý

fulfilled – thành công

rejected – thất bại

Cú pháp:
```js
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Hoàn thành!");
  } else {
    reject("Lỗi rồi!");
  }
});

myPromise
  .then((res) => console.log(res))    // khi thành công
  .catch((err) => console.error(err)) // khi thất bại
  .finally(() => console.log("Kết thúc xử lý."));
  ```
Kết quả (khi thành công):

```css
Hoàn thành!
Kết thúc xử lý.
```
⚡ 5. Async / Await – Viết gọn hơn Promise
Từ ES8 (2017), JavaScript giới thiệu async/await giúp code bất đồng bộ dễ đọc như đồng bộ.

Ví dụ:
```js
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function chayDemo() {
  console.log("Bắt đầu");
  await delay(2000);
  console.log("Sau 2 giây");
  console.log("Kết thúc");
}

chayDemo();
```
Kết quả:

```css
Bắt đầu
(đợi 2 giây)
Sau 2 giây
Kết thúc
```
💡 await chỉ hoạt động bên trong hàm được khai báo async.

🧠 6. Ví dụ thực tế: Gọi API bằng Fetch + Async/Await
```js
async function getUsers() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.table(data);
  } catch (error) {
    console.error("Lỗi khi tải dữ liệu:", error);
  } finally {
    console.log("Hoàn tất yêu cầu.");
  }
}

getUsers();
```
Kết quả: hiển thị danh sách người dùng dưới dạng bảng trong console.

🔍 7. So sánh: Callback vs Promise vs Async/Await
Kiểu	Dễ đọc	Quản lý lỗi	Ghi chú
Callback	❌ Khó đọc	Khó xử lý	Dễ bị callback hell
Promise	✅ Khá tốt	Dễ bắt lỗi với .catch()	Phù hợp cho xử lý chuỗi
Async/Await	✅✅ Rõ ràng nhất	Dùng try...catch	Code sạch, dễ hiểu

📚 8. Tổng kết
Async giúp đánh dấu hàm là bất đồng bộ.

Await giúp “chờ” một Promise hoàn tất.

Dùng try...catch để xử lý lỗi khi dùng async/await.

Fetch API là ví dụ điển hình cho tác vụ bất đồng bộ trong web.

