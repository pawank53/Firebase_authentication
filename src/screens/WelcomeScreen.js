import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { State } from 'react-native-gesture-handler';
import { logoutState } from '../../redux/action/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';



const WelcomeScreen=()=> {
  const dispatch=useDispatch();
  const logoutHandler=()=>{
    Alert.alert(
      'Logout!',
      'Are you sure you want to logout?',
      [
        {text:"Cancel", style:'cancel'},
        {text:'Logout', onPress:async()=>{
          await AsyncStorage.removeItem('token'),
          dispatch(logoutState())
        }}
      ]
    )
    // AsyncStorage.removeItem("token")
    // dispatch(logoutState())
  }
  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Welcome!</Text>
      <Text>You authenticated successfully!</Text>
      <Button onPress={logoutHandler}>Log out</Button>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
