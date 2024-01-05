import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hooks if using React Navigation

const SignalFollowButton = ({ signal }) => {
      const navigation = useNavigation(); // React Navigation hook
      var following = null;
      const handlePress = () => {
            // Navigate to the signal details page when clicked
            navigation.navigate('SignalDetails', { signalId: signal._id });
      };

      return (
            <TouchableOpacity
                  onPress={handlePress}
                  style={following ? styles.followingButton : styles.followButton}
            >
                  <Text style={following ? styles.followingButtonText : styles.followButtonText}>
                        {following ? 'See Details' : 'Follow Signal'}
                  </Text>
            </TouchableOpacity>
      );
};

const styles = StyleSheet.create({
      followButton: {
            backgroundColor: '#333', // Similar to bg-gray-700
            color: '#fff', // Text color
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 10,
            fontSize: 14, // Similar to text-sm in Tailwind CSS
            alignItems: "center"
      },
      followButtonText: {
            color: '#fff',
            
      },
      followingButton: {

            backgroundColor: '#f3f4f6', // Similar to bg-gray-100
            color: '#333', // Text color
            paddingHorizontal: 16,
            paddingVertical: 8,
            borderRadius: 10,
            fontSize: 14, // Similar to text-sm in Tailwind CSS
            alignItems: "center"
      },
      followingButtonText: {
            color: '#333',
      },
});

export default SignalFollowButton;
