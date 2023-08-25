import React from 'react'
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import actLognOut from "./../../../pages/Login/duck/actions"
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

export default function HeaderAdmin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <nav className="navbar navbar-light d-flex flex-row-reverse" style={{ backgroundColor: "rgba(40, 40, 40, 0.6)" }}>
            <div>
                <Avatar size="large" icon={<UserOutlined />}> </Avatar> 
                <button className='btn btn-danger' onClick={() => {
                    dispatch(actLognOut(navigate));
                }}>Đăng xuất</button>
            </div>
            <div>
                <button className="btn btn-outline-success px-3 mx-3" type="submit">
                    <NavLink style={{ color: 'white' }} to="/">
                        <span>Trang chủ</span>
                    </NavLink>
                </button>
            </div>
        </nav>
    )
}