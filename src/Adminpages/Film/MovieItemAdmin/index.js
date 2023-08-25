import React from 'react'
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"

export default function MovieItemAdmin(props) {
    const { movie } = props
    return (
        <tbody>
            <tr style={{textAlign:"center"}}>
                <th scope="row">{movie.maPhim}</th>
                <td><img src={movie.hinhAnh} style={{width:"50px"}}></img></td>
                <td>{movie.tenPhim}</td>
                <td>{movie.moTa}</td>
                <td><button className='btn btn-danger'><EditOutlined /></button> <button className='btn btn-warning'><DeleteOutlined /></button></td>

            </tr>
        </tbody>
    )
}
