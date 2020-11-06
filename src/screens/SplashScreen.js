import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text } from 'react-native';
import GlobalStyles from '../constants/GlobalStyles';

function SplashScreen({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="auto" />
      <Text>SPLASH SPLASH</Text>
      <View style={GlobalStyles.button}>
        <Button
          title="Go to Home Screen"
          color={GlobalStyles.primaryButton.backgroundColor}
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

export default SplashScreen;