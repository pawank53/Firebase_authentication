import { AUTHENTICATE, LOGOUT, SET_LOADING } from "../action/actionTypes"

const initialState = {
    token: null,
    isAuthenticated: false,
    isLoading: true
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE: {
            return { ...state, token: action.payload, isAuthenticated: true , isLoading: false}
        };
        case LOGOUT: {
            return { ...state, token: null, isAuthenticated: false, isLoading: false }
        };
        case SET_LOADING:
            return { ...state, isLoading: action.payload };
        default:
            return state;
    }
}