import React, { useState, useEffect, useMemo, useReducer } from 'react';
import { View, ActivityIndicator, Text, Alert } from 'react-native';
import { backend } from './src/services/api';
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
    isLoading: true,
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
          isLoading: false
        };
      case 'LOGOUT':
        return {
          ...previousState,
          isLoading: false
        };
      case 'REGISTER':
        return {
          ...previousState,
          isLoading: false
        };
      case 'RETRIEVE_TOKEN':
        return {
          ...previousState,
          // userToken: action.token,
          isLoading: false
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      handleLogin: async (userData) => {
        try {
          const { data } = await backend.post('/login', userData);
          dispatch({ type: 'LOGIN', user: data.user, token: data.token})
          alert(user);
        } catch (error) {
          Alert.alert('ERROR', error.response.data.message);
        }
      },
      handleRegister: () => {},
      handleLogout: () => {},
    }),
    []
  );

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'RETRIEVE_TOKEN', /*token: userToken*/ });
    }, 1000);
  }, []);

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
        <AuthStackScreen />
        {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={screenStyles} drawerPosition='right'>
          <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
          <Drawer.Screen name="Notifications" component={NotificationStackScreen} />
          <Drawer.Screen name="Reviews" component={ReviewsScreen} />
        </Drawer.Navigator> */}
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
