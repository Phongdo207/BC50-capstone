import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL } from "./constains";

const initialState = {
    loading: false,
    data: null,
    error: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case LOGIN_SUCCESS: {
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state }
        }

        case LOGIN_FAIL: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state }
        }

        default: return { ...state };
    }
}

export default loginReducer;