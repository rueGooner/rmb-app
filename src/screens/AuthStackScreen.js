import React from 'React';

import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const AuthStack = createStackNavigator();

function AuthStackScreen({ navigation }) {
  <AuthStack.Navigator headerMode='none'>
    <AuthStack.Screen name="SplashScreen" component={SplashScreen}></AuthStack.Screen>
    <AuthStack.Screen name="Login" component={LoginScreen}></AuthStack.Screen>
    <AuthStack.Screen name="Register" comonent={RegisterScreen}></AuthStack.Screen>
  </AuthStack.Navigator>
}

export default AuthStackScreen;