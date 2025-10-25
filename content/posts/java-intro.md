---
title: "Giới thiệu ngôn ngữ Java"
date: 2025-10-25
description: "Tìm hiểu lịch sử, đặc điểm, kiến trúc và cú pháp cơ bản của Java — ngôn ngữ lập trình hướng đối tượng phổ biến nhất thế giới."
categories: ["Java"]
tags: ["Java", "OOP", "Programming"]
thumbnail: "/images/posts/java-intro.jpg"
---

## 🧩 Giới thiệu chung

**Java** là một ngôn ngữ lập trình **đa nền tảng (cross-platform)**, **hướng đối tượng (OOP)** và **bảo mật cao**, được phát triển bởi **Sun Microsystems** (nay thuộc Oracle). Java cho phép lập trình viên **“Write Once, Run Anywhere”** — nghĩa là chỉ cần viết một lần, có thể chạy trên mọi hệ điều hành hỗ trợ Java Virtual Machine (JVM).

---

## ⚙️ Kiến trúc Java

Khi bạn biên dịch một chương trình Java:

1. **Mã nguồn (.java)** → được **biên dịch** thành **bytecode (.class)** bằng `javac`.
2. **Bytecode** → được **chạy bởi JVM** (Java Virtual Machine).
3. JVM có thể thực thi bytecode trên mọi hệ điều hành (Windows, macOS, Linux...).

Source Code (.java) → Compiler → Bytecode (.class) → JVM → OS


Điều này giúp Java trở thành ngôn ngữ phổ biến trong **ứng dụng di động (Android)**, **web backend**, **AI/ML**, **IoT**, và **ứng dụng doanh nghiệp (Spring, Jakarta EE)**.

---

## 🧱 Đặc điểm nổi bật

| Đặc điểm | Giải thích |
|-----------|-------------|
| **Đa nền tảng** | Chạy được trên nhiều hệ điều hành nhờ JVM |
| **Hướng đối tượng (OOP)** | Mọi thứ đều là đối tượng |
| **Bảo mật cao** | Có trình quản lý bộ nhớ và sandbox |
| **Đa luồng (Multithreading)** | Cho phép chạy song song nhiều tác vụ |
| **Quản lý bộ nhớ tự động** | Garbage Collector giúp giải phóng bộ nhớ không còn dùng |
| **Thư viện phong phú** | Có sẵn hàng nghìn thư viện chuẩn (Java Standard Library) |

---

## 💻 Cấu trúc chương trình Java cơ bản

Một chương trình Java tối thiểu có cấu trúc như sau:

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Xin chào, Java!");
    }
}
```

Giải thích:
public class HelloWorld: Định nghĩa một lớp (class) tên là HelloWorld.

public static void main(String[] args): Là hàm main — điểm bắt đầu của chương trình.

System.out.println(...): In ra màn hình dòng chữ.

👉 Khi chạy, kết quả là:
```java
Xin chào, Java!
```
🧠 Biến và Kiểu dữ liệu trong Java
Java là ngôn ngữ kiểu tĩnh (statically typed), nghĩa là phải khai báo kiểu dữ liệu trước khi sử dụng.

Ví dụ:
```java
int age = 20;
double salary = 5500.75;
boolean isStudent = false;
char grade = 'A';
String name = "Lê Minh Quang";

System.out.println("Tên: " + name + ", Tuổi: " + age);
```
Một số kiểu dữ liệu cơ bản:
Kiểu dữ liệu	Ví dụ	Kích thước (byte)
byte	10	1
short	1000	2
int	100000	4
long	123456789L	8
float	3.14f	4
double	3.141592	8
boolean	true / false	1
char	'A'	2
String	"Hello"	—

🔁 Cấu trúc điều khiển
Câu lệnh if-else
```java
int age = 18;
if (age >= 18) {
    System.out.println("Đã đủ tuổi trưởng thành");
} else {
    System.out.println("Chưa đủ tuổi");
}```
Vòng lặp for
```java
for (int i = 1; i <= 5; i++) {
    System.out.println("Lần lặp thứ: " + i);
}
```
Vòng lặp while
```java
int count = 1;
while (count <= 3) {
    System.out.println("Đếm: " + count);
    count++;
}
```
📚 Tổng kết
Java là nền tảng lập trình mạnh mẽ, bảo mật, đa nền tảng.

Cấu trúc chương trình rõ ràng, dễ học cho người mới.

Là ngôn ngữ nền tảng cho nhiều framework lớn như Spring, Hibernate, Android SDK.