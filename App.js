import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStackScreen from './src/screens/HomeScreen';
import DetailStackScreen from './src/screens/DetailScreen';

const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={screenStyles} drawerPosition='right'>
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="Details" component={DetailStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const screenStyles = {
  headerStyle: {
    backgroundColor: '#009387'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
};

export default App;


