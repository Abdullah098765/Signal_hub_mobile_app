import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Navbar from '../components/MainComponents/navbar';
import UserProfileScreen from '../screens/UserProfileScreen/ProfileScreen';
import SignalScreen from '../screens/SignalScreen/SignalScreen.js';

function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="AppHome" component={HomeScreen}></Stack.Screen>
      <Stack.Screen options={{ headerShown: false, }} name="Signal" component={SignalScreen}></Stack.Screen>
      <Stack.Screen options={{ headerShown: false, }} name="UserProfile" component={UserProfileScreen}></Stack.Screen>
      <Stack.Screen options={{ headerShown: false, }} name="splash" component={SplashScreen}></Stack.Screen>
      <Stack.Screen options={{ title: "Log in", headerStyle: { backgroundColor: "#111827" }, headerTintColor: '#fff' }} name="Login" component={LoginScreen}></Stack.Screen>

    </Stack.Navigator>
  );
}

export default AppNavigator;
