import { LIST_USER_REQUEST, LIST_USER_SUCCESS, LIST_USER_FAIL } from "./constains";
import api from "./../../../utilities/apiUtil";

// Action gọi API - Refactor API Utils
export const actListUse = () => {
    return (dispatch) => {
        dispatch(actListUserRequest());
        api.get("QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01")
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actListUserSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actListUserFail(error));
            })
    }
}

const actListUserRequest = () => {
    return {
        type: LIST_USER_REQUEST,
    }
}

const actListUserSuccess = (data) => {
    return {
        type: LIST_USER_SUCCESS,
        payload: data,
    }
}

const actListUserFail = (error) => {
    return {
        type: LIST_USER_FAIL,
        payload: error,
    }
}



