import { SHOWTIME_MOVIE_REQUEST, SHOWTIME_MOVIE_SUCCESS, SHOWTIME_MOVIE_FAIL } from "./constains";
import api from "./../../../../utilities/apiUtil"

// Action gọi API - Refactor API Utils
export const actFetchShowTheaterTimeMovie = () => {
    return (dispatch) => {
        dispatch(actShowTimeMovieRequest());
        api.get("QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actShowTimeMovieSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actShowTimeMovieFail(error));
            })
    }
}

export const actFetchShowTimeMovie = () => {
    return (dispatch) => {
        dispatch(actShowTimeMovieRequest());
        api.get("/QuanLyRap/LayThongTinHeThongRap")
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actShowTimeMovieSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actShowTimeMovieFail(error));
            })
    }
}

const actShowTimeMovieRequest = () => {
    return {
        type: SHOWTIME_MOVIE_REQUEST,
    }
}

const actShowTimeMovieSuccess = (data) => {
    return {
        type: SHOWTIME_MOVIE_SUCCESS,
        payload: data,
    }
}

const actShowTimeMovieFail = (error) => {
    return {
        type: SHOWTIME_MOVIE_FAIL,
        payload: error,
    }
}



