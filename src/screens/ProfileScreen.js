import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar style="auto" />
      <Text>Profile</Text>
      <View style={styles.button}>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

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

export default ProfileScreen;