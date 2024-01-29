import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import SubscribeButton from '../../../components/Buttons/SubscribeButton';
import WriteAReviewButton from '../../../components/Buttons/WriteAReviewButton';

const ActionButtonsForUser = ({ targetUser }) => {
      return (
            <View style={styles.actionbuttons}>
                  <View style={styles.actionbutton} >
                        <SubscribeButton targetUser_id={targetUser._id} targetUserSubscribers={targetUser.Subscribers} />
                  </View>
                  <View style={{ width: 10 }}></View>
                  <View style={styles.actionbutton}>
                        <WriteAReviewButton fIdHash={targetUser.fIdHash} />

                  </View>
            </View>

      );
}

const styles = StyleSheet.create({
      actionbuttons: {
            flexDirection: "row",
            justifyContent: "flex-end",
      },
      actionbutton: {
            color: "#fff",
            backgroundColor: "#111827",
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: "center",
            flex: 1,
            borderRadius: 6


      },
})

export default ActionButtonsForUser;
