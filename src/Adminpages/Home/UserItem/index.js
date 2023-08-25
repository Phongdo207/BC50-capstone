import React, { useState } from 'react'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { actDeleteUser } from './duck/actions';

export default function ListUser(props) {
    const { user } = props

    const data = useSelector((state) => state.deleteUserReducer.data);
    const loading = useSelector((state) => state.deleteUserReducer.loading);
    const params = useParams();
    const dispatch = useDispatch();

    const handlDelete = (taiKhoan) => {
        dispatch(actDeleteUser(taiKhoan))
    }

    if (loading) return <div>Loading...</div>

    return (

        <tr style={{ textAlign: "center" }}>
            <td>{user.hoTen}</td>
            <td>{user.email}</td>
            <td>{user.soDT}</td>
            <td>{user.taiKhoan}</td>
            <td>{user.matKhau}</td>
            <td>{user.maLoaiNguoiDung === "KhachHang" ? "Khách Hàng" : "Quản Trị"}</td>
            <td><button className='btn btn-warning'><EditOutlined /></button> <button className='btn btn-danger' Onclick = {() => handlDelete(params.taiKhoan)}><DeleteOutlined /></button></td>
        </tr>
    )
}
