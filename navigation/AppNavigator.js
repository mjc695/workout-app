import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/Login';
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

const AppStack = createStackNavigator({ Home: MainTabNavigator }) // other screens too
// const AuthStack = createStackNavigator({ SignIn: SignInScreen })

export default createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: LoginScreen,
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    // Main: MainTabNavigator
  },
    // { initialRouteName: 'AuthLoading ' }
  )
);
