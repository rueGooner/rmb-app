import React, { useState, useEffect, useMemo, useReducer } from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  Alert,
  AsyncStorage,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/screens/StackScreen';
import NotificationStackScreen from './src/screens/NotificationsScreen';
import ReviewsScreen from './src/screens/ReviewsScreen';
import AuthStackScreen from './src/screens/AuthStackScreen';

import { AuthContext } from './src/components/Context';

import { DrawerContent } from './src/components/DrawerContent';
import GlobalStyles, { mainTheme } from './src/constants/GlobalStyles';
const Drawer = createDrawerNavigator();

function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);
  const initialLoginState = {
    isLoading: false,
    user: '',
    userToken: null,
  };

  const loginReducer = (previousState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...previousState,
          user: action.user,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...previousState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...previousState,
          user: user,
          userToken: action.token,
          isLoading: false,
        };
      case 'RETRIEVE_TOKEN':
        return {
          ...previousState,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      login: async (authUser) => {
        try {
          console.log(authUser);
          await AsyncStorage.setItem('rmb-token', authUser.data.token);
          dispatch({
            type: 'LOGIN',
            user: authUser.data.user,
            token: authUser.data.token,
          });
        } catch (error) {
          Alert.alert('ERROR', error.response.data.message);
        }
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('rmb-token');
          dispatch({ type: 'LOGOUT' });
        } catch (error) {
          Alert.alert('Error');
        }
      },
      handleRegister: () => {},
    }),
    []
  );

  // useEffect(() => {
  //   setTimeout(async () => {
  //     try {
  //       const retrievedToken = await AsyncStorage.getItem('rmb-token');
  //       dispatch({ type: 'RETRIEVE_TOKEN', token: retrievedToken });
  //     } catch (error) {
  //       Alert.alert('No token', 'You may need to attempt login again.', [
  //         { text: 'Okay' },
  //       ]);
  //     }
  //   }, 1000);
  // }, []);

  if (loginState.isLoading) {
    return (
      <View
        style={[
          GlobalStyles.container,
          { alignItems: 'center', justifyContent: 'center' },
        ]}
      >
        <ActivityIndicator size="large" color={mainTheme.white} />
        <Text
          style={{
            color: '#fff',
            fontSize: 30,
            marginTop: 40,
            fontWeight: 'bold',
          }}
        >
          Loading
        </Text>
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken === null ? (
          <AuthStackScreen />
        ) : (
          <Drawer.Navigator
            drawerContent={(props) => <DrawerContent {...props} />}
            screenOptions={screenStyles}
            drawerPosition="right"
          >
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen
              name="Notifications"
              component={NotificationStackScreen}
            />
            <Drawer.Screen name="Reviews" component={ReviewsScreen} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const screenStyles = {
  headerStyle: {
    backgroundColor: '#009387',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

export default App;
