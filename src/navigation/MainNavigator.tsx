import {StyleSheet, Text, View} from 'react-native';
import React, { FC } from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/auth/LoginScreen';
import HomeScreen from '../screens/dashboard/HomeScreen';
import EmailScreen from '../screens/auth/EmailScreen';
import {mergedStack} from './ScreenCollection';

const Stack = createNativeStackNavigator();

const MainNavigator:FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={() => ({headerShown: false})}>
      {mergedStack.map((item, index) => {
        return (
          <Stack.Screen
            key={index}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </Stack.Navigator>
  );
};

export default MainNavigator;

const styles = StyleSheet.create({});
