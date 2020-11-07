import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text } from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';

function RegisterScreen({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="auto" />
      <Text>Register Screen</Text>
      <View style={GlobalStyles.button}>
        <Button
          title="Home"
          color={GlobalStyles.primaryButton.backgroundColor}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

export default RegisterScreen;