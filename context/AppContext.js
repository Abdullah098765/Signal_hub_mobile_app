// AppContext.js
import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert, Animated } from 'react-native';

// Create a new context instance
export const AppContext = createContext();

// Create a provider componentgit
export const AppProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isOptionBarsVisible, setOptionBarsVisible] = useState(true);
  const [page, setPage] = useState(1);
  const [isSignalsLoading, setIsSignalsLoading] = useState(true);
  const [iseSignalsEnd, setiseSignalsEnd] = useState(false)
  const [currentProfileRoute, setCurrentProfileRoute] = useState("All");

  const saveUidToStorage = async (uid) => {
    try {
      await AsyncStorage.setItem('uid', uid);
    } catch (error) {
      // console.error('Error saving UID to AsyncStorage:', error);
    }
  };

  const removeUidFromStorage = async () => {
    try {
      await AsyncStorage.removeItem('uid');
    } catch (error) {
      // console.error('Error removing UID from AsyncStorage:', error);
    }
  };
  const getUser = async () => {
    var raw = JSON.stringify({
      uid: "P9AG6hoiTNc2MM0GySSJZ9YG5h33"
      // uid: await AsyncStorage.getItem('uid'),
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
        return JSON.parse(result)
      })
      .catch(error => Alert.alert("Check your connection"));
  };
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        // Get the 'uid' from AsyncStorage
        // const uid = await AsyncStorage.getItem('uid');
        const uid = "P9AG6hoiTNc2MM0GySSJZ9YG5h33";

        // If 'uid' exists, set isLoggedIn to true
        if (uid) {
          setIsLoggedIn(true);
          getUser()
        }

      } catch (error) {
        // Handle errors here
        // console.error('Error reading uid from AsyncStorage:', error);
      }
    };

    // Call the function to check login status when the component mounts
    checkLoginStatus();
  }, []);

  const scrollViewRef = useRef();

  const scrollToBottom = () => {
    scrollViewRef?.current?.scrollToEnd({ animated: true });
  };

  const [scrollY, setScrollY] = useState(new Animated.Value(0));
  const [diffClamp, setDiffClamp] = useState(Animated.diffClamp(scrollY, 0, 50));


  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );
  const handleScrollForSignals = (event, isSignalsLoading) => {
    handleScroll(event)

    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 500;

    if (isCloseToBottom && !isSignalsLoading) {
      if (!iseSignalsEnd) {
        setIsSignalsLoading(true)
        setPage((prevPage) => prevPage + 1);
      }

    }
  };

  const navbarTranslateY = diffClamp.interpolate({
    inputRange: [0, 50],  // You can adjust the threshold value as per your requirement
    outputRange: [0, -50], // Adjust the translateY value to hide or show the Navbar
    extrapolate: 'clamp'
  });
  const tabBarTranslateY = diffClamp.interpolate({
    inputRange: [0, 50], // Adjust the range based on your scroll distance
    outputRange: [0, 50], // Adjust the translateY value based on your tab bar height
    extrapolate: 'clamp',
  });



  return (
    <AppContext.Provider value={{
      tabBarTranslateY,
      isLoggedIn,
      getUser,
      setIsLoggedIn,
      user,
      setUser,
      saveUidToStorage,
      removeUidFromStorage,
      scrollY,
      setScrollY,
      handleScroll,
      navbarTranslateY, currentProfileRoute, setCurrentProfileRoute,
      scrollToBottom, scrollViewRef, page, setPage, handleScrollForSignals, isSignalsLoading, setIsSignalsLoading, iseSignalsEnd, setiseSignalsEnd
    }}>
      {children}
    </AppContext.Provider >
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};
