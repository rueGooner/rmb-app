import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './src/screens/StackScreen';
import NotificationStackScreen from './src/screens/NotificationsScreen';
import ReviewsScreen from './src/screens/ReviewsScreen';

import { DrawerContent } from './src/components/DrawerContent';
const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} screenOptions={screenStyles} drawerPosition='right'>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="Notifications" component={NotificationStackScreen} />
        <Drawer.Screen name="Reviews" component={ReviewsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const screenStyles = {
  headerStyle: {
    backgroundColor: '#009387'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
};

export default App;


