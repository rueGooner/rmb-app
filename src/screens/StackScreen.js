import React from 'react';
import { StyleSheet } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';

import { createStackNavigator } from '@react-navigation/stack';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const BottomTab = createMaterialBottomTabNavigator();

function HomeStackScreen({ navigation}) {
  return (
    <HomeStack.Navigator screenOptions={screenStyles}>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Icon.Button
              name='menu'
              color='#00aaff'
              size={20}
              backgroundColor='#3D423C'
              onPress={
                () => navigation.toggleDrawer()
              }
            />
          )
        }} />
    </HomeStack.Navigator>
  )
}

function ProfileStackScreen({ navigation }) {
  return (
    <ProfileStack.Navigator screenOptions={screenStyles}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerRight: () => (
            <Icon.Button
              name='menu'
              color='#00aaff'
              size={20}
              backgroundColor='#3D423C'
              onPress={
                () => navigation.toggleDrawer()
              }
            />
          )
        }} />
    </ProfileStack.Navigator>
  )
}

function SearchStackScreen({ navigation }) {
  return (
    <ProfileStack.Navigator screenOptions={screenStyles}>
      <ProfileStack.Screen
        name="Search"
        component={SearchScreen}
        options={{
          headerRight: () => (
            <Icon.Button
              name='menu'
              color='#00aaff'
              size={20}
              backgroundColor='#3D423C'
              onPress={
                () => navigation.toggleDrawer()
              }
            />
          )
        }} />
    </ProfileStack.Navigator>
  )
}

function ReviewStackScreen({ navigation }) {
  return (
    <ProfileStack.Navigator screenOptions={screenStyles}>
      <ProfileStack.Screen
        name="Search"
        component={ReviewScreen}
        options={{
          headerTintColor: '#ffaa00',
          headerRight: () => (
            <Icon.Button
              name='menu'
              color='#00aaff'
              size={20}
              backgroundColor='#3D423C'
              onPress={
                () => navigation.toggleDrawer()
              }
            />
          )
        }} />
    </ProfileStack.Navigator>
  )
}
function MainTabScreen() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor="#00aaff"
      barStyle={{ backgroundColor: '#3D423C', color: '#00aaff' }}>
      <BottomTab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={20} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={20} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

const screenStyles = {
  headerStyle: {
    backgroundColor: '#3D423C'
  },
  headerTintColor: '#00aaff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
};

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: '#3D423C',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainTabScreen;
