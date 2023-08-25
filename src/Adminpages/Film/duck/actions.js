import { LIST_MOVIE_ADMIN_REQUEST, LIST_MOVIE_ADMIN_SUCCESS, LIST_MOVIE_ADMIN_FAIL } from "./constains";
import api from "./../../../utilities/apiUtil";

// Action gọi API - Refactor API Utils
export const actFetchListMovieAdmin = () => {
    return (dispatch) => {
        dispatch(actListMovieAdminRequest());
        api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actListMovieAdminSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actListMovieAdminFail(error));
            })
    }
}

const actListMovieAdminRequest = () => {
    return {
        type: LIST_MOVIE_ADMIN_REQUEST,
    }
}

const actListMovieAdminSuccess = (data) => {
    return {
        type: LIST_MOVIE_ADMIN_SUCCESS,
        payload: data,
    }
}

const actListMovieAdminFail = (error) => {
    return {
        type: LIST_MOVIE_ADMIN_FAIL,
        payload: error,
    }
}



