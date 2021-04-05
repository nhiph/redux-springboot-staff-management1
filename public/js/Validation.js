function Validation(){
    // Kiem tra cac filed khong duoc bo trong
    this.checkEmpty = function(inputVal,spanID,message){
        // trim(): xóa dấu khoảng trắng trước và sau nội dung chữ
        if(inputVal.trim() != ""){
            //dữ liệu hợp lệ
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            //dữ liệu không hợp lệ
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    // Kiem tra taikhoan nhan vien khong duoc trung
    this.checkTK = function(inputVal,spanID,message1,message2, mangNV){
        //Kiểm tra mã có tồn tại trong mảng SV chưa
        var isExist = false;
        //some: duyệt mảng, trả kết quả so sánh (true/ false)
        isExist = mangNV.some(function(item){
            return item.taiKhoan === inputVal;
        });
        if(isExist){
            //nếu isExist là true => mã bị trùng => false
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML = message1;
            return false;
        }else{ // mã không trùng 
            // Ma thoa dieu 4-6 ky tu => true
            if(inputVal.length >= 4 && inputVal.length <= 6){
                document.getElementById(spanID).innerHTML = "";
                return true;
            }else{ // Ma khong thoa dieu => false
                document.getElementById(spanID).style.display = "block";
                document.getElementById(spanID).innerHTML = message2;
                return false;
            }
            
        }

    }

    // Kiểm tra họ tên không được để trống và phải đúng định dạng
    this.checkName = function(inputVal,spanID,message){
        // C1: dùng đối tượng RegExp
        var namePattern = new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹý\\s]+$");

        if(namePattern.test(inputVal)){
            //tên hợp lệ
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML  = message;
            return false;
        }

    }

    // Kiểm tra email không được để trống và phải đúng định dạng
    this.checkEmail = function(inputVal,spanID,message){
        // C2: sử dụng trực tiếp biểu thức

        var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(inputVal.match(emailPattern)){
            //Đúng định dạng email
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML  = message;
            return false;
        }
    }

    // Kiểm tra email không được để trống và phải đúng định dạng
    this.checkPassword = function(inputVal, spanID, message){
        var passPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
        if(inputVal.match(passPattern)){
            //Đúng định dạng password
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML  = message;
            return false;
        }
    }

    // Kiểm tra luong cơ bản không được để trống và 1000000-20000000
    this.checkSalary = function(inputVal, spanID, message){
        if(inputVal <= 20000000 && inputVal>= 1000000){
            //Đúng định dạng password
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML  = message;
            return false;
        }
    }

    // Kiểm tra chức vụ (thẻ select)
    this.checkDropDown = function(selectID,spanID,message){
        if(document.getElementById(selectID).selectedIndex != 0){
            //có chọn các khóa học
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML  = message;
            return false;
        }
    }

    // Kiểm tra số giờ làm không được trống và từ 80-200 giờ
    this.checkTime = function(inputVal, spanID, message){
        if(inputVal <= 200 && inputVal>= 80){
            //Đúng định dạng password
            document.getElementById(spanID).innerHTML  = "";
            return true;
        }else{
            document.getElementById(spanID).style.display = "block";
            document.getElementById(spanID).innerHTML  = message;
            return false;
        }
    }
}