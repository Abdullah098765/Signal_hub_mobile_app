import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useAuth } from '../../hooks/useAuth.js';
import CreateSignalForm from "./EditProfileForm.js"

const EditProfileScreen = () => {
  const [pair, setPair] = useState('');
  const [signalExplanation, setSignalExplanation] = useState('');
  const [entry1, setEntry1] = useState('');
  const [entry2, setEntry2] = useState('');
  const [takeProfit1, setTakeProfit1] = useState('');
  const [takeProfit2, setTakeProfit2] = useState('');
  const [takeProfit3, setTakeProfit3] = useState('');
  const [market, setMarket] = useState('');
  const [duration, setDuration] = useState('');
  const [longOrShort, setLongOrShort] = useState('');

  const { user } = useAuth(); // Assuming you have a user object from your authentication

  // Function to handle the submission of the signal
  const handleSignalSubmission = () => {
    // Your logic for submitting the signal data to the backend
    // This could involve calling an API endpoint or updating your MongoDB
    // You might want to show a loading indicator during the submission process
  };

  return (
    <View style={styles.container}>
   <CreateSignalForm/>
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
 
});

export default EditProfileScreen;
