---
title: "Xử lý ngoại lệ trong Java"
date: 2025-10-24
tags: ["Java", "Exception"]
categories: ["Java"]
---

## ⚠️ Ngoại lệ là gì?
Ngoại lệ (Exception) là lỗi xảy ra trong quá trình chạy chương trình — ví dụ chia cho 0, truy cập mảng sai chỉ số, hoặc đọc file không tồn tại.

### Cấu trúc try-catch-finally
```java
public class Main {
    public static void main(String[] args) {
        try {
            int a = 10 / 0;
        } catch (ArithmeticException e) {
            System.out.println("Lỗi chia cho 0: " + e.getMessage());
        } finally {
            System.out.println("Khối finally luôn chạy!");
        }
    }
}
```
### ✅ Giải thích
- `try`: chứa đoạn mã có thể gây lỗi.
- `catch`: bắt lỗi cụ thể.
- `finally`: luôn chạy dù có lỗi hay không.

### 🧭 Tự tạo ngoại lệ
```java
if(age < 0) {
    throw new IllegalArgumentException("Tuổi không hợp lệ!");
}
```
