---
title: "Lớp, Đối tượng và Hàm tạo trong Java"
date: 2025-10-25
description: "Hiểu rõ khái niệm class, object, constructor và cách hoạt động của chúng trong Java — nền tảng cốt lõi của lập trình hướng đối tượng."
categories: ["Java"]
tags: ["Java", "OOP", "Class", "Object", "Constructor"]
thumbnail: "/images/posts/java-classes.jpg"
---

## 🧩 1. Khái niệm Lớp (Class) và Đối tượng (Object)

Trong **Java**, mọi thứ đều xoay quanh **class** và **object**:

- **Class (lớp)** là **bản thiết kế (blueprint)** mô tả thuộc tính và hành vi của một nhóm đối tượng.  
- **Object (đối tượng)** là **thực thể cụ thể (instance)** được tạo ra từ lớp.

Ví dụ:  
> Lớp `Student` là khuôn mẫu, còn `Minh`, `Lan`, `Quang` là các đối tượng của lớp đó.

---

## 🧱 2. Cấu trúc cơ bản của một lớp

Một lớp trong Java thường gồm:

1. **Thuộc tính (Attributes / Fields)** – dữ liệu đặc trưng.  
2. **Phương thức (Methods)** – hành vi, hành động.  
3. **Hàm tạo (Constructor)** – khởi tạo giá trị ban đầu khi tạo đối tượng.

Ví dụ:

```java
public class Student {
    // Thuộc tính
    String name;
    int age;

    // Hàm tạo (Constructor)
    public Student(String n, int a) {
        name = n;
        age = a;
    }

    // Phương thức
    void introduce() {
        System.out.println("Xin chào, mình là " + name + ", " + age + " tuổi.");
    }
}
```
Giải thích:
String name, int age → là biến thành viên (fields) của lớp.

Student(...) → là hàm tạo dùng để khởi tạo đối tượng.

introduce() → là hành vi mà đối tượng có thể thực hiện.

🧠 3. Cách tạo và sử dụng đối tượng
Sau khi định nghĩa lớp, ta có thể tạo đối tượng (object) từ lớp bằng từ khóa new:

```java
public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Minh Quang", 20);
        Student s2 = new Student("Lan Anh", 22);

        s1.introduce();
        s2.introduce();
    }
}
```
Kết quả khi chạy:

```css
Xin chào, mình là Minh Quang, 20 tuổi.
Xin chào, mình là Lan Anh, 22 tuổi.
```
🧩 4. Hàm tạo (Constructor) trong Java
Constructor là phương thức đặc biệt:

Có tên trùng với tên lớp.

Không có kiểu trả về (kể cả void).

Dùng để khởi tạo giá trị ban đầu cho đối tượng.

Có 2 loại:
Constructor mặc định (Default Constructor)
→ Tự động được tạo nếu bạn không khai báo thủ công.

Constructor có tham số (Parameterized Constructor)
→ Do bạn định nghĩa để gán giá trị cụ thể.

Ví dụ:

```java
public class Car {
    String brand;
    int year;

    // Constructor có tham số
    public Car(String b, int y) {
        brand = b;
        year = y;
    }

    // Constructor mặc định
    public Car() {
        brand = "Chưa xác định";
        year = 0;
    }

    void info() {
        System.out.println("Xe: " + brand + " - Năm: " + year);
    }
}

public class Main {
    public static void main(String[] args) {
        Car c1 = new Car("Toyota", 2021);
        Car c2 = new Car();

        c1.info();
        c2.info();
    }
}
```
Kết quả:

```yaml
Sao chép mã
Xe: Toyota - Năm: 2021
Xe: Chưa xác định - Năm: 0
```
⚙️ 5. Từ khóa this trong Java
this đại diện cho đối tượng hiện tại.
Nó thường được dùng để phân biệt biến cục bộ và biến thành viên có cùng tên.

Ví dụ:

```java
public class Person {
    String name;

    Person(String name) {
        this.name = name;  // "this.name" là thuộc tính của lớp
    }

    void sayHello() {
        System.out.println("Xin chào, tôi là " + name);
    }
}

public class Main {
    public static void main(String[] args) {
        Person p = new Person("Quang");
        p.sayHello();
    }
}
```
Kết quả:

```css
Sao chép mã
Xin chào, tôi là Quang
```
🧩 6. Tổng kết
Thành phần	Mục đích
Class	Mô tả cấu trúc và hành vi chung
Object	Thực thể được tạo từ lớp
Constructor	Khởi tạo giá trị ban đầu cho đối tượng
this	Đại diện cho đối tượng hiện tại

📚 Tóm tắt
Java là ngôn ngữ hướng đối tượng, nên class và object là nền tảng.

Constructor giúp khởi tạo dữ liệu ban đầu.

Từ khóa this giúp tham chiếu rõ ràng đến biến của lớp.