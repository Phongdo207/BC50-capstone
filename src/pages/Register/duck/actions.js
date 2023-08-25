import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL } from "./constains";
import api from "../../../utilities/apiUtil";

// Action gọi API - Refactor API Utils
export const actFetchRegister = (user) => {
    return (dispatch) => {
        dispatch(actRegisterRequest());
        api.post(`QuanLyNguoiDung/DangKy`, user)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    dispatch(actRegisterSuccess(result.data.content));
                }
            })
            .catch((error) => {
                dispatch(actRegisterFail(error));
            })
    }
}

const actRegisterRequest = () => {
    return {
        type: REGISTER_REQUEST,
    }
}

const actRegisterSuccess = (data) => {
    return {
        type: REGISTER_SUCCESS,
        payload: data,
    }
}

const actRegisterFail = (error) => {
    return {
        type: REGISTER_FAIL,
        payload: error,
    }
}



