import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { nativeTouchData } from "react-dom/test-utils";
import { callApi } from './utils/callApi';

export default function FormNV() {

    const { register, handleSubmit, errors } = useForm();
    
    const [value, setValue] = useState({"account": "", "name": "", "email": "", "password": "", "startDate": "", "salary": "", "position": "", "hours": ""});
    
    const handleOnChange = event => {
        console.log(event.target.value);
        const { name } = event.target;
        setValue({...value, [name]: event.target.value});
    };

    const onSubmit = () => {
        console.log(value);
        return createUser(value)
    }

    function createUser(value) {
        callApi('listTodo', 'POST',
        {
            account: value.account,
            name: value.name,
            email: value.email,
            password: value.password,
            startDate: value.startDate,
            salary: value.salary,
            position: value.position,
            hours: value.hours
        });
    }
    
    return (
        <div className="modal fade" id="myModal">
            <div className="modal-dialog">
                <div className="modal-content">
                    <header className="head-form mb-0">
                        <h2 id="header-title">Thông tin nhân viên</h2>
                    </header>
                    {/* Modal Header */}
                    {/* 	<div class="modal-header">
					<h4 class="modal-title" id="modal-title">Modal Heading</h4>
					<button type="button" class="close" data-dismiss="modal">&times;</button>
				</div> */}
                    {/* Modal body */}
                    <div className="modal-body">
                        <form onSubmit={handleSubmit(onSubmit)} role="form" id="formQLNV">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-user" /></span>
                                    </div>
                                    <input 
                                        innerRef={register}
                                        value={value.account}
                                        onChange={handleOnChange}
                                        type="text" 
                                        name="account" 
                                        id="tknv" 
                                        className="form-control input-sm" 
                                        placeholder="Tài khoản" 
                                    />
                                </div>
                                <span className="sp-thongbao" id="tbTKNV" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-address-book" /></span>
                                    </div>
                                    <input 
                                        innerRef={register}
                                        value={value.name}
                                        onChange={handleOnChange}
                                        type="name" 
                                        name="name" 
                                        id="hoTen" 
                                        className="form-control input-sm" 
                                        placeholder="Họ và tên" 
                                    />
                                </div>
                                <span className="sp-thongbao" id="tbTen" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-envelope" /></span>
                                    </div>
                                    <input 
                                        innerRef={register}
                                        value={value.email}
                                        onChange={handleOnChange}
                                        type="email" 
                                        name="email" 
                                        id="email" 
                                        className="form-control input-sm" 
                                        placeholder="Email" 
                                    />
                                </div>
                                <span className="sp-thongbao" id="tbEmail" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-key" /></span>
                                    </div>
                                    <input 
                                        innerRef={register}
                                        value={value.password}
                                        onChange={handleOnChange}
                                        type="password" 
                                        name="password" 
                                        id="password" 
                                        className="form-control input-sm" 
                                        placeholder="Mật khẩu" 
                                    />
                                </div>
                                <span className="sp-thongbao" id="tbMatKhau" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-calendar" /></span>
                                    </div>
                                    <input 
                                        innerRef={register}
                                        value={value.startDate}
                                        onChange={handleOnChange}
                                        type="text" 
                                        name="startDate" 
                                        id="datepicker" 
                                        className="form-control" 
                                        placeholder="yyyy-mm-dd" 
                                    />
                                </div>
                                <span className="sp-thongbao" id="tbNgay" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-money" aria-hidden="true" /></span>
                                    </div>
                                    <input 
                                        innerRef={register}
                                        value={value.salary}
                                        onChange={handleOnChange}
                                        type="text" 
                                        name="salary" 
                                        id="luongCB" 
                                        className="form-control input-sm" 
                                        placeholder="Lương cơ bản" 
                                    />
                                </div>
                                <span className="sp-thongbao" id="tbLuongCB" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-briefcase" /></span>
                                    </div>
                                    <select 
                                        innerRef={register}
                                        value={value.position}
                                        onChange={handleOnChange}
                                        className="form-control" 
                                        id="chucvu"
                                        name="position"
                                    >
                                        <option>Chọn chức vụ</option>
                                        <option value="1">Sếp</option>
                                        <option value="2">Trưởng phòng</option>
                                        <option value="3">Nhân viên</option>
                                    </select>
                                </div>
                                <span className="sp-thongbao" id="tbChucVu" />
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fa fa-clock-o" aria-hidden="true" /></span>
                                    </div>
                                    <input 
                                        innerRef={register}
                                        value={value.hours}
                                        onChange={handleOnChange}
                                        type="text" 
                                        name="hours" 
                                        id="gioLam" 
                                        className="form-control input-sm" 
                                        placeholder="Giờ làm" 
                                    />
                                </div>
                                <span className="sp-thongbao" id="tbGiolam" />
                            </div>
                            <button id="btnThemNV" type="submit" className="btn btn-success">Thêm người dùng</button>
                        </form>
                    </div>
                    {/* Modal footer */}
                    <div className="modal-footer" id="modal-footer">
                        
                        <button id="btnCapNhat" type="button" className="btn btn-success">Cập nhật</button>
                        <button id="btnDong" type="button" className="btn btn-danger" data-dismiss="modal">Đóng</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
