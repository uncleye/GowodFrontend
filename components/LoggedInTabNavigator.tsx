import {from} from 'apollo-boost';
import {
  LoggedInTabParamList,
  LoggedStackParamNavigationProps,
  TabHomeStackParamList,
  TabProfileStackParamList,
  TabProfileStackParamNavigationProps,
} from '../config/ParamList';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import useColorScheme from './hooks/useColorScheme';
import TabDashScreen from './Screens/DashboardScreen';
import TabTestScreen from './Screens/TestScreen';
import ProfileScreen from './Screens/ProfileScreen'
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const LoggedInTab = createBottomTabNavigator<LoggedInTabParamList>();
type Props = LoggedStackParamNavigationProps<'LoggedIn'>
export default function LoggedInTabNavigator({route, navigation} : Props) {
  const {handleChangeLoginState} = route.params
  return (
    <LoggedInTab.Navigator initialRouteName="TabHome">
      <LoggedInTab.Screen name="TabHome" component={TabHomeNavigator} />
      <LoggedInTab.Screen name="TabProfile" component={TabProfileNavigator} initialParams = {{ handleChangeLoginState: handleChangeLoginState}}  />
    </LoggedInTab.Navigator>
  );
}

const TabHomeStack = createStackNavigator<TabHomeStackParamList>();
const TabProfileStack = createStackNavigator<TabProfileStackParamList>();
type ProfileProps = TabProfileStackParamNavigationProps<'TabProfileScreen'>
function TabHomeNavigator() {
  return (
    <TabHomeStack.Navigator initialRouteName="TabDashScreen">
      <TabHomeStack.Screen
        name="TabDashScreen"
        component={TabDashScreen}
        options={{headerTitle: 'Tab Home Title'}}
      />
      <TabHomeStack.Screen
        name="TabTestScreen"
        component={TabTestScreen}
        options={{headerTitle: 'Tab Test Title'}}
      />
    </TabHomeStack.Navigator>
  );
}

function TabProfileNavigator({route, navigation} : ProfileProps) {
  const {handleChangeLoginState} = route.params
  return (
    <TabProfileStack.Navigator initialRouteName="TabProfileScreen">
      <TabProfileStack.Screen
        name="TabProfileScreen"
        component={ProfileScreen}
        options={{headerTitle: 'Tab Profile Title'}}
        initialParams = {{ handleChangeLoginState: handleChangeLoginState}}
      />
    </TabProfileStack.Navigator>
  );
}
