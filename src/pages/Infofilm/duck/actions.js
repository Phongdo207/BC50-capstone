import { INFO_MOVIE_REQUEST, INFO_MOVIE_SUCCESS, INFO_MOVIE_FAIL } from "./constains";
import api from "../../../utilities/apiUtil";

// Action gọi API - Refactor API Utils
export const actFetchInfoMovie = (id) => {
    return (dispatch) => {
        dispatch(actInfoMovieRequest());
        api.get(`QuanLyPhim/LayThongTinPhim?MaPhim=${id}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actInfoMovieSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actInfoMovieFail(error));
            })
    }
}

const actInfoMovieRequest = () => {
    return {
        type: INFO_MOVIE_REQUEST,
    }
}

const actInfoMovieSuccess = (data) => {
    return {
        type: INFO_MOVIE_SUCCESS,
        payload: data,
    }
}

const actInfoMovieFail = (error) => {
    return {
        type: INFO_MOVIE_FAIL,
        payload: error,
    }
}



