// AppContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create a new context instance
export const AppContext = createContext();

// Create a provider component
export const AppProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // Get the 'uid' from AsyncStorage
        const uid = await AsyncStorage.getItem('uid');

        // If 'uid' exists, set isLoggedIn to true
        if (uid) {
          setIsLoggedIn(true);
        }

      } catch (error) {
        // Handle errors here
        console.error('Error reading uid from AsyncStorage:', error);
      }
    };

    // Call the function to check login status when the component mounts
    checkLoginStatus();
  }, []); // Empty dependency array ensures this useEffect runs once when the component mounts




  return (
    <AppContext.Provider value={{ isLoggedIn, user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
