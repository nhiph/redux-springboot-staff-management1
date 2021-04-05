import React from 'react'
import InfoNhanVien from './InfoNhanVien'

export default function DanhSachNV() {
    return (
        <table className="table table-bordered table-hover myTable">
            <thead className="text-primary">
                <tr>
                    <th className="nowrap">
                        <span className="mr-1">Tài khoản</span>
                        <i className="fa fa-arrow-up" id="SapXepTang" />
                        <i className="fa fa-arrow-down" id="SapXepGiam" />
                    </th>
                    <th>Họ và tên</th>
                    <th>Email</th>
                    <th>Ngày làm</th>
                    <th>Chức vụ</th>
                    <th>Tổng lương</th>
                    <th>Xếp loại</th>
                    <th><em className="fa fa-cog" /></th>
                </tr>
            </thead>
            <tbody id="tableDanhSach">
                <InfoNhanVien />
            </tbody>
        </table>
    )
}
