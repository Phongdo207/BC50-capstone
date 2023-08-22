import React, { Fragment } from 'react'
import "../Blog/Blog.css"
export default function Blog() {
    return (
        <div style={{margin:"40px 0"}}>
            <div className="container" style={{ marginTop: 100 }}>
                <div>
                    <ul
                        className="nav nav-pills mb-3 justify-content-center"
                        id="pills-tab"
                        role="tablist"
                    >
                        <li className='style-blog'>
                            <h1 style={{color : "red"}}>Blog</h1>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="showcases__content" >
                                <div className="showcase__item">
                                    <img src="./img/endgame.jpg" alt=""/>
                                    <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                        <div className="showcase__icon">
                                            <a href="../img/showcase_img_1.webp" data-fancybox="gallery">
                                                <i className="fa fa-search-plus" />
                                            </a>
                                        </div>
                                        <div className="showcase__name">
                                            <p>LOGO</p>
                                            <h3>FLIPPIN BIRD</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="showcase__item">
                                    <img src="./img/stranger-things-bicycle-lights-children.jpg" alt=""/>
                                    <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                        <div className="showcase__icon">
                                            <a href="../img/showcase_img_2.webp" data-fancybox="gallery">
                                                <i className="fa fa-search-plus" />
                                            </a>
                                        </div>
                                        <div className="showcase__name">
                                            <p>LOGO</p>
                                            <h3>FLIPPIN BIRD</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="showcase__item">
                                    <img src="./img/th (3).jpg" alt=""/>
                                    <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                        <div className="showcase__icon">
                                            <a href="../img/showcase_img_2.webp" data-fancybox="gallery">
                                                <i className="fa fa-search-plus" />
                                            </a>
                                        </div>
                                        <div className="showcase__name">
                                            <p>LOGO</p>
                                            <h3>FLIPPIN BIRD</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="showcase__item">
                                    <img src="./img/th (4).jpg" alt=""/>
                                    <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                        <div className="showcase__icon">
                                            <a href="../img/showcase_img_2.webp" data-fancybox="gallery">
                                                <i className="fa fa-search-plus" />
                                            </a>
                                        </div>
                                        <div className="showcase__name">
                                            <p>LOGO</p>
                                            <h3>FLIPPIN BIRD</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="showcase__item">
                                    <img src="./img/bgmovie.jpg" alt=""/>
                                    <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                        <div className="showcase__icon">
                                            <a href="../img/showcase_img_2.webp" data-fancybox="gallery">
                                                <i className="fa fa-search-plus" />
                                            </a>
                                        </div>
                                        <div className="showcase__name">
                                            <p>LOGO</p>
                                            <h3>FLIPPIN BIRD</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="showcase__item">
                                    <img src="./img/anh2.png" alt=""/>
                                    <div className="showcase__overlay" style={{ width: '115%', height: '100%' }}>
                                        <div className="showcase__icon">
                                            <a href="../img/showcase_img_2.webp" data-fancybox="gallery">
                                                <i className="fa fa-search-plus" />
                                            </a>
                                        </div>
                                        <div className="showcase__name">
                                            <p>LOGO</p>
                                            <h3>FLIPPIN BIRD</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
