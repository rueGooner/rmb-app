import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const AuthStack = createStackNavigator();

function AuthStackScreen({ navigation }) {
  return (
    <AuthStack.Navigator headerMode='none'>
      <AuthStack.Screen name="SplashScreen" component={SplashScreen}></AuthStack.Screen>
      <AuthStack.Screen name="LoginScreen" component={LoginScreen}></AuthStack.Screen>
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen}></AuthStack.Screen>
    </AuthStack.Navigator>
  )
}

export default AuthStackScreen;