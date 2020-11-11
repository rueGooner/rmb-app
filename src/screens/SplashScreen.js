import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';

import { useTheme } from '@react-navigation/native';
import GlobalStyles, { gradients, mainTheme } from '../constants/GlobalStyles';

const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View
      style={GlobalStyles.container}
      >
      <StatusBar
        backgroundColor={GlobalStyles.container.backgroundColor}
        barStyle="light-content"
      />
      <View style={GlobalStyles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require('../../assets/logo-orange.png')}
          style={GlobalStyles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          GlobalStyles.footer,
          {
            backgroundColor: GlobalStyles.footer.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center'
          },
        ]}
        animation="fadeInUpBig"
      >
        <Text
          style={[
            GlobalStyles.title,
            {
              color: mainTheme.primary,
              alignSelf: 'center',
              textAlign: 'center',
              marginVertical: 10
            },
          ]}
        >
          The UK's best Barber Directory!
        </Text>
        <View style={GlobalStyles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <LinearGradient
              colors={gradients.primaryButton}
              style={GlobalStyles.signIn}
            >
              <Text style={GlobalStyles.textSign}>Login</Text>
              <Icon name="login" color="#fff" size={18} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

const { height } = Dimensions.get('screen');
const height_logo = height * 0.28;

// const GlobalStyles = StyleSheet.create({

// });

export default SplashScreen;
