import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { User } from "../models/UserModel";

export type AuthStackParamList = {
    Register: {handleChangeLoginState: any};
    Login: {handleChangeLoginState: any};
    CreateUser: {handleChangeLoginState: any};
    UsersPage:undefined;
};

export type AuthStackParamNavigationProps<T extends keyof AuthStackParamList> = {
  navigation:StackNavigationProp<AuthStackParamList, T>
  route: RouteProp<AuthStackParamList, T>
}

export type AuthProps<T extends keyof AuthStackParamList> = {
  navigation: StackNavigationProp<AuthStackParamList, T>;
}

export type LoggedStackParamList = {
    LoggedIn: {handleChangeLoginState: any};
};

export type LoggedStackParamNavigationProps<T extends keyof LoggedStackParamList> = {
  navigation:StackNavigationProp<LoggedStackParamList, T>
  route: RouteProp<LoggedStackParamList, T>
}


export type LoggedInTabParamList = {
  TabHome: undefined;
  TabProfile: {handleChangeLoginState: any};
};

export type TabHomeStackParamList = {
  TabDashScreen: undefined;
  TabTestScreen: undefined;
};

export type TabHomeStackParamNavigationProps<T extends keyof TabHomeStackParamList> = {
  navigation:StackNavigationProp<TabHomeStackParamList, T>
  route: RouteProp<TabHomeStackParamList, T>
}

export type TabProfileStackParamList = {
  TabProfileScreen: {handleChangeLoginState: any};
};

export type TabProfileStackParamNavigationProps<T extends keyof TabProfileStackParamList> = {
  navigation:StackNavigationProp<TabProfileStackParamList, T>
  route: RouteProp<TabProfileStackParamList, T>
}