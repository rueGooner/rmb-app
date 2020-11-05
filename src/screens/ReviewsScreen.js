import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const ReviewStack = createStackNavigator();

import Icon from 'react-native-vector-icons/Feather';

function ReviewStackScreen({ navigation }) {
  return (
    <ReviewStack.Navigator screenOptions={screenStyles}>
      <ReviewStack.Screen
        name="Reviews"
        component={ReviewsScreen}
        options={{
          headerRight: () => (
            <Icon.Button
              name='menu'
              color='#fff'
              size={20}
              backgroundColor='#5CACC4'
              onPress={
                () => navigation.toggleDrawer()
              }
            />
          )
        }} />
    </ReviewStack.Navigator>
  )
}

function ReviewsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Reviews Screen</Text>
      <View style={styles.button}>
        <Button
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
}

const screenStyles = {
  headerStyle: {
    backgroundColor: '#5CACC4'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold'
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '90%',
    marginHorizontal: 10
  },
});

export default ReviewStackScreen;