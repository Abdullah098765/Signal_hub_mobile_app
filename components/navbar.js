// Navbar.js

import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // You can use any icon library you prefer
import ProfilePicture from './ProfilePicture';

const Navbar = () => {
      return (
            <View style={styles.navbar}>
                  <View style={styles.iconsContainer} >
                        <TouchableOpacity style={styles.iconContainer}>
                              <Icon name="bell" size={18} color="#fff" />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.iconContainer}>
                              <Icon name="search" size={18} color="#fff" />
                        </TouchableOpacity>
                  </View>



                  <View >
                        <ProfilePicture size={30} source={"https://signal-hub.vercel.app/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fsignal-hub-eb98f.appspot.com%2Fo%2Fprofile-pictures%252F658aa18418e027cedd91178b%252FsignalhubIcon.jpg%3Falt%3Dmedia%26token%3Dded1d485-710e-4673-8a51-9da053f64da9&w=128&q=75"} />

                  </View>
            </View>
      );
};

const styles = StyleSheet.create({
      navbar: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingVertical: 10,
            backgroundColor: '#111827', // 111827 Example background color
      },
      iconsContainer: {
            flexDirection: 'row',

      },
      iconContainer: {
            padding: 6,
            paddingHorizontal: 8

      },

      prifilePic:{

      }
});

export default Navbar;
