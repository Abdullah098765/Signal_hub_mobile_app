import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const HomeScreen = () => {
  const navigation = useNavigation(); // Use the useNavigation hook to get the navigation prop

  return (
    <Button
      title="Go to Login"
      onPress={() => {
        navigation.navigate('LogIn')
        console.log("clicked");
      }} // Use navigation.navigate directly
    />
  );
};

export default HomeScreen;
