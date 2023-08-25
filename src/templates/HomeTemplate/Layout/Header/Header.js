import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'
import { Fragment } from "react"
import { Link } from 'react-router-dom'

export default function Header(props) {

  const renderLogin = () => {
    if (!localStorage.getItem("UserAdmin")) {
      return <Fragment>
        <button
          className="btn btn-outline-danger px-3 "
          type="submit"
        >
          <NavLink style={{ color: 'white' }} to="/login">
            <span>Đăng nhập</span>
          </NavLink>

        </button>
        <button className="btn btn-outline-success px-3 mx-3" type="submit">
          <NavLink style={{ color: 'white' }} to="/dang-ky">
            <span>Đăng ký</span>
          </NavLink>
        </button>
      </Fragment>
    } else {
      return (
        <button className="btn btn-outline-success px-3 mx-3" type="submit">
          <NavLink style={{ color: 'white' }} to="/admin/home">
            <span>Admin</span>
          </NavLink>
        </button>
      )

    }
  }
  return (

    <header className='navbar container-fluid text-light' style={{
      width: "100%",
      top: 0,
      left: 0,
      zIndex: 1000,
      height: 60,
      backgroundColor: "rgba(40,40,40,0.6)",
    }}>
      <Link className="navbar-brand mx-4" to="/">
        <img src="./img/logo-full.png" alt="" style={{ width: "50%" }} />
      </Link>
      <ul className="nav justify-content-center pb-2" style={{ marginRight: "88px" }}>
        <li className="nav-item active">
          <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/">Trang chủ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/contact">Phim</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/event">Khuyến mãi</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/support">Hỗ trợ</NavLink>
        </li>
      </ul>
      <div className='d-flex pb-2'	>
        {renderLogin()}
      </div>
    </header>
  )
}
