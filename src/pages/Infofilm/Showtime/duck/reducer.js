import { SHOWTIME_MOVIE_REQUEST, SHOWTIME_MOVIE_SUCCESS, SHOWTIME_MOVIE_FAIL } from "./constains";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const showTimeMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOWTIME_MOVIE_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case SHOWTIME_MOVIE_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }

        case SHOWTIME_MOVIE_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }

        default: return { ...state };
    }
}

export default showTimeMovieReducer;