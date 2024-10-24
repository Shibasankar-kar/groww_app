import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/dashboard/HomeScreen';
import EmailScreen from '../screens/auth/EmailScreen';

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      // initialRouteName="LoginScreen"
      screenOptions={() => ({headerShown: false})}>
      // <Stack.Screen name="LoginScreen" component={LoginScreen} />
      // <Stack.Screen name="HomeScreen" component={HomeScreen} />
      // <Stack.Screen name="EmailScreen" component={EmailScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
