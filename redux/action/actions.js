import { AUTHENTICATE, LOGOUT, SET_LOADING } from "./actionTypes";

export const authenticate=(token)=>({
    type:AUTHENTICATE,
    payload:token
})

export const logoutState=()=>({
    type:LOGOUT
})
// This action is for removing the first login screen which was visble for few seconds
export const setLoading = (isLoading) => ({
    type: SET_LOADING,
    payload: isLoading
});