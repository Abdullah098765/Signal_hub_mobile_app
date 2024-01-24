import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCountdown } from '../../hooks/useCountDown-timer';

const CountdownClock = ({ duration }) => {
      const [days, hours, minutes, seconds] = useCountdown(duration);

      return (
            <View style={styles.countdownContainer}>
                  <Text style={styles.countdownText}>{`${days}d`}</Text>
                  <Text style={styles.countdownText}>{`${hours}h`}</Text>
                  <Text style={styles.countdownText}>{`${minutes}m`}</Text>
                  <Text style={styles.countdownText}>{`${seconds}s`}</Text>
            </View>
      );
};

const styles = StyleSheet.create({
      countdownContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#e5e5e5',
            padding: 8,
            borderRadius: 8,
            width: "100%",
            justifyContent:"space-evenly"
      },
      countdownText: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#333',
      },
});

export default CountdownClock;
