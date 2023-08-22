import React from 'react'
import "./style.css"
import { InstagramFilled, FacebookFilled, TwitterOutlined } from '@ant-design/icons';

export default function Footer() {

  return (
    <footer  >
      <div className="footer" style={{ color: "grey", fontWeight: '600', backgroundColor: "rgba(42,42,45,23.8)", paddingTop: '100px' }}>
        <div className="container ">
          <div className="row">
            <div className="col-4 mt-4">
              <a href='facebook.com' className="d-flex">
                <img style={{ width: "50%" }} src="./img/logo-full.png" alt=''>
                </img>
                <span className="ml-3 mt-4 text-xl">APP_MOVIES</span>
              </a>
              <p className="mt-5 text-sm text-gray-500">Air plant banjo lyft occupy retro adaptogen indego</p>
            </div>
            <div className="mobile col-8 mt-4">
              <div className="row" style={{ width: '100%', textDecoration: "none" }}>
                <div className="col-6 ">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-white">NHÀ TÀI TRỢ</h2>
                  <nav >
                    <ul className="row" >
                      <li className="col-4 mt-4" >
                        <img style={{ width: '50px' }} src="https://movienew.cybersoft.edu.vn/hinhanh/bhd-star-cineplex.png" alt="" />
                        {/* <a href='facebook.com' className="text-black hover:text-gray-800"></a> */}
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-6 px-3" >
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 text-white">CATEGORIES</h2>
                  <nav className="list-none mb-10">
                    <img style={{ width: "30%" }} src="./img/Volibear_Emote.webp" alt=''></img>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full" style={{ backgroundColor: "rgba(0, 0, 0,6.8)", marginTop: '60px' }}>
          <div className="container">
            <div className="row" style={{ paddingTop: "10px" }}>
              <p className="text-gray-500 text-sm text-center sm:text-left col-3">© 2022 DỰ ÁN MOVIE —
                <a rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank" href='facebook.com'>@PTB</a>
              </p>
              <div className="col-8" style={{ width: "100%" }} >
                <ul style={{ display: "flex", justifyContent: "flex-end" }}>
                  <li className="text-white ml-3">
                    <TwitterOutlined />
                  </li>
                  <li className="ml-3 text-white">
                    <FacebookFilled />
                  </li>
                  <li className="ml-3 text-white">
                    <InstagramFilled />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
