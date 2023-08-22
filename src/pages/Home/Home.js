import React from "react";
import "../Home/Home.css";
import Blog from "../../Components/Blog/Blog";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";

import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { actFetchListMovie } from "./Listmovie/duck/actions";
import Movieitem from "./Listmovie/MovieItem";

export default function Home() {
  const data = useSelector((state) => state.listMovieReducer.data);
  const loading = useSelector((state) => state.listMovieReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actFetchListMovie())
  }, [])

  const renderListMovie = () => {
    if(loading) return <div>Loading...</div>
    return data?.map((movie)=> <Movieitem key = {movie.maPhim} movie = {movie} />)
  }

  return (
    <div>
      <HomeCarousel />
      <div className="container">
        <div>
          <ul
            className="nav nav-pills mb-3 justify-content-center "
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <a href="/"
                className="nav-link active style-a"
                id="pills-home-tab"
                data-toggle="pill"
                data-target="#pills-home"
                type="button"
                role="tab"
                aria-controls="pills-home"
                aria-selected="true"
                style={{ color: "black" }}
              >
                <h5>Đang chiếu</h5>
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="/"
                className="nav-link style-a"
                id="pills-profile-tab"
                data-toggle="pill"
                data-target="#pills-profile"
                type="button"
                role="tab"
                aria-controls="pills-profile"
                aria-selected="false"
                style={{ color: "black" }}
              >
                <h5>Sắp chiếu</h5>
              </a>
            </li>
          </ul>

          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-home"
              role="tabpanel"
              aria-labelledby="pills-home-tab"
            >
              {/* <Movieitem /> */}
              {renderListMovie()}
            </div>
            <div
              className="tab-pane fade"
              id="pills-profile"
              role="tabpanel"
              aria-labelledby="pills-profile-tab"
            >
              {/* <MovieItem /> */}
            </div>
          </div>
        </div>
      </div>
      <Blog />
    </div>
  );
}
