import { combineReducers } from "redux";
import listMovieReducer from "../pages/Home/Listmovie/duck/reducer";

const rootReducer = combineReducers({
    listMovieReducer,
});

export default rootReducer;