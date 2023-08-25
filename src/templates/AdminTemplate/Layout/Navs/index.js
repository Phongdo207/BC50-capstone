import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavAdmin() {
  return (
    <div style={{ backgroundColor: "#778899", position:"absolute", width: "10%", height: "200vh" }}>
      <nav className="navbar navbar-expand-md ">
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav flex-column" style={{ marginTop: "20px" }}>
          <li className="nav-item">
              {/* NavLink thay href bằng "to" */}
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/admin/home">Home</NavLink>
            </li>
            <li className="nav-item">
              {/* NavLink thay href bằng "to" */}
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/admin/add-user">Add User</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? "my-active nav-link" : "nav-link"} to="/admin/film">Film</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
