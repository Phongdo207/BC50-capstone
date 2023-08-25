import React from 'react'
import "./style.css"
import { InstagramFilled, FacebookFilled, TwitterOutlined } from '@ant-design/icons';

export default function Footer() {

  return (
    <footer  >
      <div className="footer" style={{ color: "grey", fontWeight: '600', backgroundColor: "rgba(42,42,45,23.8)", paddingTop: '50px' }}>
        <div className="container ">
          <div className="row">
            <div className="col-4 mt-4">
              <a href='facebook.com' className="d-flex">
                <img style={{ width: "50%" }} src="./img/logo-full.png" alt=''>
                </img>
              </a>
              <p className="mt-5 text-sm text-gray-500">CÔNG TY TNHH XEMPHIM VIETNAM</p>
              <p>Địa Chỉ : <span style={{ color: "white" }}>ABC, P.14, Q.10, TPHCM.</span></p>
              <p>Hotline : <span style={{ color: "white" }}>1900 xxxx</span></p>

            </div>
            <div className="mobile col-8 mt-4">
              <div className="row" style={{ width: '100%', textDecoration: "none" }}>
                <div className="col-6 ">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-white">XEMPHIM Việt Nam</h2>
                  <nav >
                    <ul className="row" >
                      <li className="col-5 mt-4">
                        <a href='/'><p>Giới Thiệu</p></a>
                        <a href='/'><p>Tiện Ích Online</p></a>
                        <a href='/'><p>Thẻ Quà Tặng</p></a>
                        <a href='/'><p>Tuyển Dụng</p></a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-6 px-3" >
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-white">Kết nối với chúng tôi</h2>
                  <nav className="list-none mb-10">
                    <ul style={{display: "flex"}}>
                      <li className="text-white ml-3">
                        <a href='/' style={{fontSize:"50px"}}><TwitterOutlined /></a>
                      </li>
                      <li className="ml-3 text-white">
                      <a href='/' style={{fontSize:"50px"}}><FacebookFilled /></a>

                      </li>
                      <li className="ml-3 text-white">
                      <a href='/' style={{fontSize:"50px"}}><InstagramFilled /></a>

                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full" style={{ backgroundColor: "rgba(0, 0, 0,6.8)" }}>
          <div className="container">
            <div className="row" style={{ paddingTop: "10px" }}>
              <p className="text-gray-500 text-sm text-center sm:text-left col-3">© 2022 DỰ ÁN MOVIE —
                <a rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" href='/'>@PTB</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
