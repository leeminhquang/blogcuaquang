---
title: "Kế thừa và Đa hình trong Java"
date: 2025-10-25
description: "Tìm hiểu hai trụ cột quan trọng của lập trình hướng đối tượng trong Java: Kế thừa (Inheritance) và Đa hình (Polymorphism)."
categories: ["Java"]
tags: ["Java", "OOP", "Inheritance", "Polymorphism"]
thumbnail: "/images/posts/java-inheritance.jpg"
---

## 🧬 1. Khái niệm kế thừa (Inheritance)

**Kế thừa** cho phép một lớp **mở rộng (extend)** lớp khác để **tái sử dụng mã** và **mở rộng chức năng** mà không cần viết lại.

- Lớp gốc (cha): **superclass** hoặc **parent class**  
- Lớp kế thừa (con): **subclass** hoặc **child class**

### Cú pháp:
```java
class Subclass extends Superclass {
    // code mở rộng
}
```
Ví dụ:

```java
class Animal {
    void eat() {
        System.out.println("Động vật đang ăn...");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Gâu gâu!");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();   // Kế thừa từ lớp Animal
        d.bark();  // Phương thức riêng của Dog
    }
}
```
Kết quả:

```css
Động vật đang ăn...
Gâu gâu!
```
⚙️ 2. Từ khóa super trong kế thừa
super dùng để truy cập lớp cha — gồm 2 công dụng chính:

Gọi hàm tạo của lớp cha

Gọi phương thức hoặc thuộc tính của lớp cha

Ví dụ:
```java
class Animal {
    Animal() {
        System.out.println("Động vật được tạo");
    }
    void eat() {
        System.out.println("Động vật đang ăn");
    }
}

class Dog extends Animal {
    Dog() {
        super(); // gọi constructor lớp cha
        System.out.println("Chó được tạo");
    }

    void eat() {
        super.eat(); // gọi phương thức lớp cha
        System.out.println("Chó ăn cơm");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog d = new Dog();
        d.eat();
    }
}
```
Kết quả:

```r
Động vật được tạo
Chó được tạo
Động vật đang ăn
Chó ăn cơm
```
🧩 3. Ghi đè phương thức (Method Overriding)
Overriding xảy ra khi lớp con định nghĩa lại phương thức đã tồn tại ở lớp cha.
Dùng để thay đổi hành vi cho phù hợp với lớp con.

Ví dụ:
```java
class Vehicle {
    void run() {
        System.out.println("Phương tiện đang chạy...");
    }
}

class Bike extends Vehicle {
    @Override
    void run() {
        System.out.println("Xe đạp đang di chuyển bằng sức người.");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle v = new Bike();  // Kiểu khai báo là Vehicle, đối tượng thực là Bike
        v.run();                 // Gọi phương thức của lớp con
    }
}
```
Kết quả:

```css
Xe đạp đang di chuyển bằng sức người.
```
🧠 4. Khái niệm đa hình (Polymorphism)
Đa hình nghĩa là: "nhiều hình dạng".
Trong Java, cùng một phương thức có thể hoạt động khác nhau tùy theo đối tượng thực tế.

Có hai loại đa hình:
Loại	Cách thực hiện	Ví dụ
Compile-time Polymorphism	Thông qua nạp chồng phương thức (Overloading)	add(int a, int b) và add(double a, double b)
Runtime Polymorphism	Thông qua ghi đè phương thức (Overriding)	Vehicle v = new Bike(); v.run();

💡 5. Ví dụ tổng hợp: Kế thừa + Đa hình
```java
class Employee {
    void work() {
        System.out.println("Nhân viên đang làm việc...");
    }
}

class Developer extends Employee {
    @Override
    void work() {
        System.out.println("Lập trình viên đang viết code...");
    }
}

class Tester extends Employee {
    @Override
    void work() {
        System.out.println("Tester đang kiểm thử phần mềm...");
    }
}

public class Company {
    public static void main(String[] args) {
        Employee e1 = new Developer();
        Employee e2 = new Tester();

        e1.work();
        e2.work();
    }
}
```
Kết quả:

```css

Lập trình viên đang viết code...
Tester đang kiểm thử phần mềm...
```
➡️ Cùng là Employee, nhưng hành vi khác nhau — chính là đa hình động (runtime polymorphism).

🧩 6. Lợi ích của kế thừa & đa hình
Ưu điểm	Giải thích
Tái sử dụng mã (Code Reuse)	Lớp con có thể dùng lại logic của lớp cha
Giảm trùng lặp	Không cần viết lại hàm tương tự
Dễ mở rộng	Thêm lớp mới mà không sửa mã gốc
Tăng khả năng bảo trì	Thay đổi hành vi dễ dàng qua overriding

📚 Tổng kết
extends dùng để kế thừa lớp cha.

super dùng để gọi thuộc tính/hàm của lớp cha.

@Override giúp ghi đè phương thức.

Polymorphism cho phép một interface duy nhất biểu diễn nhiều hành vi khác nhau.