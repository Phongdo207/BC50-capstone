import { LIST_MOVIE_REQUEST, LIST_MOVIE_SUCCESS, LIST_MOVIE_FAIL } from "./constains";
import api from "../../../../utilities/apiUtil";

// Action gọi API - Refactor API Utils
export const actFetchListMovie = () => {
    return (dispatch) => {
        dispatch(actListMovieRequest());
        api.get("QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actListMovieSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actListMovieFail(error));
            })
    }
}

const actListMovieRequest = () => {
    return {
        type: LIST_MOVIE_REQUEST,
    }
}

const actListMovieSuccess = (data) => {
    return {
        type: LIST_MOVIE_SUCCESS,
        payload: data,
    }
}

const actListMovieFail = (error) => {
    return {
        type: LIST_MOVIE_FAIL,
        payload: error,
    }
}



