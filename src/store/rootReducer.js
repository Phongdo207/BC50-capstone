import { combineReducers } from "redux";
import listMovieReducer from "../pages/Home/Listmovie/duck/reducer";
import infoMovieReducer from "./../pages/Infofilm/duck/reducer";
import showTimeMovieReducer from "../pages/Infofilm/Showtime/duck/reducer";
import listMovieAdminReducer from "../Adminpages/Film/duck/reducer";
import listUserReducer from "../Adminpages/Home/duck/reducer";
import loginReducer from "../pages/Login/duck/reducer";
import registerReducer from "../pages/Register/duck/reducer";
import deleteUserReducer from "../Adminpages/Home/UserItem/duck/reducer";

const rootReducer = combineReducers({
    listMovieReducer,
    infoMovieReducer,
    showTimeMovieReducer,
    listMovieAdminReducer,
    listUserReducer,
    loginReducer,
    registerReducer,
    deleteUserReducer,
});

export default rootReducer;