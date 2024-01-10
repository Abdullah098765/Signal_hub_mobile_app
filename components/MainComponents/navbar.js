// Navbar.js

import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing Icon from FontAwesome
import ProfilePicture from '../ProfilePicture'; // Assuming you have a ProfilePicture component
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../../context/AppContext';
import { useAuth } from '../../hooks/useAuth';

const Navbar = ({ title }) => {
      const navigation = useNavigation();
      const { isLoggedIn, user, setUser, removeUidFromStorage, saveUidToStorage } = useContext(AppContext);
      const { logout } = useAuth()
      return (
            <View style={styles.navbar}>
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
                              <Icon name="bell" size={22} color="#fff" />
                        </TouchableOpacity>

                        {/* Search Icon */}
                        <TouchableOpacity style={styles.iconContainer}>
                              <Icon name="search" size={22} color="#fff" />
                        </TouchableOpacity>

                        {/* Profile Picture */}

                  </View>

                  {!isLoggedIn ?
                        <Text onPress={() => navigation.navigate('Login')
                        }>Login</Text>
                        :
                        <TouchableOpacity
                              onPress={() => logout()}>
                              <ProfilePicture
                                    size={36} // Adjust the size as per your requirement
                                    source={user?.profilePicture}
                              />
                        </TouchableOpacity>

                  }
            </View>
      );
};

const styles = StyleSheet.create({
      navbar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 0, // Increased padding for better spacing
            backgroundColor: '#111827', // Dark background color
            borderBottomWidth: 1,
            borderBottomColor: '#2c2c2c', // Added bottom border for separation
      },
      logoContainer: {
            flex: 1, // Take up available space
      },
      logoImage: {
            width: 70,
            height: 50,
            resizeMode: 'contain',
            marginRight: 10, // Adjust based on your design
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
