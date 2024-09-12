import { ImageBackground, Text, View, Image, StyleSheet, Platform, Alert } from "react-native";
import AuthContent from "../components/auth/AuthContent";
import { useState } from "react";
import { createUser } from "../utils/helper";
import Loader from "../components/Loader";
import { useDispatch } from "react-redux";
import { authenticate } from "../../redux/action/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SignupScreen = () => {
  const [authenticating, setIsAuthenticationg] = useState(false)
  const dispatch=useDispatch();

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticationg(true)
    try {
      const token= await createUser(email, password);
      AsyncStorage.setItem("token", token)
      dispatch(authenticate(token))
    } catch (e) {
      Alert.alert("Authentication Failed!", "Could not create user , please check your input and try again!")
      setIsAuthenticationg(false)
    }
    if (authenticating) {
      return <Loader message="Creating user..." />
    }
  }

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/images/login.png')} style={styles.imageStyle} />
      </View>
      <AuthContent onAuthenticate={signupHandler} />
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    ...Platform.select({
      ios: {
        marginBottom: -60,
        height: '40%',
      },
      android: {
        marginBottom: -80,
        height: '35%',
        paddingVertical: 20,
      }
    })
  },
  imageStyle: {
    height: '100%',
    resizeMode: 'contain',
    width: '60%',
  },
  authContent: {

  }
})

export default SignupScreen;