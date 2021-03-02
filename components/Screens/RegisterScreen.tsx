import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {ImageBackground} from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';
import { AuthStackParamNavigationProps } from '../../config/ParamList';
import AppButton from '../Button';

type Props = AuthStackParamNavigationProps<'Register'>


export default function RegisterScreen({route, navigation} : Props) {
  const {handleChangeLoginState} = route.params


  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.tagline}>Gowod change the world</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <AppButton title="Register" onPress = {()=>navigation.navigate('CreateUser', {handleChangeLoginState: handleChangeLoginState})} />
        {/* <AppButton title="Login" color="secondary" onPress = {()=>navigation.navigate('UsersPage')} /> */}
        <AppButton title="Login" color="secondary" onPress = {()=>navigation.navigate('Login', {handleChangeLoginState: handleChangeLoginState})} />
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
