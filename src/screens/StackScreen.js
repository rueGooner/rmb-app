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

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();

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
              color='#fff'
              size={20}
              backgroundColor='#5CACC4'
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
              color='#fff'
              size={20}
              backgroundColor='#5CACC4'
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
              color='#fff'
              size={20}
              backgroundColor='#5CACC4'
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
              color='#fff'
              size={20}
              backgroundColor='#5CACC4'
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
      activeColor="#fff"
      barStyle={{ backgroundColor: '#5CACC4', color: '#fff' }}>
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
    backgroundColor: '#5CACC4'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
};

const styles = StyleSheet.create({
  bottomTab: {
    backgroundColor: '#5CACC4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainTabScreen;
