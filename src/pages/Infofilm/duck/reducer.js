import { INFO_MOVIE_REQUEST, INFO_MOVIE_SUCCESS, INFO_MOVIE_FAIL } from "./constains";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const infoMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case INFO_MOVIE_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case INFO_MOVIE_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }

        case INFO_MOVIE_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }

        default: return { ...state };
    }
}

export default infoMovieReducer;