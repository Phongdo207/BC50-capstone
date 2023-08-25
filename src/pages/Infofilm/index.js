import React, { useState } from 'react'
import { Modal } from 'antd';
import ReactPlayer from 'react-player';
import "./style.css"
import ShowTimeMovie from './Showtime';

import { useParams } from 'react-router-dom';
import { actFetchInfoMovie } from "./duck/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';

export default function Infofilm() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const params = useParams();
    const data = useSelector((state) => state.infoMovieReducer.data);
    const loading = useSelector((state) => state.infoMovieReducer.loading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actFetchInfoMovie(params.id))
    }, []);

    const renderMovieTheater = () => {
        
    }

    if (loading) return <div>Loading...</div>

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-8 col-sm-8 col-xs-12 mt-5'>
                    <article>
                        <div className='row'>
                            <div className='col-md-4 col-sm-4 col-xs-8 col-xs-offset-2 col-md-offset-0'>
                                <img style={{ display: "block", float: "left", width: "100%", marginBottom: "10px" }} src={data && data.hinhAnh} />
                                <button onClick={showModal} className='btn btn-warning'>Xem trailer</button>
                                <Modal width="700px" style={{ textAlign: "center" }} title="Tên phim" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                    <div>
                                        <ReactPlayer url={data && data.trailer}
                                            width="650px"
                                            height="360px"
                                            playing={true}
                                            loop={true}
                                            controls={true}
                                        />
                                    </div>
                                </Modal>
                            </div>
                            <div className='details col-md-8 col-sm-8 col-xs-12'>
                                <div style={{ marginBottom: "10px" }}>
                                    <h2 className='detail-title upper-text'>{data && data.tenPhim}</h2>
                                    <span><img src='https://cdn.pixabay.com/photo/2014/10/18/10/23/star-493057_1280.png' style={{ width: "20px" }}></img>  </span>
                                    <strong style={{ fontSize: "1.5rem" }}>{data && data.danhGia}</strong>
                                    <span style={{ fontSize: "1.2rem" }}>/10 </span>
                                    <button className='btn btn-danger'>Đánh giá</button>
                                </div>
                                <p>Diễn viên : ABC </p>
                                <p>Thể loại : ABC </p>
                                <p>Nhà sản xuất : ABC </p>
                                <p>Đạo diễn : ABC </p>
                                <p>Quốc gia : ABC </p>
                                <p>Ngày khởi chiếu : {data && data.ngayKhoiChieu}</p>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-12 col sm-12 col-xs-12'>
                                <div style={{ textAlign: "justify", marginTop: "20px" }}>
                                    <h3 style={{ fontWeight: 600 }}>Nội dung phim</h3>
                                    <p>{data && data.moTa}</p>
                                    <br />
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
                <div className='container'>
                    <ShowTimeMovie />
                </div>
            </div>
        </div>
    )
}
