import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hooks if using React Navigation
import ProfilePicture from './ProfilePicture';

const UserProfileLink = ({ signal }) => {
  const navigation = useNavigation(); // React Navigation hook

  const handlePress = () => {
    // Navigate to the signal provider page when clicked
    navigation.navigate('UserProfile', { fIdHash: signal.signalProvider.fIdHash });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
    >
      <ProfilePicture size={24} source={signal.signalProvider.profilePicture} />
      <Text style={styles.displayName}>{signal.signalProvider.displayName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },

  displayName: {
    marginLeft: 5,
    fontSize: 14, // similar to text-sm in Tailwind CSS
    textDecorationLine: 'underline',
    color: "#000"
  },
});

export default UserProfileLink;
