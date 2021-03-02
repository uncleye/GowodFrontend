import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import {ImageBackground} from 'react-native';
import {StyleSheet, Text, Picker, View, Image} from 'react-native';
import {Input} from 'react-native-elements';
import { AuthStackParamNavigationProps } from '../../config/ParamList';
import { AuthInputData, LOG_IN } from '../../queries/UserQuery';
import AppButton from '../Button';
type Props = AuthStackParamNavigationProps<'Login'>

export default function LoginScreen({route, navigation}: Props) {
  const {handleChangeLoginState} = route.params;

  const [email, setEmail] = React.useState('ziyewang@gmail.com');
   const [password, setPassword] = React.useState('abc');
  // const [loading, setLoading] = React.useState(false);
  // const [error, setError] = React.useState('');
  const handleLogin = (emai: string, password:string) => {
    const {loading, data, error} = useQuery<AuthInputData, {}>(LOG_IN)
    if(data) {
      handleChangeLoginState(true)
    }
  };
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
        <Input
          style={styles.input}
          placeholder={'Email'}
          keyboardType={'email-address'}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={'darkgray'}
        />
        <Input
          style={styles.input}
          placeholder={'Password'}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor={'darkgray'}
        />
        <AppButton title="Login" color="secondary" onPress = {()=>handleChangeLoginState(true)}/>
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
  input: {
    marginVertical: 8,
    backgroundColor: '#e8e8e8',
    width: '100%',
    padding: 20,
    borderRadius: 8,
    color: 'black',
  },
});
