import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navbar from '../../components/navbar';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Function to navigate to another screen (Example: Signal Provider List)
  const navigateToSignalProviders = () => {
    navigation.navigate('SignalProviders'); // Assume 'SignalProviders' is the name of the next screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Navbar />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  content: {


  },

});

export default HomeScreen;
