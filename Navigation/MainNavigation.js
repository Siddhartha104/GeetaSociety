import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Component/Home';
import BhajanScreen from '../Component/Bhajan';
import SlokeScreen from '../Component/Sloke';
const Stack = createStackNavigator();


export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>   
         <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
         <Stack.Screen options={{ headerShown: false }} name="Bhajan" component={BhajanScreen} />
         <Stack.Screen options={{ headerShown: false }} name="Sloke" component={SlokeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
  )
}