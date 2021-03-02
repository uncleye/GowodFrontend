import React from 'react';
import {AsyncStorage, ImageBackground} from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';
import AppButton from '../Button';
import { LoggedStackParamNavigationProps } from '../../config/ParamList';
type Props = LoggedStackParamNavigationProps<'LoggedIn'>

const getCurrentUser = async () => {
  var collect, value
    try {
      value = await AsyncStorage.getItem('CurrentUser').then(
        (value)=> {
          collect =value;
          console.log('Then', value)
        }
      );
      
    } catch (e) {
      console.log('Error', Error)
    }
    console.log('Fianl', value)
    return collect
  
};

export default function ProfileScreen({route, navigation} : Props) {
  const {handleChangeLoginState} = route.params
  const currentUser = getCurrentUser()
  console.log(currentUser)
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Text style={styles.tagline}>{currentUser}</Text>
        <Text style={styles.tagline}>Sell what you don't need</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <AppButton title="logout" onPress = {() => handleChangeLoginState(false)}/>
        <AppButton title="Register" color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loggingButton: {
    backgroundColor: '#fc5c65',
    width: '100%',
    height: 70,
  },
  logo: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 70,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
  RegisterButton: {
    backgroundColor: '#4ecdc4',
    width: '100%',
    height: 70,
  },
  ButtonContainer: {
    padding: 20,
    width: '100%',
  },
  tagline: {
    fontSize: 25,
    fontWeight: '600',
    paddingVertical: 20,
  },
});
