import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { callApi } from './utils/callApi';

export default function InfoNhanVien() {

    const [infos, setInfo] = useState([]);

    useEffect(() => {
        callApi('getListTodo', 'GET', null).then(res => { setInfo(res.data) });
    }, []);

    const showInfo = () => {
        return infos.map((info, index) => {
            return <tr key={index}>
                <td>{info.username}</td>
                <td>{info.name}</td>
                <td>{info.email}</td>
                <td>{info.startDate}</td>
                <td>{info.position}</td>
                <td>{info.salary}</td>
                <td>{info.hang}</td>
                <td>
                    <button className="btn btn-success mr-2" onUpdate={() => onUpdate(info)}>Sua</button>
                    <button className="btn btn-danger" onClick={() => onDelete(info.id)}>Xoa</button>
                </td>
            </tr>
        });
    }

    const onDelete = id => {
        console.log(id);
        callApi(`delete/${id}`, 'DELETE', null).then(res => {setInfo(res.data)});
    }

    const onUpdate = (info) => {
        callApi(`put/${info.id}`, 'PUT', {
            account: info.account,
            name: info.name,
            email: info.email,
            password: info.password,
            startDate: info.startDate,
            salary: info.salary,
            position: info.position,
            hours: info.hours
        });
    }

    // B1: them .then de cap nhat state cua store,
    // 
    return (
        <>
            { showInfo()}
        </>
    );
}
