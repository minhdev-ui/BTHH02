
function Footer() {
    return `
        <div class="cooperation">
        <div class="coop-inner">
        <div class="coop-title">
            <h1>ĐỐI TÁC CỦA HANOI - APTECH</h1>
        </div>
        <div class="coop-slides">
            <div class="coop-slide">
            <img src="https://aptech.vn/wp-content/uploads/2020/06/ncc.png" alt="">
            </div>
            <div class="coop-slide">
            <img src="https://aptech.vn/wp-content/uploads/2020/06/unnamed.png" alt="">
            </div>
            <div class="coop-slide">
            <img src="https://aptech.vn/wp-content/uploads/2020/06/Middlesex-University-Logo_s-1-1-600x400-1.jpg"
                alt="">
            </div>
            <div class="coop-slide">
            <img src="https://aptech.vn/wp-content/uploads/2021/01/logo.svg" alt="">
            </div>
            <div class="coop-slide">
            <img src="https://aptech.vn/wp-content/uploads/2021/01/logo-1.png" alt="">
            </div>
            <div class="coop-slide">
            <img src="https://aptech.vn/wp-content/uploads/2020/06/ncc.png" alt="">
            </div>
            <div class="coop-slide">
            <img src="https://aptech.vn/wp-content/uploads/2020/06/unnamed.png" alt="">
            </div>
            <div class="coop-slide">
            <img src="https://aptech.vn/wp-content/uploads/2020/06/Middlesex-University-Logo_s-1-1-600x400-1.jpg"
                alt="">
            </div>
            <div class="coop-slide">
            <img src="https://aptech.vn/wp-content/uploads/2021/01/logo.svg" alt="">
            </div>
            <div class="coop-slide">
            <img src="https://aptech.vn/wp-content/uploads/2021/01/logo-1.png" alt="">
            </div>
        </div>
        </div>
        <div class="controls">
        <div class="back-control control">
            <i class="fa-solid fa-angle-left"></i>
        </div>
        <div class="next-control control">
            <i class="fa-solid fa-angle-right"></i>
        </div>
        </div>
    </div>
    <div class="footer">
        <div class="footer-inner">
        <div class="footer-courses">
            <h2>KHÓA HỌC SẮP KHAI GIẢNG</h2>
            <a href="#">
            <i class="fa-solid fa-caret-right"></i>
            Lập trình viên Quốc Tế
            </a>
            <a href="#">
            <i class="fa-solid fa-caret-right"></i>
            Lập trình viên Quốc Tế
            </a>
            <a href="#">
            <i class="fa-solid fa-caret-right"></i>
            Lập trình viên Quốc Tế
            </a>
            <a href="#">
            <i class="fa-solid fa-caret-right"></i>
            Lập trình viên Quốc Tế
            </a>
        </div>
        <div class="footer-contact">
            <h2>Liên hệ</h2>
            <a href="#">
            <span class="address">
                Địa chỉ: Tầng 1, Tòa nhà C5, Đại học Thủy Lợi, 175 Tây Sơn, Trung Liệt, Đống Đa, Hà Nội
            </span>
            </a>
            <a href="#">
            <span>
                Tel: (024) 3563 7511
            </span>
            </a>
            <a href="#">
            <span>
                Hotline: 038 2020 858
            </span>
            </a>
            <a href="#">
            <span>
                Mail: info@aptech.vn
            </span>
            </a>
        </div>
        <div class="footer-register">
            <h2>đăng ký tư vấn</h2>
            <form action="">
            <input type="text" placeholder="Họ và Tên" required>
            <input type="email" placeholder="Email" required>
            <input type="text" placeholder="Số điện thoại" required>
            <select name="" id="" required>
                <option value="">Trình Độ</option>
                <option value="student">Học Sinh</option>
                <option value="students">Sinh Viên</option>
                <option value="job">Đi Làm</option>
                <option value="other">Khác</option>
            </select>
            <button class="btn">Gửi Đăng Ký</button>
            </form>
        </div>
        </div>
    </div>
    `
}

const footerElement = document.getElementById('Footer')
footerElement.innerHTML = Footer()