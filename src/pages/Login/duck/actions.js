import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, LOGIN_CLEAR_DATA } from "./constains";
import api from "./../../../utilities/apiUtil";

// Action gọi API - Refactor API Utils
export const actFetchLoginMovie = (user, navigate) => {
    return (dispatch) => {
        dispatch(actLoginRequest());
        const TIME_EXP = 60 * 60 * 1000;
        api.post(`QuanLyNguoiDung/DangNhap`, user)
            .then((result) => {
                if (result.data.statusCode === 200) {
                    const user = result.data.content;

                    if (!(user.maLoaiNguoiDung === "QuanTri")) {
                        const error = {
                            response: {
                                data: {
                                    content: "Không có quyền truy cập"
                                }
                            }
                        }
                        return Promise.reject(error)
                    }

                    const date = new Date().getTime();
                    const exp = date + TIME_EXP;
                    localStorage.setItem("exp",exp);

                    dispatch(actTimeOutLognOut(navigate,TIME_EXP));

                    dispatch(actLoginSuccess(user));

                    localStorage.setItem("UserAdmin", JSON.stringify(user));

                    navigate("/admin/home",{replace:true});

                }
            })
            .catch((error) => {
                dispatch(actLoginFail(error));
            })
    }
}

const actLognOut = (navigate) => {
    localStorage.removeItem("UserAdmin");
    localStorage.removeItem("exp");

    navigate("/login", { replace: true });

    return { type: LOGIN_CLEAR_DATA };
}

const actTimeOutLognOut = (navigate, exp) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(actLognOut(navigate));
        }, exp)
    }
}

export const actTryLogin = (navigate) => {
    return (dispatch) => {
        const user = JSON.parse(localStorage.getItem("UserAdmin"));
        if(!user) return;

        const exp = localStorage.getItem("exp");
        const date = new Date().getTime();

        console.log(exp);
        console.log(date);
        
        if(date > exp){
            dispatch(actLognOut(navigate))
            return;
        }

        dispatch(actTimeOutLognOut(navigate, exp - date))
        dispatch(actLoginSuccess(user));
    }
}



const actLoginRequest = () => {
    return {
        type: LOGIN_REQUEST,
    }
}

const actLoginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data,
    }
}

const actLoginFail = (error) => {
    return {
        type: LOGIN_FAIL,
        payload: error,
    }
}

export default actLognOut;



