import { LIST_MOVIE_ADMIN_REQUEST, LIST_MOVIE_ADMIN_SUCCESS, LIST_MOVIE_ADMIN_FAIL } from "./constains";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const listMovieAdminReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_MOVIE_ADMIN_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case LIST_MOVIE_ADMIN_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }

        case LIST_MOVIE_ADMIN_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }

        default: return { ...state };
    }
}

export default listMovieAdminReducer;