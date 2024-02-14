import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ActionButtonsForProvider = () => {
      const navigation = useNavigation(); // React Navigation hook

      function Actionbutton({ action }) {

            return (
                  <TouchableOpacity
                        onPress={() => {
                              if (action === 'Post Signal') {
                                    navigation.navigate('Create');
                              }
                              else {
                                    navigation.navigate('EditProfile');
                              }

                        }}
                        style={styles.button}
                  >
                        <View style={styles.buttonContent}>
                              <Text style={styles.buttonText}>
                                    <Ionicons name="person-add" />  {action}
                              </Text>
                        </View>
                  </TouchableOpacity>)
      }
      return (
            <View style={styles.actionbuttons}>
                  <View style={styles.actionbuttons}>
                        <Actionbutton action={"Post Signal"} />
                        <View style={{ width: 10 }}></View>
                        <Actionbutton action={"Edit Profile"} />
                  </View>
            </View>

      );
}

const styles = StyleSheet.create({
      actionbuttons: {
            flexDirection: "row",
            justifyContent: "flex-end",
            flex: 1
      },
      button: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#111827',
            padding: 8,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
      },
      buttonContent: {
            flexDirection: 'row',
            alignItems: 'center',
      },
      buttonText: {
            color: 'white',
            fontSize: 16,

      },
})

export default ActionButtonsForProvider;
