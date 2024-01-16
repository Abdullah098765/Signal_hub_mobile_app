import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ActionButtonsForProvider = () => {
      return (
            <View style={styles.actionbuttons}>
                  <TouchableOpacity style={styles.actionbutton} >
                        <Text style={{ color: "#fff" }}>Post Signal</Text>
                        <View style={{ width: 10 }}></View>

                        <Ionicons name="add-outline" color="#fff" />
                  </TouchableOpacity>
                  <View style={{ width: 10 }}></View>
                  <TouchableOpacity style={styles.actionbutton}>
                        <Text style={{ color: "#fff" }}>Edit Profile</Text>
                        <View style={{ width: 10 }}></View>
                        <Ionicons name="create" color="#fff" />
                  </TouchableOpacity>
                  {/* <View style={{ width: 10 }}></View>
                  <TouchableOpacity style={styles.actionbutton}>
                        <Text style={{ color: "#fff" }}>Share Profile</Text>
                        <View style={{ width: 3 }}></View>
                        <Ionicons name="share-social-outline" color="#fff" />
                  </TouchableOpacity> */}
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
            paddingHorizontal: 10,
            paddingVertical: 5,
            backgroundColor: "#111827",
            borderRadius: 6,
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: "center"

      },
})

export default ActionButtonsForProvider;
