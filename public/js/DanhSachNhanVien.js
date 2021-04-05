function DanhSachNhanVien(){
    // Attribute
    this.mangNV = [];
    // Method
    // Them NV
    this.themNV = function(nv){
        this.mangNV.push(nv);
    }
    // Tim vi tri NV
    this.timViTri = function (tk) {
        var viTri = -1;
        this.mangNV.map(function (item, index) {
            if (item.taiKhoan === tk) {
                viTri = index;
            }
        });
        return viTri;
    };
    // Xoa NV
    this.xoaNV = function (tk) {
        var viTri = this.timViTri(tk);
        if (viTri >= 0) {
            //tìm thấy sv
            this.mangNV.splice(viTri, 1);
        }
    }

    this.capNhatNV = function (nv) {
        var viTri = this.timViTri(nv.taiKhoan);
        if (viTri >= 0) {
            this.mangNV[viTri] = nv;
        }
    }
}