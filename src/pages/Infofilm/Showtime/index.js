import React, { Fragment } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react';
import { Tabs } from 'antd';
import { actFetchShowTheaterTimeMovie } from "./duck/actions"
import { NavLink } from 'react-router-dom';
import moment from 'moment/moment';

const { TabPane } = Tabs;

export default function ShowTimeMovie() {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.showTimeMovieReducer.data)
    const loading = useSelector((state) => state.showTimeMovieReducer.loading)

    useEffect(() => {
        dispatch(actFetchShowTheaterTimeMovie());
    }, [])

    const renderUITheaterMovie = () => {
        return data?.map((item, index) => {
            return <TabPane tab={<img src={item.logo} className='rounded-full' width="50" />} key={index}>
                <Tabs tabPosition='left'>
                    {item.lstCumRap?.map((cumRap, index) => {
                        return <TabPane tab={
                            <div style={{ width: "300px", display: "flex" }}>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Cinemaaustralia.jpg/250px-Cinemaaustralia.jpg" width="50" /> <br />
                                <div className='text-left ml-2'>
                                    {cumRap.tenCumRap}
                                    <p className='text-red-200'>Chi tiết</p>
                                </div>
                            </div>} key={index}>

                            {cumRap.danhSachPhim.map((phim, index) => {
                                return <Fragment key={index}>
                                    <div className='my-5' style={{ display: "flex" }} >
                                        <div style={{ display: "flex" }}>
                                            <img width={100} height={100} src={phim.hinhAnh} alt={phim.tenPhim} onError={(e)=>{e.target.onError = null; e.target.src="https://picsum.photo/75/75"}}/>
                                            <div className='ml-2'>
                                                <h1 style={{ color: "green", fontSize: "1.5rem" }}>{phim.tenPhim}</h1>
                                                <p>{cumRap.diaChi}</p>
                                                <div className='row'>
                                                    {phim.lstLichChieuTheoPhim?.map((lichChieu, index) => {
                                                        return <NavLink to='/check-out' className='ml-4 mr-3' key={index} style={{ color: "black", fontSize:"2rem" }}>
                                                            {moment(lichChieu.ngayChieuGioChieu).format('hh:mm')}
                                                        </NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <hr />
                                </Fragment>

                            })}
                        </TabPane>
                    })}
                </Tabs>
            </TabPane>
        }
        )
    }

    const renderUIDetailFilm = () => {
        return <div className='mt-10 ml-72 w-2/3 bg-white px-5 py-5 container'>
            <Tabs defaultActiveKey='1' centered>
                <TabPane tab="Lịch chiếu" key="1" style={{minHeight:"300px"}}>
                    <div>
                        <Tabs tabPosition='left'>
                            {data.heThongRapChieu?.map((htr,index) => {

                            })}

                        </Tabs>
                    </div>
                </TabPane>

            </Tabs>
        </div>
    }

    return (
        <div>
            <h3 style={{ fontWeight: 400 }}>Lịch chiếu</h3>
            <div>
                <Tabs tabPosition="left">
                    {renderUITheaterMovie()}
                </Tabs>
            </div>
        </div>
    )
}
