import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GlobalColors } from './src/constants/styles';
import LoginScreen from './src/screens/LoginScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import SignupScreen from './src/screens/SignupScreen';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store/store';
import { authenticate, setLoading } from './redux/action/actions';
import Loader from './src/components/Loader';


const Stack = createStackNavigator();

function AuthStack() {

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalColors.primary500 },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} /> 
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}


const AuthenticatedStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: GlobalColors.primary500 },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
    </Stack.Navigator>
  );
}

// If user is authenticated then only show the authenticated screens
const Navigation = () => {
  const isAuthenticated = useSelector((state) => state.authState.isAuthenticated);
  const isLoading = useSelector((state) => state.authState.isLoading);
if(isLoading){
  return<Loader message="Loading..."/>
}
  return (
    <NavigationContainer> 
      {isAuthenticated ? <AuthenticatedStack /> : <AuthStack />} 
    </NavigationContainer>
  );
}


// The below Root will check whether user has login previously or not , if logged in then no need to login again
function Root() {
  const dispatch = useDispatch();
  useEffect(() => {

    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      if (storedToken) {
        dispatch(authenticate(storedToken))
      }else{
        dispatch(setLoading(false));
      }
    }
    fetchToken();
  }, [dispatch])

  return<Navigation/>
}

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle={"light-content"} />
      <Root />
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
