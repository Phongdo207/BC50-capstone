import React from 'react'
import { Link } from 'react-router-dom'

export default function Movieitem(movie) {
    return (
        <div className='col-md-3'>
            <div className="card">
                <img className="card-img-top" src={movie.hinhAnh}/>
                <div className="card-body">
                    <h4 className="card-title">{movie.tenPhim}</h4>
                    {/* Không có active khi chọn */}
                    <Link to={`/detail-movie/${movie.maPhim}`} className='btn btn-success'>Detail</Link>
                </div>
            </div>
        </div>
    )
}
