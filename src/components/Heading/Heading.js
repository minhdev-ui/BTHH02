function Heading() {
    return `
        <div class="logo">
            <a href="index.html">
            <img src="https://aptech.vn/wp-content/uploads/2020/06/LOGO-APTECH-03-02-1.png" alt="" />
            </a>
        </div>
        <div class="nav">
            <ul class="nav-list">
            <li class="nav-list_item">
                <a href="index.html" class="nav_link">TRANG CHỦ</a>
            </li>
            <li class="nav-list_item">
                <a href="#" class="nav_link">HANOI-APTECH <i class="fa-solid fa-angle-down"></i></a>
                <ul class="sub-menu">
                <li class="sub-menu_item">
                    <a href="./intro.html" class="sub-menu_link">Giới thiệu</a>
                </li>
                <li class="sub-menu_item">
                    <a href="#" class="sub-menu_link">Cơ sở vật chất</a>
                </li>
                <li class="sub-menu_item">
                    <a href="#" class="sub-menu_link">Giảng viên</a>
                </li>
                <li class="sub-menu_item">
                    <a href="#" class="sub-menu_link">Hỏi đáp</a>
                </li>
                </ul>
            </li>
            <li class="nav-list_item">
                <a href="#" class="nav_link">CHƯƠNG TRÌNH ĐÀO TẠO <i class="fa-solid fa-angle-down"></i></a>
                <ul class="sub-menu">
                <li class="sub-menu_item">
                    <a href="#" class="sub-menu_link">Lập Trình Viên Quốc Tế ADSE</a>
                </li>
                <li class="sub-menu_item">
                    <a href="./fullstack.html" class="sub-menu_link">Lập Trình Web FullStack</a>
                </li>
                <li class="sub-menu_item mega">
                    <a href="#" class="sub-menu_link">Các khóa ngắn hạn <i class="fa-solid fa-angle-down"></i></a>
                    <ul class="sub-menu_mega">
                    <li class="sub-menu_item">
                        <a href="#" class="sub-menu_link">Khóa Quản Trị Mạng</a>
                    </li>
                    <li class="sub-menu_item">
                        <a href="#" class="sub-menu_link">Lập trình Java</a>
                    </li>
                    <li class="sub-menu_item">
                        <a href="#" class="sub-menu_link">Lập trình .NET</a>
                    </li>
                    <li class="sub-menu_item">
                        <a href="#" class="sub-menu_link">Lập trình C#</a>
                    </li>
                    <li class="sub-menu_item">
                        <a href="#" class="sub-menu_link">Lập trình PHP</a>
                    </li>
                    <li class="sub-menu_item">
                        <a href="#" class="sub-menu_link">Lập trình CSDL với SQL</a>
                    </li>
                    </ul>
                </li>
                </ul>
            </li>
            <li class="nav-list_item">
                <a href="#" class="nav_link">LIÊN THÔNG</a>
            </li>
            <li class="nav-list_item">
                <a href="#" class="nav_link">TIN TỨC <i class="fa-solid fa-angle-down"></i></a>
                <ul class="sub-menu">
                <li class="sub-menu_item">
                    <a href="#" class="sub-menu_link">Tin về CNTT</a>
                </li>
                <li class="sub-menu_item">
                    <a href="#" class="sub-menu_link">Lịch thi</a>
                </li>
                <li class="sub-menu_item">
                    <a href="#" class="sub-menu_link">Lịch tuyển sinh</a>
                </li>
                </ul>
            </li>
            <li class="nav-list_item">
                <a href="#" class="nav_link">TUYỂN DỤNG <i class="fa-solid fa-angle-down"></i></a>
                <ul class="sub-menu">
                <li class="sub-menu_item">
                    <a href="#" class="sub-menu_link">Tin tuyển dụng</a>
                </li>
                <li class="sub-menu_item">
                    <a href="#" class="sub-menu_link">Góc nghề nghiệp</a>
                </li>
                </ul>
            </li>
            </ul>
        </div>
    `
}

document.getElementById('header').innerHTML = Heading()