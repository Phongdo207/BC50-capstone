import { DELETE_USER_REQUEST, DELETE_USER_SUCCESS, DELETE_USER_FAIL } from "./constains";
import api from "../../../../utilities/apiUtil";

export const actDeleteUser = (taiKhoan) => {
    return (dispatch) => {
        dispatch(actDeleteUserRequest());
        api.delete(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actDeleteUserSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actDeleteUserFail(error));
            })
    }
}

const actDeleteUserRequest = () => {
    return {
        type: DELETE_USER_REQUEST,
    }
}

const actDeleteUserSuccess = (data) => {
    return {
        type: DELETE_USER_SUCCESS,
        payload: data,
    }
}

const actDeleteUserFail = (error) => {
    return {
        type: DELETE_USER_FAIL,
        payload: error,
    }
}



