// hooks/useAuth.ts

import { useContext, useState } from 'react';
import { AppContext, AppProvider } from '../context/AppContext';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';

export const useAuth = () => {
  const { isLoggedIn, user, setUser, getUser, removeUidFromStorage, saveUidToStorage, setIsLoggedIn } = useContext(AppContext);
  const navigation = useNavigation();

  async function saveUser(userData) {
    try {
      // Send userData to your server to register the user
      const response = await fetch('https://signal-hub.vercel.app/api/signUp', {
        method: 'POST',
        body: JSON.stringify(
          userData
        ),

      });

      if (response.ok) {
        // User registration on the server was successful
        console.log('User registered on the server.');
        await saveUidToStorage(userData.fireBaseUid);
        setIsLoggedIn(true)
        getUser()
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }], // Replace 'Home' with your initial screen name
        });

      } else {
        // Handle server registration error
        console.log('User exists in the database.');
        await saveUidToStorage(userData.fireBaseUid);
        setIsLoggedIn(true)
        getUser()
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }], // Replace 'Home' with your initial screen name
        });
        // Navigate to the desired screen using React Navigation
        // Replace 'navigation' with your navigation object if using React Navigation
        navigation.navigate('Home');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error registering user on the server:', error);
    }
  }

  const signInWithGoogle = async () => {

    GoogleSignin.configure({
      webClientId: '158518644966-ai4msfcusip2oqa6l1gndnoe4e8mr5o0.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the idToken on the user object, and for offline access.

    });
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
      const { user } = await auth().signInWithCredential(googleCredential);



      const fIdHash = user.uid.split('').reverse().join('')
      function generateRandomId(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomId = '';

        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomId += characters.charAt(randomIndex);
        }

        return randomId;
      }
      // Generate a 5-character random ID
      const randomId = generateRandomId(5);
      const userData = {
        fireBaseUid: user.uid,
        displayName: user.displayName,
        email: user.email, // User's email address
        profilePicture: user.photoURL,
        phone: user.phoneNumber,
        SubscribersFCMTokens: [],
        fIdHash: fIdHash + randomId,
        personalInfo: {
          fullName: user.displayName,
          age: 'No Info',
          mobile: "No Info",
          email: user.email,
          market: "All Markets",
          languages: "No Info",
          country: "No Info"
        }
      }
      saveUser(userData)


    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(JSON.stringify(error, null, 2));

      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(JSON.stringify(error, null, 2));

      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(JSON.stringify(error, null, 2));

      } else {
        console.log(JSON.stringify(error, null, 2));
      }
    }

  };


  const login = async (mathod) => {
    console.log(mathod);
    if (mathod === 'google') {
      signInWithGoogle()
    }

  };


  const logout = () => {
    removeUidFromStorage()
    setIsLoggedIn(false)
    setUser(null);
    console.log("logout");
  };

  return {
    user,
    setUser,
    login,
    logout,

  };
};
