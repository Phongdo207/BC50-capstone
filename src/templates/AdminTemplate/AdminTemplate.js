import React from 'react'
import { Outlet } from "react-router-dom"
import NavAdmin from './Layout/Navs'
import FooterAdmin from './Layout/Footer'
import HeaderAdmin from './Layout/HeaderAdmin'

export default function AdminTemplate() {
  return (
    <div>
      <HeaderAdmin />
      <NavAdmin />
        <Outlet />
      <FooterAdmin />
    </div>
  )
}