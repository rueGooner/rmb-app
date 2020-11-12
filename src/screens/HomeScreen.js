import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text } from 'react-native';
// import { SearchBar } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';

import GlobalStyles, { mainTheme } from '../constants/GlobalStyles';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Feather';

function HomeScreen({ navigation }) {
  return (
    <View style={[GlobalStyles.container, { justifyContent: 'flex-start' }]}>
      <StatusBar style="light" />
      <View
        style={{
          borderBottomColor: mainTheme.primary,
          borderBottomWidth: 1,
          width: '100%',
          marginVertical: 5
        }}
      />
      <View style={{ width: '90%' }}>
        <Searchbar
          // searchIcon={{ size: 24 }}
          // round
          placeholder='Search...'
          // containerStyle={GlobalStyles.searchContainer}
          // inputContainerStyle={GlobalStyles.inputContainer}
          // inputStyle={GlobalStyles.inputStyle}
          // placeholderTextColor={mainTheme.background}
          // searchIcon={{ color: mainTheme.primary, size: 25 }}
        />
      </View>
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
