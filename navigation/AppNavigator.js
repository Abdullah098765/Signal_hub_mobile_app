import React, { useContext } from 'react';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import Navbar from '../components/MainComponents/navbar';
import UserProfileScreen from '../screens/UserProfileScreen/ProfileScreen';
import SignalScreen from '../screens/SignalScreen/SignalScreen.js';
import { BottomTabNavigator } from './MyTabs.js';
import { AppContext } from '../context/AppContext.js';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfile.js';

function AppNavigator() {
  const Stack = createNativeStackNavigator();
  const { tabBarTranslateY } = useContext(AppContext);

  return (
    <Stack.Navigator
      screenOptions={{
        header: (props) => <Navbar title="Home" {...props} />,
        headerShown: true, // Ensure header is shown
        headerStyle: {
          position: "absolute",
          backgroundColor: "#111827",
          // transform: [{ translateY: tabBarTranslateY }],
        }
      }}

    >
      <Stack.Screen options={{ headerShown: true }} name="AppHome" component={BottomTabNavigator}></Stack.Screen>
      <Stack.Screen options={{ headerShown: true, }} name="Signal" component={SignalScreen}></Stack.Screen>
      <Stack.Screen options={{ headerShown: true, }} name="UserProfile" component={UserProfileScreen}></Stack.Screen>
      <Stack.Screen options={{ headerShown: true, }} name="EditProfile" component={EditProfileScreen}></Stack.Screen>
      <Stack.Screen options={{ headerShown: true, }} name="splash" component={SplashScreen}></Stack.Screen>
      <Stack.Screen options={{ title: "Log in", headerStyle: { backgroundColor: "#111827" }, headerTintColor: '#fff' }} name="Login" component={LoginScreen}></Stack.Screen>
    </Stack.Navigator>
  );
}

export default AppNavigator;
