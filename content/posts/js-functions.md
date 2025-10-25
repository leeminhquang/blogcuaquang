---
title: "Hàm và Phạm vi trong JavaScript"
date: 2025-10-25
description: "Tìm hiểu khái niệm hàm (function), tham số, giá trị trả về, arrow function và phạm vi biến (scope) trong JavaScript."
categories: ["JavaScript"]
tags: ["JavaScript", "Function", "Scope", "Hoisting"]
thumbnail: "/images/posts/js-functions.jpg"
---

## ⚙️ 1. Khái niệm về hàm

**Hàm (Function)** là khối mã thực hiện một tác vụ cụ thể và có thể được **tái sử dụng** nhiều lần.  
Hàm giúp mã dễ đọc, dễ bảo trì và tránh lặp lại.

Cú pháp:

```js
function tenHam(thamSo1, thamSo2) {
  // phần thân hàm
  return giaTri;
}
Ví dụ:
```
```js
function tinhTong(a, b) {
  return a + b;
}

let kq = tinhTong(5, 3);
console.log("Tổng là:", kq);
```
Kết quả:

```r
Tổng là: 8

```
🧩 2. Hàm có và không có tham số
Không có tham số:
```js
function chao() {
  console.log("Xin chào bạn!");
}

chao();
```
Có tham số:
```js
function sayHello(name) {
  console.log("Xin chào, " + name + "!");
}

sayHello("Quang");
```
🔁 3. Giá trị trả về (return)
Hàm có thể trả về giá trị để sử dụng ở nơi khác.

```js
function nhanDoi(x) {
  return x * 2;
}

let ketqua = nhanDoi(10);
console.log(ketqua); // 20
```
Khi hàm gặp return, nó dừng thực thi và trả kết quả ra ngoài.

⚡ 4. Arrow Function (Hàm mũi tên – ES6)
Cách viết ngắn gọn hơn cho hàm thông thường.

```js
// Cách cũ
function square(n) {
  return n * n;
}

// Arrow function
const square2 = (n) => n * n;

console.log(square(4));  // 16
console.log(square2(5)); // 25
```
Một số cách viết khác:
```js
const greet = () => console.log("Hello!");
const add = (a, b) => a + b;
const info = (name, age) => {
  return `${name} năm nay ${age} tuổi`;
};

console.log(info("Lan", 21));
```
💡 Nếu hàm chỉ có 1 biểu thức, có thể bỏ ngoặc {} và từ khóa return.

🧠 5. Phạm vi (Scope) trong JavaScript
Phạm vi quyết định nơi biến được truy cập trong chương trình.

Loại	Giải thích	Ví dụ
Global Scope	Biến khai báo ngoài tất cả hàm – dùng được mọi nơi	var x = 10;
Local Scope	Biến khai báo trong hàm – chỉ dùng trong hàm đó	let y = 5;
Block Scope (ES6)	Biến khai báo trong {} (với let, const) chỉ tồn tại trong khối đó	if(true){ let z=1; }

Ví dụ:

```js
let globalVar = "ngoài hàm";

function testScope() {
  let localVar = "trong hàm";
  console.log(globalVar); // hợp lệ
  console.log(localVar);  // hợp lệ
}

testScope();
console.log(globalVar); // hợp lệ
// console.log(localVar); ❌ lỗi: không thể truy cập ngoài hàm
```
🧩 6. Hoisting trong JavaScript
Hoisting là cơ chế kéo lên đầu phạm vi của khai báo hàm và biến (với var) trước khi thực thi mã.

Ví dụ:

```js
sayHi(); // ✅ vẫn chạy được

function sayHi() {
  console.log("Xin chào!");
}
```
Nhưng với let và const, hoisting không áp dụng:

```js
console.log(x); // ❌ lỗi
let x = 10;
```
⚠️ Vì vậy, nên khai báo biến trước khi dùng để tránh lỗi logic.

🧰 7. Hàm ẩn danh (Anonymous Function)
Hàm không có tên, thường dùng làm callback:

```js
setTimeout(function() {
  console.log("In ra sau 2 giây");
}, 2000);
```
Hoặc dùng arrow function:

```js
setTimeout(() => console.log("In ra sau 2 giây (ES6)"), 2000);
```
💬 8. Hàm lồng nhau (Nested Function)
Một hàm có thể chứa hàm khác:

```js
function outer() {
  let message = "Xin chào từ outer!";
  
  function inner() {
    console.log(message);
  }

  inner();
}

outer();
```
Hàm inner có thể truy cập biến của outer → đây là closure.

📚 9. Tổng kết
Khái niệm	Mô tả
Function	Khối mã thực hiện nhiệm vụ cụ thể
return	Trả giá trị từ hàm ra ngoài
Arrow Function	Cú pháp ngắn gọn hơn, giới thiệu từ ES6
Scope	Quy định phạm vi truy cập của biến
Hoisting	Cơ chế kéo khai báo lên đầu phạm vi
Closure	Hàm con truy cập biến của hàm cha