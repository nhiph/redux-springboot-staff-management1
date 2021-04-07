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
                <td>{info.start_date}</td>
                <td>{info.position}</td>
                <td>{info.salary}</td>
                <td>{info.hang}</td>
                <td>
                    <button className="btn btn-success mr-2">Sua</button>
                    <button className="btn btn-danger">Xoa</button>
                </td>
            </tr>
        });
    }

    return (
        <>
            { showInfo()}
        </>
    );
}
