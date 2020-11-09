import React, { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem, DrawItem } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Feather';

import { AuthContext } from '../components/Context';

export function DrawerContent(props) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const { signOut } = useContext(AuthContext)
  return (
    <View style={styles.drawerContainer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{
              flexDirection: 'row',
              marginTop: 15,
            }}>
              <Avatar.Image source={{ uri: 'http://placebeard.it/640/480'}} size={50} />
              <View style={{ marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>Rueben</Title>
                <Caption style={styles.caption}>@GrymmDaGooner</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>Shops Visited: </Paragraph>
                <Caption style={styles.caption}>21</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>Reviews left:</Paragraph>
                <Caption style={styles.caption}>7</Caption>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({ color, size }) => <Icon name="home" color={color} size={size} /> }
              label="Home"
              onPress={() => {
                props.navigation.navigate('Home')
              }} />
            <DrawerItem
              icon={({ color, size }) => <Icon name="user" color={color} size={size} /> }
              label="My Profile"
              onPress={() => {
                props.navigation.navigate('Profile')
              }} />
            <DrawerItem
              icon={({ color, size }) => <Icon name="search" color={color} size={size} /> }
              label="Search Shops"
              onPress={() => {
                props.navigation.navigate('Search')
              }} />
            <DrawerItem
              icon={({ color, size }) => <Icon name="bell" color={color} size={size} /> }
              label="Notifications"
              onPress={() => {
                props.navigation.navigate('Notifications')
              }} />
            <DrawerItem
              icon={({ color, size }) => <Icon name="star" color={color} size={size} /> }
              label="My Reviews"
              onPress={() => {
                props.navigation.navigate('Reviews')
              }} />
            <DrawerItem
              icon={({ color, size }) => <Icon name="settings" color={color} size={size} /> }
              label="Settings"
              onPress={() => {
                props.navigation.navigate('Settings')
              }} />
          </Drawer.Section>
          <Drawer.Section style={styles.drawerSection}>
            <TouchableRipple onPress={() => {toggleTheme()}}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents='none'>
                  <Switch value={isDarkTheme} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => <Icon name="log-out" color={color} size={size} /> }
          label="Sign Out"
          onPress={() => signOut() } />

      </Drawer.Section>
    </View>
  );
}
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  drawerContainer: {
    flex: 1,
  },
  bottomDrawerSection: {
      marginBottom: 15,
      borderTopColor: '#f4f4f4',
      borderTopWidth: 1
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});