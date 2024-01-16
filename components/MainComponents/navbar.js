// Navbar.js

import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Button, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing Icon from FontAwesome
import ProfilePicture from '../ProfilePicture'; // Assuming you have a ProfilePicture component
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../context/AppContext';
import { useAuth } from '../../hooks/useAuth';


const Navbar = ({ title }) => {
      const navigation = useNavigation();
      const { isLoggedIn, user, navbarTranslateY } = useContext(AppContext);
      const { logout } = useAuth()

      return (

            <Animated.View style={[styles.navbar, {
                  transform: [{
                        translateY: navbarTranslateY,

                  }],
                  elevation: 4,
                  zIndex: 1000,
            }]}>
                  {/* Your Navbar content */}

                  {/* Logo Section */}
                  <View style={styles.logoContainer}>
                        <Image
                              source={require('../../assets/logo.20d2465c.png')} // Provide the path to your logo image
                              style={styles.logoImage}
                              resizeMode="contain" // Adjust the resizeMode as needed
                        />
                  </View>

                  {/* Icons and Profile Picture Section */}
                  <View style={styles.iconsContainer}>
                        {/* Bell Icon */}
                        <TouchableOpacity style={styles.iconContainer}>
                              <Icon name="bell" size={18} color="#fff" />
                        </TouchableOpacity>

                        {/* Search Icon */}
                        <TouchableOpacity style={styles.iconContainer}>
                              <Icon name="search" size={18} color="#fff" />
                        </TouchableOpacity>

                        {/* Profile Picture */}

                  </View>

                  {!isLoggedIn ?
                        <Text onPress={() => navigation.navigate('Login')
                        }>Login</Text>
                        :
                        <TouchableOpacity
                              onPress={() => navigation.navigate('UserProfile')}>
                              <ProfilePicture

                                    size={30} // Adjust the size as per your requirement
                                    source={user?.profilePicture}
                              />
                        </TouchableOpacity>

                  }
            </Animated.View>

      );
};

const styles = StyleSheet.create({
      navbar: {

            position: "absolute",
            top: 0, right: 0, left: 0,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 12,
            paddingVertical: 0, // Increased padding for better spacing
            backgroundColor: '#111827', // Dark background color
            borderBottomWidth: 1,
            borderBottomColor: '#2c2c2c', // Added bottom border for separation
      },
      logoContainer: {
            flex: 1, // Take up available space
      },
      logoImage: {
            width: 60,
            height: 40,
            resizeMode: 'contain',
            marginRight: 6, // Adjust based on your design
      },

      iconsContainer: {
            flexDirection: 'row',
            alignItems: 'center', // Center items vertically
      },
      iconContainer: {
            paddingHorizontal: 12, // Increased padding for better touch area
      },
});

export default Navbar;
