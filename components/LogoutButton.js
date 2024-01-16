import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useAuth } from '../hooks/useAuth';

const LogoutButton = () => {
      const { logout } = useAuth()

      return (

            <TouchableOpacity onPress={() => logout()}>
                  <Text  style={{ color: "gray",}}>Logout</Text>
            </TouchableOpacity>
      );
}

const styles = StyleSheet.create({})

export default LogoutButton;
