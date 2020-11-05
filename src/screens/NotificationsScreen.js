import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const NotificationStack = createStackNavigator();

import Icon from 'react-native-vector-icons/Feather';

function NotificationStackScreen({ navigation }) {
  return (
    <NotificationStack.Navigator screenOptions={screenStyles}>
      <NotificationStack.Screen
        name="Search"
        component={NotificationsScreen}
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
    </NotificationStack.Navigator>
  )
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Notifications Screen</Text>
      <View style={styles.button}>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '90%',
    marginHorizontal: 10
  },
});

export default NotificationStackScreen;