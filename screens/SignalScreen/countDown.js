import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useCountdown } from '../../hooks/useCountDown-timer';

const CountDown = ({ signal }) => {


      const [days, hours, minutes, seconds] = useCountdown(signal && signal.duration);

      return (
            <View style={styles.container}>
                  {days + hours + minutes + seconds > 0 ? (
                        <View style={styles.countdownContainer}>
                              <Text style={{ color: "#fff", fontSize: 18, fontWeight: 'bold', }}>{"Signal Will Expier In"}</Text>

                              <View style={{ flexDirection: "row", justifyContent: "space-around", width: "100%" }}>
                                    <View style={styles.timeNameCointainer}>
                                          <Text style={styles.countdownText}>{days}</Text>
                                          <Text style={styles.timeName}>{'Days'}</Text>
                                    </View>
                                    <View style={styles.timeNameCointainer}>
                                          <Text style={styles.countdownText}>{hours} </Text>
                                          <Text style={styles.timeName}>{'Hours'}</Text>
                                    </View>
                                    <View style={styles.timeNameCointainer}>
                                          <Text style={styles.countdownText}>{minutes} </Text>
                                          <Text style={styles.timeName}>{'Minutes'}</Text>
                                    </View>
                                    <View style={styles.timeNameCointainer}>
                                          <Text style={styles.countdownText}>{seconds} </Text>
                                          <Text style={styles.timeName}>{'Seconds'}</Text>
                                    </View>
                              </View>
                        </View>
                  ) : (
                        <View style={styles.expiredContainer}>
                              <Text style={styles.expiredText}>Warning: Signal has expired</Text>
                        </View>
                  )}
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            alignItems: 'center',
            marginBottom: 5

      },
      countdownContainer: {
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'black',
            alignContent: "center",
            alignItems: "center",
            padding: 10,
            // marginBottom: 3,
            width: "98%",
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            gap: 10
      },
      countdownText: {
            color: 'white',
            textAlign: 'center',
            // marginHorizontal: 5,
            fontSize: 20,
            fontWeight: 'bold'
      },
      expiredContainer: {
            flexDirection: 'column',
            justifyContent: 'center',
            backgroundColor: 'rgb(253 224 71)',
            alignContent: "center",
            alignItems: "center",
            padding: 20,
            // marginBottom: 3,
            width: "98%",
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            gap: 10
      },
      expiredText: {
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: "#000"
      },
      timeName: {
            color: "#fff"
      },
      timeNameCointainer: {
            alignItems: 'center',
      }
});

export default CountDown;
