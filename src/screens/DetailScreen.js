import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, StyleSheet } from 'react-native';

function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>Details Screen</Text>
      <Button
        title="Home"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}

export default DetailScreen;