import React, { useState, useContext } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  Button,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Platform,
  Alert,
} from 'react-native';
import { validate } from 'validate.js';

import GlobalStyles, { mainTheme, gradients } from '../constants/GlobalStyles';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import { AuthContext } from '../components/Context';
import { backend } from '../services/api';
import constraints from '../constants/constraints';

function LoginScreen({ navigation }) {
  const [data, setData] = useState({
    email: 'ruebencee@gmail.com',
    password: 'password',
    inputChange: false,
    secureTextEntry: true,
    errors: null,
    invalidPassword: null,
  });

  const { login } = useContext(AuthContext);

  const emailInputChange = (value) => {
    if (value.length !== 0) {
      setData({
        ...data,
        email: value,
        inputChange: true
      });
    } else {
      setData({
        ...data,
        email: value,
        inputChange: false,
      });
    }
  };

  const handleValidation = value => {
    const validationResult = validate(value, constraints);
    setData({
      ...data,
      errors: validationResult,
    });

    setTimeout(() => {
      setData({
        ...data,
        errors: [],
      });
    }, 3000);
  };

  const passwordInputChange = (value) => {
    if (value.length < 8) {
      setData({
        ...data,
        password: value,
        invalidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: value,
        invalidPassword: false,
      });
    }
  };

  const hasErrors = (field) => {
    const { errors } = data;
    return (errors && errors[field]) || [];
  };

  const passwordVisibility = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleLogin = async ({ email, password }) => {
    try {
      const foundUser = await backend.post('/login', {
        email: email,
        password: password,
      });

      if (data.email.length === 0 || data.password.length === 0) {
        Alert.alert('Input Error', 'Email or Password field cannot be empty!', [
          {
            text: 'Okay',
          },
        ]);
        return;
      }

      if (!foundUser) {
        Alert.alert('User not found!', 'Please try logging in again.', [
          {
            text: 'Okay',
          },
        ]);
        return;
      }

      login(foundUser);
    } catch (error) {
      Alert.alert(error.response.data.message, 'Please try again!', [
        { text: 'Okay' },
      ]);
    }
  };

  return (
    <View style={GlobalStyles.container}>
      <StatusBar style="light" backgroundColor={mainTheme.primary} />
      <Text>Login Screen</Text>
      <View style={GlobalStyles.header}>
        <View>
          <Text style={GlobalStyles.title}>Login</Text>
        </View>
      </View>
      <Animatable.View animation="fadeInUpBig" style={GlobalStyles.footer}>
        <Text style={GlobalStyles.label}>Email</Text>
        <View style={GlobalStyles.action}>
          <Icon
            name="at-sign"
            size={18}
            color={mainTheme.primary}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            onChangeText={(value) => emailInputChange(value)}
            onEndEditing={(event) => handleValidation(event.nativeEvent.text)}
            autoCapitalize="none"
            placeholder="you@yourplace.co.uk"
            placeholderTextColor={mainTheme.white}
            style={GlobalStyles.textInput}
          />
          {data.inputChange ? (
            <Animatable.View animation="bounceIn">
              <Icon
                name="check-circle"
                size={18}
                color={mainTheme.success}
                style={{ marginBottom: 10 }}
              />
            </Animatable.View>
          ) : null}
        </View>
        {hasErrors('emailAddress').map((error, errorIndex) => (
          <Text key={errorIndex} style={GlobalStyles.errorMessage}>
            {error}
          </Text>
        ))}
        <Text style={[GlobalStyles.label, { marginTop: 15 }]}>Password</Text>
        <View style={GlobalStyles.action}>
          <Icon
            name="unlock"
            size={18}
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
              size={18}
              color={
                data.secureTextEntry
                  ? GlobalStyles.errorIcon.color
                  : mainTheme.success
              }
              style={{ marginBottom: 10 }}
            />
          </TouchableOpacity>
        </View>
        {data.invalidPassword ? (
          <Text style={GlobalStyles.errorMessage}>
            Password must be at least 8 characters
          </Text>
        ) : null}
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity
            onPress={() =>
              handleLogin({
                email: data.email,
                password: data.password,
              })
            }
          >
            <LinearGradient
              colors={gradients.primaryButton}
              style={GlobalStyles.signIn}
            >
              <Text style={[GlobalStyles.textSign, { color: mainTheme.white }]}>
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
            style={GlobalStyles.register}
          >
            <Text style={GlobalStyles.textSign}>Register</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

export default LoginScreen;
