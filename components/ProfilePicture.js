import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ProfilePicture = ({ source, size }) => {
      const styles = StyleSheet.create({
            container: {
                  width: size, // Adjust the size as needed
                  height: size,
                  borderRadius: 1000, // To make it a circular image
                  overflow: 'hidden', // To ensure the image stays within the border radius
            },
            image: {
                  width: '100%', // Take full width of the container
                  height: '100%', // Take full height of the container
                  resizeMode: 'cover', // Cover the container
            },
      });

      return (
            <View style={styles.container}>
                {source &&  <Image
                        source={{ uri: source }} // Assuming the source will be a URL; you can adjust this as needed
                        style={styles.image}
                  />}
            </View>
      );
};

export default ProfilePicture;
