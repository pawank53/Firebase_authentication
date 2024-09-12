import { useState } from "react";
import { ImageBackground, Text, View, Image, StyleSheet, Alert } from "react-native";
import Background from "../components/Background";
import AuthContent from "../components/auth/AuthContent";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { authenticate } from "../../redux/action/actions";
import {login } from "../utils/helper";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginScreen = () => {

    const dispatch=useDispatch();
    const [authenticating, setIsAuthenticationg] = useState(false)

    const loginHandler = async ({ email, password }) => {
        setIsAuthenticationg(true)
        try {
            const token=await login(email, password)
            AsyncStorage.setItem("token", token)
            dispatch(authenticate(token))
        } catch (e) {
            Alert.alert("Authentication Failed!", "Could not log in , please check your credentials and try again!")
            setIsAuthenticationg(false)
        }
        if (authenticating) {
            return <Loader message="Logging..." />
        }
    }
    return (
        <View>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/login.png')} style={styles.imageStyle} />
            </View>
            <AuthContent isLogin  onAuthenticate={loginHandler}/>
        </View>
    )

}
const styles = StyleSheet.create({
    imageContainer: {
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
        marginBottom: -50
    },
    imageStyle: {
        height: '100%',
        resizeMode: 'contain',
        width: '60%',

    },
    authContent: {

    }
})

export default LoginScreen;

