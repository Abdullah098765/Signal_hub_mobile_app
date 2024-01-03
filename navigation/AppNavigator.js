import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';

function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false, }} name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="LogIn" component={LoginScreen}></Stack.Screen>
      <Stack.Screen options={{ headerShown: false, }} name="splash" component={SplashScreen}></Stack.Screen>

    </Stack.Navigator>
  );
}

export default AppNavigator;
