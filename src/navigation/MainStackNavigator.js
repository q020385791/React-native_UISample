/**
 * @format
 * @flow strict-local
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '@screens/HomeScreen'
import DetailsScreen from '@screens/DetailsScreen'
import TestPageScreen from '@screens/TestPageScreen'
import Page2 from '@testpages/Page2'
import Page3 from '@testpages/Page3'
import BlockMenu from '@testpages/BlockMenu'
const Stack = createNativeStackNavigator();

const MainStackNavigator = () => { 
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="TestPageScreen" component={TestPageScreen} />
        <Stack.Screen name="BlockMenu" component={BlockMenu} />
        <Stack.Screen name="Page2" component={Page2} />
        <Stack.Screen name="Page3" component={Page3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigator;
