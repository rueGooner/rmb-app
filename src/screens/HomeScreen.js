import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text } from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

function HomeScreen({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="auto" />
      <Text>Home Screen</Text>
      <View style={GlobalStyles.button}>
        <Button
          title="Profile"
          color={GlobalStyles.primaryButton.backgroundColor}
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    </View>
  );
}

export default HomeScreen;