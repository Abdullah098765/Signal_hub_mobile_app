import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ShareButton = () => {
      return (
            <View>
                  <TouchableOpacity>
                        <Ionicons size={20} name="share-social" color="#000" />
                  </TouchableOpacity>
            </View>
      );
}

const styles = StyleSheet.create({})

export default ShareButton;
