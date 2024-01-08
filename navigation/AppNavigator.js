import React from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Navbar from '../components/MainComponents/navbar';

function AppNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{
        header: () => <Navbar title="Home" />, // Use CustomHeader component
      }} name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen options={{ title: "Log in", headerStyle: { backgroundColor: "#111827" }, headerTintColor: '#fff' }} name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen options={{ headerShown: false, }} name="splash" component={SplashScreen}></Stack.Screen>

    </Stack.Navigator>
  );
}

export default AppNavigator;
