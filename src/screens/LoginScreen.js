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
} from 'react-native';

import GlobalStyles, { mainTheme, gradients } from '../constants/GlobalStyles';

import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Feather';

import { AuthContext } from '../components/Context';

function LoginScreen({ navigation }) {
  const [data, setData] = useState({
    email: '',
    password: '',
    inputChange: false,
    secureTextEntry: true,
  });

  const { handleLogin } = useContext(AuthContext);

  const emailInputChange = (value) => {
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

  const passwordVisibility = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
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
            color={mainTheme.secondary}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            onChangeText={(value) => emailInputChange(value)}
            autoCapitalize="none"
            placeholder="you@yourplace.co.uk"
            placeholderTextColor={mainTheme.primary}
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
        <Text style={[GlobalStyles.label, { marginTop: 15 }]}>Password</Text>
        <View style={GlobalStyles.action}>
          <Icon
            name="at-sign"
            size={18}
            color={mainTheme.secondary}
            style={{ marginBottom: 10 }}
          />
          <TextInput
            onChangeText={(value) => passwordInputChange(value)}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            placeholder="Your Password"
            placeholderTextColor={mainTheme.primary}
            style={GlobalStyles.textInput}
          />
          <TouchableOpacity onPress={passwordVisibility}>
            <Icon
              name={data.secureTextEntry ? 'eye-off' : 'eye'}
              size={18}
              color={data.secureTextEntry ? GlobalStyles.errorIcon.color : mainTheme.success}
              style={{ marginBottom: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 15 }}>
          <TouchableOpacity onPress={() => handleLogin({
            // email: data.email, password: data.password
            email: 'ruebencee@gmail.com', password: 'password'

          })}>
            <LinearGradient
              colors={gradients.primaryButton}
              style={GlobalStyles.signIn}>
              <Text style={[GlobalStyles.textSign, { color: mainTheme.white }]}>Login</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('RegisterScreen')}
            style={GlobalStyles.register}
          >
            <Text>Register</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}

export default LoginScreen;
