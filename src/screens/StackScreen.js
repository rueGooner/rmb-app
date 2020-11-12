import React from 'react';
import { StyleSheet } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Icon from 'react-native-vector-icons/Feather';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import SettingsScreen from './SettingsScreen';

import { createStackNavigator } from '@react-navigation/stack';
import NotificationsScreen from './NotificationsScreen';
import { mainTheme } from '../constants/GlobalStyles';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();

const BottomTab = createMaterialBottomTabNavigator();

function HomeStackScreen({ navigation}) {
  return (
    <HomeStack.Navigator screenOptions={screenStyles}>
      <HomeStack.Screen
        name="Dashboard"
        component={HomeScreen}
        options={{
          headerRight: () => (
            <Icon.Button
              name='menu'
              color={mainTheme.primary}
              size={20}
              backgroundColor={mainTheme.background}
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
              color={mainTheme.primary}
              size={20}
              backgroundColor={mainTheme.background}
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
              color={mainTheme.primary}
              size={20}
              backgroundColor={mainTheme.background}
              onPress={
                () => navigation.toggleDrawer()
              }
            />
          )
        }} />
    </ProfileStack.Navigator>
  )
}

function SettingsStackScreen({ navigation }) {
  return (
    <SettingStack.Navigator screenOptions={screenStyles}>
      <SettingStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          headerTintColor: '#fff',
          headerRight: () => (
            <Icon.Button
              name='menu'
              color={mainTheme.primary}
              size={20}
              backgroundColor={mainTheme.background}
              onPress={
                () => navigation.toggleDrawer()
              }
            />
          )
        }} />
    </SettingStack.Navigator>
  )
}
function MainTabScreen() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor={mainTheme.background}
      inactiveColor={mainTheme.white}
      barStyle={{ backgroundColor: mainTheme.primary }}>
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
      <BottomTab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={20} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

const screenStyles = {
  headerStyle: {
    backgroundColor: mainTheme.background
  },
  headerTintColor: mainTheme.primary,
  headerTitleStyle: {
    fontWeight: 'bold'
  },
};

export default MainTabScreen;
