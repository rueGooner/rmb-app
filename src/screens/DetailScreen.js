import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();

function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>Details Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

function DetailStackScreen() {
  return (
    <Stack.Navigator screenOptions={screenStyles}>
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          headerRight: () => (
            <Icon.Button name='menu' size={20} backgroundColor='#009387' onPress={() => navigation.toggleDrawer()}></Icon.Button>
          )
        }} />
    </Stack.Navigator>
  )
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

export default DetailStackScreen;