trigger: glob
description: "Áp dụng khi tạo hoặc chỉnh sửa HTML, CSS và JavaScript của Landing Page"
globs: "*.html, .css, .js, css/.css, js/.js"
Implementation Rules
HTML

Tạo index.html theo HTML5 chuẩn.

Bắt buộc có:

<!DOCTYPE html>


Sử dụng:

<html lang="vi">


Trong <head> phải có:

UTF-8 charset

Responsive viewport

Title

Bootstrap CSS CDN

CSS custom của project

Cuối <body> load:

Bootstrap JavaScript bundle CDN nếu cần

js/script.js

Bootstrap

Sử dụng Bootstrap qua CDN.

Ưu tiên Bootstrap 5.

Không tải Bootstrap bằng npm.

Không copy toàn bộ Bootstrap CSS vào project.

Sử dụng Bootstrap cho:

Container

Grid

Navbar

Responsive utilities

Buttons

Cards

Spacing

Responsive breakpoints

HTML Structure

Cấu trúc ưu tiên:

<body>
    <header>
        ...
    </header>

    <main>
        <section id="hero">
            ...
        </section>

        <section id="features">
            ...
        </section>
    </main>

    <footer>
        ...
    </footer>
</body>

Navbar

Navbar phải sử dụng Bootstrap responsive navbar.

Menu navigation phải trỏ tới các section tương ứng bằng anchor:

#home
#project
#features
#contact


Không tạo link tới các trang chưa tồn tại.

Hero

Hero phải sử dụng Bootstrap grid.

Desktop:

col-lg-6 | col-lg-6


Bên trái:

H1

Description

CTA

Bên phải:

Image

Responsive image

Rounded corners nếu phù hợp

Features

Sử dụng:

row
col-md-4


Mỗi feature có:

Image

Heading

Description

Ba feature phải có ba hình ảnh khác nhau.

CSS

Tạo:

css/style.css

Định nghĩa CSS variables:

:root {
    --primary-color: #2d2d86;
    --background-color: #f2f2f2;
    --white: #ffffff;
    --text-color: #2d2d86;
}


Không lặp lại màu sắc hard-code nhiều lần nếu có thể dùng CSS variables.

JavaScript

Tạo:

js/script.js

JavaScript chỉ xử lý interaction cần thiết.

Có thể triển khai:

Smooth scrolling

Navbar behavior

CTA interaction

Simple reveal animation

Không tạo:

Backend calls

Database

Authentication

Build process

Framework

Nếu không cần JavaScript, vẫn phải giữ file js/script.js tối giản và không thêm code vô nghĩa.

Hình ảnh

Mỗi image phải có:

alt="..."


Sử dụng:

img {
    max-width: 100%;
}


và các class Bootstrap phù hợp như:

img-fluid


Không làm hình ảnh bị méo.

Performance

Ưu tiên:

Hình ảnh responsive

loading="lazy" cho hình ảnh không nằm trong viewport đầu tiên

Không sử dụng thư viện JavaScript dư thừa

Không tạo animation nặng

Hero image có thể không cần lazy-load vì nằm trong viewport đầu tiên.

Validation

Sau khi triển khai, kiểm tra:

HTML

Có đúng semantic structure không?

Có tag đóng/mở đúng không?

Có duplicate ID không?

Có missing alt không?

CSS

Có syntax error không?

Responsive có hoạt động không?

Màu chủ đạo có đúng không?

JavaScript

Không có syntax error

Không có lỗi khi DOM element không tồn tại

Event listener hoạt động đúng

Acceptance Criteria

Landing Page phải đáp ứng toàn bộ:

 index.html là entry point.

 Bootstrap được load bằng CDN.

 CSS nằm trong css/style.css.

 JavaScript nằm trong js/script.js.

 Có Header/Navbar.

 Có logo/brand Vinhomes.

 Có menu navigation.

 Có Hero Section.

 Hero có heading.

 Hero có description.

 Hero có CTA.

 Hero có hình ảnh bên phải trên desktop.

 Có Features Section.

 Có đúng 3 feature chính.

 Mỗi feature có hình ảnh riêng.

 Có Footer.

 Responsive trên mobile/tablet/desktop.

 Background chính là #f2f2f2.

 Text chính là #2d2d86.

 Không có backend.

 Không sử dụng framework frontend ngoài Bootstrap.