var danhSachNV = new DanhSachNhanVien();
var validation = new Validation();

getLocalStorage();

// bắt sự kiện click "btnThemSV"
document.getElementById("btnThemNV").onclick =  function () {
    // Lay  gia tri o input
    var taiKhoan = document.getElementById("tknv").value;
    var hoTen = document.getElementById("hoTen").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;
    console.log(taiKhoan, hoTen, email, password, ngayLam, luongCB, chucVu, gioLam);

    //Kiểm tra dữ liệu
    var isValid = true;
    // &: cộng giá trị (chuỗi) binary
    //&&: so sánh (AND) giá trị boolean
    // true => 1 (bit)
    // false => 0 (bit)
    // 1 & 1 = 1 => true & true = true
    //1 & 0 = 0 => true & false = false

    //kiểm tra Mã SV
    //không được để trống và không được trùng
    isValid &= validation.checkEmpty(taiKhoan, "tbTKNV", "Tài khoản nhân viên không được để trống") && validation.checkTK(taiKhoan, "tbTKNV", "Tài khoản nhân viên không được trùng", "Tài khoản nhân viên phải có từ 4-6 ký tự", danhSachNV.mangNV);
    
    // Kiểm tra tên nhân viên
    // Không được để trống và phải là chữ
    isValid &= validation.checkEmpty(hoTen, "tbTen", "Tên nhân viên không được để trống") && validation.checkName(hoTen, "tbTen", "Tên nhân viên phải là chữ");

    // Kiểm tra email
    // KHông được để trống và đúng định dạng
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email không hợp lệ");

    // Kiểm tra password không được để trống và đúng điều kiện
    isValid &= validation.checkEmpty(password, "tbMatKhau", "Password không được để trống") && validation.checkPassword(password, "tbMatKhau", "Password phải có 6-10 ký tự, ít nhất 1 ký tự đặc biệt, 1 ký tự hoa");

    // Kiểm tra lương cơ bản
    isValid &= validation.checkEmpty(luongCB, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkSalary(luongCB, "tbLuongCB", "Lương cơ phải từ 1000000-20000000");

    // Kiểm tra chức vụ
    isValid &= validation.checkDropDown("chucvu", "tbChucVu", "Chức vụ phải được chọn");

    // Kiểm tra số giờ làm
    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Lương cơ bản không được để trống") && validation.checkTime(gioLam, "tbGiolam", "Lương cơ phải từ 80-200");

    // isValid == true
    if(isValid){
        var nv = new NhanVien(taiKhoan, hoTen, email, password, ngayLam, luongCB, chucVu, gioLam); 
        console.log(nv);
        nv.tongLuong(); 
        nv.xepLoai();
        danhSachNV.themNV(nv);
        console.log(danhSachNV.mangNV);
        hienThiDS(danhSachNV.mangNV);
        setLocalStorage();
    }

    // resetForm();
};

document.getElementById("btnCapNhat").onclick =  function () {
    capNhatSinhVien();
};

function hienThiDS(dsnv) {
    //content chứa các thẻ tr (tr chứa thông tin 1 sv)
    var content = "";
    dsnv.map(function (item, index) {
      // ``: string template
      // item.tinhDTB();
      content += `
        <tr>
          <td>${item.taiKhoan}</td>
          <td>${item.hoTen}</td>
          <td>${item.email}</td>
          <td>${item.ngayLam}</td>
          <td>${item.chucVu}</td>
          <td>${item.tongLuong}</td>
          <td>${item.xepLoai}</td>
          <td>
            <button class="btn btn-danger mx-2 my-2" onclick="xoaNhanVien('${item.taiKhoan}')" >Xóa</button>
            <button 
                class="btn btn-info"
                data-toggle="modal"
                data-target="#myModal"
                onclick="hienChiTietNV('${item.taiKhoan}')" >Sửa</button>
          </td>
        </tr>
      `;
    });
  
    document.getElementById("tableDanhSach").innerHTML = content;
  }

// localStorage
//Lưu danh sách SV xuống localStorage (offline)
//localStorage: đối tượng của js giúp gọi phương thức local
//JSON: đối tượng js hỗ trợ kiểu dữ liệu JSON
// stringify: chuyển kiểu mảng sang JSON

function setLocalStorage() {
    localStorage.setItem("DSNV", JSON.stringify(danhSachNV.mangNV));
  }

  //parse: chuyển JSON sang kiểu mảng
function getLocalStorage() {
    if (localStorage.getItem("DSNV") != null) {
        danhSachNV.mangNV = JSON.parse(localStorage.getItem("DSNV"));
        hienThiDS(danhSachNV.mangNV);
    }
  
  }

function xoaNhanVien(tk) {
    danhSachNV.xoaNV(tk);
    hienThiDS(danhSachNV.mangNV);
    setLocalStorage();
}

function hienChiTietNV(tk) {
    document.getElementById("tknv").disabled = true;
    var viTri = danhSachNV.timViTri(tk);
    if (viTri >= 0) {
      //tìm thấy sv
      //Hiển thị lên form
      document.getElementById("tknv").value = danhSachNV.mangNV[viTri].taiKhoan;
      document.getElementById("hoTen").value = danhSachNV.mangNV[viTri].hoTen;
      document.getElementById("email").value = danhSachNV.mangNV[viTri].email;
      document.getElementById("password").value = danhSachNV.mangNV[viTri].password;
      document.getElementById("datepicker").value = danhSachNV.mangNV[viTri].ngayLam;
      document.getElementById("luongCB").value = danhSachNV.mangNV[viTri].luongCoBan;
      document.getElementById("chucvu").value = danhSachNV.mangNV[viTri].chucVu;
      document.getElementById("gioLam").value = danhSachNV.mangNV[viTri].gioLam;
    }
  }

  function capNhatSinhVien() {
    // lấy tất cả giá trị của các ô input
    var taiKhoan = document.getElementById("tknv").value;
    var hoTen = document.getElementById("hoTen").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var ngayLam = document.getElementById("datepicker").value;
    var luongCB = document.getElementById("luongCB").value;
    var chucVu = document.getElementById("chucvu").value;
    var gioLam = document.getElementById("gioLam").value;

    //Kiểm tra dữ liệu
    var isValid = true;
    // &: cộng giá trị (chuỗi) binary
    //&&: so sánh (AND) giá trị boolean
    // true => 1 (bit)
    // false => 0 (bit)
    // 1 & 1 = 1 => true & true = true
    //1 & 0 = 0 => true & false = false
  
    // Kiểm tra tên nhân viên
    // Không được để trống và phải là chữ
    isValid &= validation.checkEmpty(hoTen, "tbTen", "Tên nhân viên không được để trống") && validation.checkName(hoTen, "tbTen", "Tên nhân viên phải là chữ");

    // Kiểm tra email
    // KHông được để trống và đúng định dạng
    isValid &= validation.checkEmpty(email, "tbEmail", "Email không được để trống") && validation.checkEmail(email, "tbEmail", "Email không hợp lệ");

    // Kiểm tra password không được để trống và đúng điều kiện
    isValid &= validation.checkEmpty(password, "tbMatKhau", "Password không được để trống") && validation.checkPassword(password, "tbMatKhau", "Password phải có 6-10 ký tự, ít nhất 1 ký tự đặc biệt, 1 ký tự hoa");

    // Kiểm tra lương cơ bản
    isValid &= validation.checkEmpty(luongCB, "tbLuongCB", "Lương cơ bản không được để trống") && validation.checkSalary(luongCB, "tbLuongCB", "Lương cơ phải từ 1000000-20000000");

    // Kiểm tra chức vụ
    isValid &= validation.checkDropDown("chucvu", "tbChucVu", "Chức vụ phải được chọn");

    // Kiểm tra số giờ làm
    isValid &= validation.checkEmpty(gioLam, "tbGiolam", "Lương cơ bản không được để trống") && validation.checkTime(gioLam, "tbGiolam", "Lương cơ phải từ 80-200");

    // isValid == true
    if(isValid){
        var nv = new NhanVien(taiKhoan, hoTen, email, password, ngayLam, luongCB, chucVu, gioLam); 
        nv.tongLuong(); 
        nv.xepLoai();
        danhSachNV.capNhatNV(nv);
        hienThiDS(danhSachNV.mangNV);
        setLocalStorage();
    }
  }

  function resetForm() {
    document.getElementById("formQLNV").reset();
    document.getElementById("tknv").disabled = false;
  }