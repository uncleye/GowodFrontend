import React from 'react';
import {ReactNode, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RegisterScreen from './components/Screens/RegisterScreen';
import LoginScreen from './components/Screens/LoginScreen';
import LoggedInTabNavigator from './components/LoggedInTabNavigator';
import {AuthStackParamList, LoggedStackParamList} from './config/ParamList';
import CreateUserScreen from './components/Screens/CreateUserScreen';
/**
 * @description holds app component, identifies the navigation stack
 */

const Stack = createStackNavigator();

const AuthStackType = createStackNavigator<AuthStackParamList>();
const LoggedStackType = createStackNavigator<LoggedStackParamList>();

const App: () => ReactNode = () => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const handleChangeLoginState = (loggedStatus = true) => {
    //console.log(message)
    setLoggedIn(loggedStatus);
  };
  if (!loggedIn) {
    return (
      <NavigationContainer>
        <AuthStackType.Navigator initialRouteName="Register">
          <AuthStackType.Screen
            name="Register"
            component={RegisterScreen}
            initialParams={{handleChangeLoginState: handleChangeLoginState}}
          />
          <AuthStackType.Screen name="Login" component={LoginScreen} />
          <AuthStackType.Screen
            name="CreateUser"
            component={CreateUserScreen}
          />
        </AuthStackType.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <LoggedStackType.Navigator initialRouteName="LoggedIn">
          <LoggedStackType.Screen
            name="LoggedIn"
            component={LoggedInTabNavigator}
            initialParams={{handleChangeLoginState: handleChangeLoginState}}
          />
        </LoggedStackType.Navigator>
      </NavigationContainer>
    );
  }
};

export default App;
