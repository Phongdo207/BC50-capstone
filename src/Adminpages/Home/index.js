import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actListUse } from './duck/actions';
import ListUser from './UserItem';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"


export default function HomeAdmin() {

    const data = useSelector((state) => state.listUserReducer.data)
    const loading = useSelector((state) => state.listUserReducer.loading)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actListUse())
    }, [])

    const renderUI = () => {
        if (loading) return <div>Loading...</div>

        return data?.map((user) => <ListUser key={user.hoTen} user={user} />)
    }
    return (
        <div className='container'>
            <h1 className='text-center' style={{ margin: "10px 0" }}>Thông tin người dùng</h1>
            <table class="table">
                <thead class="thead-dark">
                    <tr style={{ textAlign: "center" }}>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Email</th>
                        <th scope="col">Số điện thoại</th>
                        <th scope="col">Tài Khoản</th>
                        <th scope="col">Mật khẩu</th>
                        <th scope="col">Loại người dùng</th>
                        <th scope="col">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {renderUI()}
                </tbody>
            </table>
        </div>
    )
}
