import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { AppContext } from '../../context/AppContext';

const WriteAReviewButton = ({fIdHash}) => {
      const { currentProfileRoute, setCurrentProfileRoute, scrollToBottom, scrollViewRef } = useContext(AppContext);
      const navigation = useNavigation()
      const route = useRoute()
      return (
            <TouchableOpacity onPress={() => {
                  if (!route.params.signalId) {
                        scrollToBottom()
                        setCurrentProfileRoute('Reviews')
                        console.log(route.params.signalId)
                  }
                  else {
                        navigation.navigate('UserProfile', { fIdHash: fIdHash, writeAReview: true });
                  }

            }} style={styles.actionbutton}>
                  <Ionicons name="chatbox-ellipses" color="#fff" />
                  <View style={{ width: 10 }}></View>
                  <Text style={{ color: "#fff" }}>Write a Review</Text>
            </TouchableOpacity>
      );
}

const styles = StyleSheet.create({
      actionbutton: {
            color: "#fff",
            backgroundColor: "#111827",
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: "center",
            flex: 1,

      },
})

export default WriteAReviewButton;
