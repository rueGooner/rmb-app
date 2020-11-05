import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

const Stack = createStackNavigator();
// const isDrawerOpen = useIsDrawerOpen();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Home Screen</Text>
      <Button
        title="Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function HomeStackScreen({ navigation}) {
  return (
    <Stack.Navigator screenOptions={screenStyles}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeStackScreen;