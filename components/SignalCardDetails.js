import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SignalDetails = ({ signal }) => {
  return (
    <View style={styles.gridContainer}>
      <View style={styles.gridItem}>
        <Text style={styles.label}>Entry Price 1</Text>
        <Text style={styles.detail} >{signal.entry1}</Text>
      </View>
      <View style={styles.gridItem}>
        <Text style={styles.label}>Entry Price 2</Text>
        <Text style={styles.detail}>{signal.entry2}</Text>
      </View>
      <View style={styles.gridItem}>
        <Text style={styles.label}>Stop-Loss</Text>
        <Text style={styles.detail}>{signal.stopLoss}</Text>
      </View>
      <View style={styles.gridItem}>
        <Text style={styles.label}>Take-Profit 1</Text>
        <Text style={styles.detail}>{signal.takeProfit1}</Text>
      </View>
      <View style={styles.gridItem}>
        <Text style={styles.label}>Take-Profit 2</Text>
        <Text style={styles.detail}>{signal.takeProfit2}</Text>
      </View>
      <View style={styles.gridItem}>
        <Text style={styles.label}>Take-Profit 3</Text>
        <Text style={styles.detail}>{signal.takeProfit3}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%', // Adjust as per your requirement, this will make 2 columns
    marginBottom: 10, // Gap between rows
  },
  label: {
    color: '#666', // Text color similar to text-gray-600
    marginBottom: 5, // Space between label and value
  },
  detail: {
    color: '#000', // Text color similar to text-gray-600
  },
});

export default SignalDetails;
