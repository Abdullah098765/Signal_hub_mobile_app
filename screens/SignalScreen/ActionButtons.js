import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignalFollowButton from "../../components/SignalFollowButton.js";
import LikeDislikeButton from '../../components/Buttons/LikeDislikeButton.js';

const ActionButtons = ({ signal }) => {
      return (
            <View style={styles.container}>
                  <LikeDislikeButton signal={signal} />
                  <SignalFollowButton signal={signal} />
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: "#fff"
      },
});

export default ActionButtons;
