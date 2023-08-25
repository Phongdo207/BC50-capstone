import React, { useState } from 'react'
import { actAddUser } from './duck/action';
import { useDispatch } from "react-redux"

export default function AddUser() {
  const dispatch = useDispatch();

  const [state, setState] = useState({
    taiKhoan: "",
    matKhau: "",
    email: "",
    soDt: "",
    maNhom: "GP01",
    maLoaiNguoiDung: "KhachHang",
    hoTen: "",
  })

  const handlOnChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  }

  const handlAddUser = (e) => {
    e.preventDefault();
    dispatch(actAddUser(state));
  }

  return (

    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 mx-auto'>
            <h3>Add User</h3>
            <form onSubmit={handlAddUser}>
              <div className='form-group'>
                <label>Tài Khoản</label>
                <input type='text' className='form-control' name='taiKhoan' onChange={handlOnChange}></input>
              </div>
              <div className='form-group'>
                <label>Mật khẩu</label>
                <input type='text' className='form-control' name='matKhau' onChange={handlOnChange}></input>
              </div>
              <div className='form-group'>
                <label>Email</label>
                <input type='text' className='form-control' name='email' onChange={handlOnChange}></input>
              </div>
              <div className='form-group'>
                <label>Số điện thoại</label>
                <input type='number' className='form-control' name='soDt' onChange={handlOnChange}></input>
              </div>
              <div className='form-group'>
                <label>Mã loại người dùng</label>
                <select className='form-control' name='maLoaiNguoiDung' onChange={handlOnChange}>
                  <option value="KhachHang">Khách hàng</option>
                  <option value="QuanTri">Quản trị</option>
                </select>
              </div>
              <div className='form-group'>
                <label>Họ và tên</label>
                <input type='text' className='form-control' name='hoTen' onChange={handlOnChange}></input>
              </div>
              <button className='btn btn-success'>Add User</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
