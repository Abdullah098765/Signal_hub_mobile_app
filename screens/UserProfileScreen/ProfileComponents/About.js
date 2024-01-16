import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = ({ about }) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>About</Text>
        <Text style={styles.description}>{about}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      marginTop:0,
    margin: 5,
    flexDirection: 'column',
//     marginHorizontal: 16,
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    padding: 8,
//     borderRadius: 8,
  },
  title: {
    fontSize: 18,
    color: '#111827',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  description: {
    marginTop: 2,
    fontSize: 14,
    color: '#4B5563',
  },
});

export default About;
