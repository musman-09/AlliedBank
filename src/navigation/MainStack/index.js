import { View, Text } from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import Home from '../../Screens/Home';
import Login from '../../Screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import MyPendingRequest from '../../Screens/MyPendingRequest';
import DrawerStack from '../DrawerStack'
import AuthStack from '../AuthStack'

const MainStack = () => {
  const token = useSelector(state => state.counter.token);
 
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {token ? (
     
            <Stack.Screen name="DrawerStack" component={DrawerStack} />
      ) : (
        
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default MainStack;
