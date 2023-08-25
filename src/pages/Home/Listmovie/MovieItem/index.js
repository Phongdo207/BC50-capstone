import React from 'react'
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const { Meta } = Card;

export default function Movieitem(props) {
    const { movie } = props

    return (
        <div className='col-md-3 col-sm-3 col-xs-6'>
            <Link to={`/info-movie/${movie.maPhim}`}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={movie.hinhAnh} />}
                >
                    <Meta title={movie.tenPhim} />
                </Card>
            </Link>
        </div>
    )
}
