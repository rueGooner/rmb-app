import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';

import GlobalStyles, { mainTheme, gradients } from '../constants/GlobalStyles';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

function RegisterScreen({ navigation }) {
  const [data, setData] = useState({
    emai: '',
    password: '',
    passwordConfirmation: '',
    inputChange: false,
    secureTextEntry: true,
    confirmationSecureTextEntry: true,
  });

  const emailInputChange = value => {
    if (value.length !== 0) {
      setData({
        ...data,
        email: value,
        inputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        inputChange: false,
      });
    }
  };

  const passwordInputChange = value => {
    setData({
      ...data,
      password: value
    });
  };

  const confirmationPasswordInputChange = value => {
    setData({
      ...data,
      passwordConfirmation: value
    })
  };

  const passwordVisibility = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  };

  const confirmationPasswordVisibility = () => {
    setData({
      ...data,
      confirmationSecureTextEntry: !data.confirmationSecureTextEntry
    })
  };

  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="light" backgroundColor={mainTheme.primary} />
      <Text>Register Screen</Text>
      <View style={GlobalStyles.header}>
        <View>
          <Text style={GlobalStyles.title}>Register</Text>
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig" style={GlobalStyles.footer}>
        <Text style={GlobalStyles.label}>Email</Text>
        <View style={GlobalStyles.action}>
          <Icon
            name="at-sign"
            size={16}
            color={mainTheme.primary}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            onChangeText={(value) => emailInputChange(value)}
            autoCapitalize="none"
            placeholder="you@yourplace.co.uk"
            placeholderTextColor={mainTheme.white}
            style={GlobalStyles.textInput}
          />
          {data.inputChange ? (
            <Animatable.View animation="bounceIn">
              <Icon
                name="check-circle"
                size={16}
                color={mainTheme.success}
                style={{ marginBottom: 10 }}
              />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[GlobalStyles.label, { marginTop: 15 }]}>Password</Text>
        <View style={GlobalStyles.action}>
          <Icon
            name="unlock"
            size={16}
            color={mainTheme.primary}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            onChangeText={(value) => passwordInputChange(value)}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder="Your Password"
            placeholderTextColor={mainTheme.white}
            style={GlobalStyles.textInput}
          />
          <TouchableOpacity onPress={passwordVisibility}>
            <Icon
              name={data.secureTextEntry ? 'eye-off' : 'eye'}
              size={16}
              color={data.secureTextEntry ? GlobalStyles.errorIcon.color : mainTheme.success}
              style={{ marginBottom: 10 }}
            />
          </TouchableOpacity>
        </View>
        <Text style={[GlobalStyles.label, { marginTop: 15 }]}>Password Confirmation</Text>
        <View style={GlobalStyles.action}>
          <Icon
            name="lock"
            size={16}
            color={mainTheme.primary}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            onChangeText={(value) => confirmationPasswordInputChange(value)}
            autoCapitalize="none"
            secureTextEntry={data.confirmationSecureTextEntry ? true : false}
            placeholder="Confirm Password"
            placeholderTextColor={mainTheme.white}
            style={GlobalStyles.textInput}
          />
          <TouchableOpacity onPress={confirmationPasswordVisibility}>
            <Icon
              name={data.confirmationSecureTextEntry ? 'eye-off' : 'eye'}
              size={16}
              color={data.confirmationSecureTextEntry ? GlobalStyles.errorIcon.color : mainTheme.success}
              style={{ marginBottom: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          <LinearGradient
            colors={gradients.primaryButton}
            style={GlobalStyles.signIn}>
            <Text style={[GlobalStyles.textSign, { color: mainTheme.white }]}>Register</Text>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => navigation.navigate('LoginScreen')}
            style={GlobalStyles.register}
          >
            <Text style={GlobalStyles.textSign}>Login</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

export default RegisterScreen;
