import React, { useEffect } from 'react';
import { View, StyleSheet, Text } from 'react-native';

const AllSignals = (props) => {
  useEffect(() => {
    console.log("Pops: ", props);
  }, [props]);

  return (
<View style={{  height: 100 }}>
      <Text style={{ color: "#000" }}>AllSignals</Text>
      <Text style={{ color: "#000" }}>AllSignals</Text>
      <Text style={{ color: "#000" }}>AllSignals</Text>
      <Text style={{ color: "#000" }}>AllSignals</Text>
      <Text style={{ color: "#000" }}>AllSignals</Text>
      <Text style={{ color: "#000" }}>AllSignals</Text>
      <Text style={{ color: "#000" }}>AllSignals</Text>
      <Text style={{ color: "#000" }}>AllSignals</Text>
      <Text style={{ color: "#000" }}>AllSignals</Text>
      <Text style={{ color: "#000" }}>AllSignals</Text>
      <Text style={{ color: "#000" }}>AllSignals</Text>
      <Text style={{ color: "#000" }}>AllSignals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
    height: 100
  },
});

export default AllSignals;
