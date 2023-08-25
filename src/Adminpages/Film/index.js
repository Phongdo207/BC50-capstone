import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { actFetchListMovieAdmin } from './duck/actions';
import MovieItemAdmin from './MovieItemAdmin';

export default function Film() {

  const data = useSelector((state) => state.listMovieAdminReducer.data)
  const loading = useSelector((state) => state.listMovieAdminReducer.loading)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListMovieAdmin())
  }, [])

  const renderUI = () => {
    if (loading) return <div>Loading...</div>

    return data?.map((movie) => <MovieItemAdmin key={movie.maPhim} movie={movie} />)
  }

  return (
    <div className='container'>
      <h1 className='text-center' style={{ margin: "10px 0" }}>Quản lí phim</h1>
      <button className='btn btn-success' type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">Thêm phim</button>

      <div className="modal" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Thêm phim</h4>
              <button type="button" className="close" data-dismiss="modal">×</button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label>Tên phim</label>
                  <input type="text" className="form-control" placeholder="Nhập tên phim" />
                </div>
                <div className="form-group">
                  <label>Trailer</label>
                  <input type="text" className="form-control" placeholder="Nhập trailer" />
                </div>
                <div className="form-group">
                  <label>Mô tả</label>
                  <input type="text" className="form-control" placeholder="Nhập mô tả" />
                </div>
                <div className="form-group">
                  <label>Ngày khởi chiếu</label>
                  <input type="date" className="form-control" placeholder="Nhập mô tả" />
                </div>
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="switch1" name="example" />
                  <label class="custom-control-label" for="switch1">Đang chiếu</label>
                </div>
                <br />
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" id="switch2" name="example" />
                  <label class="custom-control-label" for="switch2">Sắp chiếu</label>
                </div>
                <br />
                <div className="form-group">
                  <label>Thêm hình ảnh</label>
                  <br />
                  <input type="file" />
                </div>
              </form>

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <table class="table">
        <thead class="thead-dark">
          <tr style={{ textAlign: "center" }}>
            <th scope="col">Mã Phim</th>
            <th scope="col">Hình ảnh</th>
            <th scope="col">Tên phim</th>
            <th scope="col">Mô tả</th>
            <th scope="col">Thao tác</th>
          </tr>
        </thead>
        {renderUI()}
      </table>
    </div>
  )
}
