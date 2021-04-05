import React from 'react'

export default function SortNV() {
    return (
        <div className="row mb-3">
            <div className="col">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Loại nhân viên" id="searchName" />
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="btnTimNV"><i className="fa fa-search" /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
