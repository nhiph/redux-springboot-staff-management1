function NhanVien(taiKhoan, hoTen, email, matKhau, ngayLam, luongCoBan, chucVu, gioLam){

    // Properties
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";

    /*
    +nếu chức vụ là giám đốc: tổng lương = lương cơ bản * 3
    +nếu chức vụ là trưởng phòng: tổng lương = lương cơ bản * 2
    +nếu chức vụ là nhân viên: tổng lương = lương cơ bản * 1
    */
    // Methods
    this.tongLuong = function(){
        switch (this.chucVu) {
            case "Sếp":
                this.tongLuong = this.luongCoBan*3;
                break;
            case "Trưởng phòng":
                this.tongLuong = this.luongCoBan*2;
                break;
            case "Nhân viên":
                this.tongLuong = this.luongCoBan;
                break;
            default:
                break;
        }
    }

    /*
    +nếu nhân viên có giờ làm trên 192h (>=192): nhân viên xuất sắc
    +nếu nhân viên có giờ làm trên 176h (>=176): nhân viên giỏi
   +nếu nhân viên có giờ làm trên 160h (>=160): nhân viên khá
    +nếu nhân viên có giờ làm dưới 160h: nhân viên trung bình
    */
    this.xepLoai = function(){
        if(this.gioLam >= 192) this.xepLoai = "Xuất sắc";
        else if(this.gioLam >= 176) this.xepLoai = "Giỏi";
        else if(this.gioLam >= 160) this.xepLoai = "Khá";
        else this.xepLoai = "Trung bình";
    }
}