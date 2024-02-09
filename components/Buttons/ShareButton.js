import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useAction from '../../hooks/useAction';

const ShareButton = ({ url, type }) => {
      const { handleShare } = useAction()

      return (
            <View>
                  <TouchableOpacity onPress={() => handleShare(url, type)}>
                        <Ionicons size={20} name="share-social" color="#000" />
                  </TouchableOpacity>
            </View>
      );
};

const styles = StyleSheet.create({});

export default ShareButton;

