import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios"

const API_KEY = 'AIzaSyAJK6g2d2dyXwH-VhgtNqTaMR5dO-ylmdM'

const authenticate = async ( mode, email, password) => {
    const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
    const response = await axios.post(URL, {
        email: email,
        password: password,
        returnSecureToken: true // pass always true
    })
    const token=response.data.idToken;
    AsyncStorage.setItem('toke', token)
    return token;
}

// export const createUser=async(email, password)=>{
//     const response=await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key='+ API_KEY,
//         {
//             email: email,
//             password: password,
//             returnSecureToken: true // pass always true
//         }
//     )
// }
export const createUser = (email, password) => {
    return authenticate("signUp", email, password)
}

export const login = (email, password) => {
    return authenticate("signInWithPassword", email, password)
}