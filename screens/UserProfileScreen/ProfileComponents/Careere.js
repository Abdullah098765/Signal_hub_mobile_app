import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const Careere = ({ user }) => {
      return (
            <View style={styles.container}>

                  <Text style={styles.title}>Careere</Text>

                  <View style={styles.gridContainer}>
                        <View style={styles.gridItem}>
                              <View style={styles.gridItemContent}>
                                    <View style={[styles.iconContainer, { borderWidth: 1, borderColor: 'rgb(79, 70, 229)' }]}>
                                          <Ionicons name="trail-sign-outline" color={'rgb(79, 70, 229)'} size={22} />
                                    </View>
                                    <View style={styles.textContainer}>
                                          <Text style={styles.textBold}>Total Signals</Text>
                                          {/* <Text style={styles.textSecondary}>Lifetime</Text> */}
                                    </View>
                                    <Text style={[styles.statText, { color: 'rgb(79, 70, 229)' }]}>
                                          {(user.neutralSignals || user.goodSignals || user.badSignals) &&
                                                user.neutralSignals.length + user.goodSignals.length + user.badSignals.length}
                                    </Text>
                              </View>
                        </View>
                  </View>
                  <View style={styles.gridContainer}>
                        <View style={styles.gridItem}>
                              <View style={styles.gridItemContent}>
                                    <View style={[styles.iconContainer, { borderWidth: 1, borderColor: 'green' }]}>
                                          <Ionicons name="checkmark" color={'green'} size={22} />
                                    </View>
                                    <View style={styles.textContainer}>
                                          <Text style={styles.textBold}>Good Signals</Text>
                                          {/* <Text style={styles.textSecondary}>Lifetime</Text> */}
                                    </View>
                                    <Text style={[styles.statText, { color: 'green' }]}>
                                          {(user.neutralSignals || user.goodSignals || user.badSignals) &&
                                                user.neutralSignals.length + user.goodSignals.length + user.badSignals.length}
                                    </Text>
                              </View>
                        </View>
                  </View>
                  <View style={styles.gridContainer}>
                        <View style={styles.gridItem}>
                              <View style={styles.gridItemContent}>
                                    <View style={[styles.iconContainer, { borderWidth: 1, borderColor: 'green' }]}>
                                          <Ionicons name="checkmark" color={'green'} size={22} />
                                    </View>
                                    <View style={styles.textContainer}>
                                          <Text style={styles.textBold}>Good Signals</Text>
                                          {/* <Text style={styles.textSecondary}>Lifetime</Text> */}
                                    </View>
                                    <Text style={[styles.statText, { color: 'green' }]}>
                                          {(user.neutralSignals || user.goodSignals || user.badSignals) &&
                                                user.neutralSignals.length + user.goodSignals.length + user.badSignals.length}
                                    </Text>
                              </View>
                        </View>
                  </View>
                  <View style={styles.gridContainer}>
                        <View style={styles.gridItem}>
                              <View style={styles.gridItemContent}>
                                    <View style={[styles.iconContainer, { borderWidth: 1, borderColor: 'green' }]}>
                                          <Ionicons name="checkmark" color={'green'} size={22} />
                                    </View>
                                    <View style={styles.textContainer}>
                                          <Text style={styles.textBold}>Good Signals</Text>
                                          {/* <Text style={styles.textSecondary}>Lifetime</Text> */}
                                    </View>
                                    <Text style={[styles.statText, { color: 'green' }]}>
                                          {(user.neutralSignals || user.goodSignals || user.badSignals) &&
                                                user.neutralSignals.length + user.goodSignals.length + user.badSignals.length}
                                    </Text>
                              </View>
                        </View>
                  </View>
                  <View style={styles.gridContainer}>
                        <View style={styles.gridItem}>
                              <View style={styles.gridItemContent}>
                                    <View style={[styles.iconContainer, { borderWidth: 1, borderColor: 'green' }]}>
                                          <Ionicons name="checkmark" color={'green'} size={22} />
                                    </View>
                                    <View style={styles.textContainer}>
                                          <Text style={styles.textBold}>Good Signals</Text>
                                          {/* <Text style={styles.textSecondary}>Lifetime</Text> */}
                                    </View>
                                    <Text style={[styles.statText, { color: 'green' }]}>
                                          {(user.neutralSignals || user.goodSignals || user.badSignals) &&
                                                user.neutralSignals.length + user.goodSignals.length + user.badSignals.length}
                                    </Text>
                              </View>
                        </View>
                  </View>
                  <View style={styles.gridContainer}>
                        <View style={styles.gridItem}>
                              <View style={styles.gridItemContent}>
                                    <View style={[styles.iconContainer, { borderWidth: 1, borderColor: 'green' }]}>
                                          <Ionicons name="checkmark" color={'green'} size={22} />
                                    </View>
                                    <View style={styles.textContainer}>
                                          <Text style={styles.textBold}>Good Signals</Text>
                                          {/* <Text style={styles.textSecondary}>Lifetime</Text> */}
                                    </View>
                                    <Text style={[styles.statText, { color: 'green' }]}>
                                          {(user.neutralSignals || user.goodSignals || user.badSignals) &&
                                                user.neutralSignals.length + user.goodSignals.length + user.badSignals.length}
                                    </Text>
                              </View>
                        </View>
                  </View>

            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: 'white',
            borderRadius: 8,
            margin: 5,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
      },
      title: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
      },
      gridContainer: {
            marginTop: 15,
      },
      gridItem: {
            padding: 15,
            backgroundColor: '#f0f0f0',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#ddd',
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 2,
      },
      gridItemContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            // marginBottom: 10,
      },
      iconContainer: {
            width: 40,
            height: 40,
            backgroundColor: '#d8d8d8',
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',

      },

      textContainer: {
            flex: 1,
            marginLeft: 10,
            alignContent: "center",
            // alignItems:"center",
            justifyContent: "center"
      },
      textBold: {
            fontSize: 16,
            fontWeight: 'bold',
            color: '#333',
      },
      textSecondary: {
            fontSize: 12,
            color: '#666',
      },
      statContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
      },
      circle: {
            width: 30,
            height: 30,
            borderRadius: 15,
            backgroundColor: '#4a90e2',
            justifyContent: 'center',
            alignItems: 'center',
      },
      statTextContainer: {
            flex: 1,
            alignItems: 'flex-end',
      },
      statText: {
            fontSize: 24,
            fontWeight: 'bold',
      },
});

export default Careere;
