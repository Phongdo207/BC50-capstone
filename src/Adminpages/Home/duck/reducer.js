import { LIST_USER_REQUEST, LIST_USER_SUCCESS, LIST_USER_FAIL } from "./constains";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const listUserReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_USER_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case LIST_USER_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }

        case LIST_USER_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }

        default: return { ...state };
    }
}

export default listUserReducer;