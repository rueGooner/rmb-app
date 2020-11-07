import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, TextInput, TouchableOpacity, Dimensions, Platform } from 'react-native';

import GlobalStyles, { mainTheme } from '../constants/GlobalStyles';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

function LoginScreen({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="auto" backgroundColor={mainTheme.primary}/>
      <Text>Login Screen</Text>
      <View style={GlobalStyles.header}>
        <View>
          <Text style={GlobalStyles.title}>Sign in</Text>
        </View>
      </View>
      <View style={GlobalStyles.footer}>
        <Text style={GlobalStyles.label}>Email</Text>
        <View style={GlobalStyles.action}>
          <Icon name="user" size={18} color={mainTheme.secondary} style={{ marginBottom: 10 }} />
          <TextInput
            autoCapitalize='none'
            placeholder="you@yourplace.co.uk"
            placeholderTextColor={mainTheme.primary}
            style={GlobalStyles.textInput} />
          <Icon name="check-circle" size={18} color={GlobalStyles.errorIcon.color} style={{ marginBottom: 10 }} />
        </View>
        <Text style={[GlobalStyles.label, { marginTop: 15 }]}>Password</Text>
        <View style={GlobalStyles.action}>
          <Icon name="at-sign" size={18} color={mainTheme.secondary} style={{ marginBottom: 10 }} />
          <TextInput
            autoCapitalize='none'
            secureTextEntry={true}
            placeholder="you@yourplace.co.uk"
            placeholderTextColor={mainTheme.primary}
            style={GlobalStyles.textInput} />
          <Icon name="eye-off" size={18} color={GlobalStyles.errorIcon.color} style={{ marginBottom: 10 }} />
        </View>
      </View>
    </View>
  );
}

export default LoginScreen;