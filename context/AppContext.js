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

  const saveUidToStorage = async (uid) => {
    try {
      await AsyncStorage.setItem('uid', uid);
    } catch (error) {
      console.error('Error saving UID to AsyncStorage:', error);
    }
  };

  const removeUidFromStorage = async () => {
    try {
      await AsyncStorage.removeItem('uid');
    } catch (error) {
      console.error('Error removing UID from AsyncStorage:', error);
    }
  };
  const getUser = async () => {
    var raw = JSON.stringify({
      uid: await AsyncStorage.getItem('uid')
    });

    var requestOptions = {
      method: "POST",
      // headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch("https://signal-hub.vercel.app/api/get-user", requestOptions)
      .then(response => response.text())
      .then(result => {
        setUser(JSON.parse(result))
      })
      .catch(error => console.log("error", error));
  };
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // Get the 'uid' from AsyncStorage
        const uid = await AsyncStorage.getItem('uid');

        // If 'uid' exists, set isLoggedIn to true
        if (uid) {
          setIsLoggedIn(true);
          getUser()
        }

      } catch (error) {
        // Handle errors here
        console.error('Error reading uid from AsyncStorage:', error);
      }
    };

    // Call the function to check login status when the component mounts
    checkLoginStatus();
  }, []);

  return (
    <AppContext.Provider value={{ isLoggedIn, getUser, setIsLoggedIn, user, setUser, saveUidToStorage, removeUidFromStorage }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
