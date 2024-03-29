/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { ToastAndroid, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen/LoginScreen';
// import AppNavigator from './navigation/AppNavigator';
import { AppProvider } from './context/AppContext';
import Navbar from './components/MainComponents/navbar';
import { BottomTabNavigator } from './navigation/MyTabs';
import AppNavigator from './navigation/AppNavigator';
import FlashMessage, { showMessage } from 'react-native-flash-message';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AppProvider>
      <NavigationContainer>
        <AppNavigator>

          {/* <BottomTabNavigator /> */}
        </AppNavigator>
      </NavigationContainer>
      <FlashMessage position="top" />
    </AppProvider>
  );
}

export default App;
