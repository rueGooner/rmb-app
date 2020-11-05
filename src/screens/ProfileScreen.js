import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>Profile</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default ProfileScreen;