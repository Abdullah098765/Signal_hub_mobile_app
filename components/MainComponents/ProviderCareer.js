import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const ProviderCareer = ({ signalProvider }) => {
      return (
            <View style={styles.statsContainer}>
                  <View style={styles.signalInfo}>
                        <Text style={styles.signalInfoText}>
                              {signalProvider.goodSignals.length} Good Signals
                        </Text>
                  </View>
                  <View style={styles.signalInfo}>
                        <Text style={styles.signalInfoText}>
                              {signalProvider.badSignals.length} Bad Signals
                        </Text>
                  </View>
                  <View style={styles.signalInfo}>
                        <Text style={styles.signalInfoText}>
                              {signalProvider.Subscribers.length} Subscribers
                        </Text>
                  </View>
                  <View style={styles.signalInfo}>
                        <Text style={styles.signalInfoText}>
                              {signalProvider.reviews.length} Reviews
                        </Text>
                  </View>
            </View>
      );
}

const styles = StyleSheet.create({
      statsContainer: {
            flexDirection: 'column',
            justifyContent: 'space-around',
            marginBottom: 16,
            width: "100%",
            gap: 8
      },
      signalInfo: {
            backgroundColor: '#E5E7EB',
            padding: 4,
            paddingHorizontal: 8,
            borderRadius: 6,
            alignItems: "center"
            // marginHorizontal: 40
      },
      signalInfoText: {
            fontSize: 12,
            color: 'black',
      },
})

export default ProviderCareer;
