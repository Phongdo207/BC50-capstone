import * as ActionTypes from "./constains"
import api from "../../../utilities/apiUtil";

export const actAddUser = (user) => {
    return (dispatch) => {
        dispatch(actAddUserRequest())

        api.post("QuanLyNguoiDung/ThemNguoiDung", user)
        .then((result) => {
            if(result.data.statusCode === 200){
                dispatch(actAddUserSuccess(result.data.content));
            }
        })
        .catch((error) => {
            dispatch(actAddUserFail(error))
        })
    };
}

const actAddUserRequest = () => {
    return {
        type: ActionTypes.ADD_USER_REQUEST,
    }
}

const actAddUserSuccess = (data) => {
    return {
        type: ActionTypes.ADD_USER_SUCCESS,
        payload: data,
    }
}

const actAddUserFail = (error) => {
    return {
        type: ActionTypes.ADD_USER_FAIL,
        payload: error,
    }
}