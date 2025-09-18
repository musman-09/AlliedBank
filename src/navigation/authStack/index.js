import { View, Text } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Login from '../../Screens/Login';
import { createStackNavigator } from '@react-navigation/stack';

const authStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default authStack;
