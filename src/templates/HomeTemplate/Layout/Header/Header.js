import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'
import _ from 'lodash'
import { Fragment } from "react"

export default function Header(props) {

  const renderLogin = () => {
    if (_.isEmpty()) {
      return <Fragment>
        <button
          className="btn btn-outline-danger px-3 "
          type="submit"
        >
          <NavLink style={{ color: 'white' }} to="/login">
            Sign in
          </NavLink>

        </button>
        <button className="btn btn-outline-success px-3 mx-3" type="submit">
          <NavLink style={{ color: 'white' }} to="/register">
            Sign up
          </NavLink>
        </button>
      </Fragment>
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
      <NavLink className="navbar-brand mx-4" to="/">
        <img src="./img/logo-full.png" alt="" style={{ width: "50%" }} />
      </NavLink>
      <ul className="nav justify-content-center pb-2" style={{ marginRight: "88px" }}>
        <li className="nav-item active">
          <NavLink className={({isActive}) => isActive ? "my-active nav-link" : "nav-link"} to="/">Trang chủ</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "my-active nav-link" : "nav-link"} to="/contact">Theater</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "my-active nav-link" : "nav-link"} to="/film-hot">Film Hot</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "my-active nav-link" : "nav-link"} to="/event">Event</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className={({isActive}) => isActive ? "my-active nav-link" : "nav-link"} to="/support">Support</NavLink>
        </li>
      </ul>
      <div className='d-flex pb-2'	>
        {renderLogin()}
      </div>
    </header>
  )
}
