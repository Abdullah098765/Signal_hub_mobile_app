import { formatDistanceToNow } from 'date-fns';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MainInfo = ({ signal }) => {
      return (
            <View style={styles.container}>
                  <View style={styles.card}>
                        <View style={styles.header}>
                              <View
                                    style={[
                                          styles.label,
                                          { backgroundColor: signal.longOrShort === 'Long' ? '#22c55e' : '#EF4444' },
                                    ]}
                              >
                                    <Text style={styles.labelText}>{signal.longOrShort === 'Long' ? 'Buy' : 'Sell'}</Text>
                              </View>

                              <Text style={styles.timestamp}>
                                    {formatDistanceToNow(new Date(signal.createdAt), { addSuffix: true })}
                              </Text>
                        </View>

                        <View style={styles.details}>
                              <Text style={styles.pair}>{signal.pair}</Text>

                              <Text style={styles.heading}>Explanation</Text>
                              <Text style={styles.explanation}>{signal.explanation}</Text>
                        </View>
                  </View>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
      },
      card: {
            width: '98%',
            backgroundColor: 'white',
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            padding: 16,
            marginBottom: 5,
      },
      header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
      },
      label: {
            paddingVertical: 4,
            paddingHorizontal: 8,
            borderRadius: 4,
      },
      labelText: {
            color: 'white',
            fontWeight: 'bold',
            fontSize: 12,
      },
      timestamp: {
            color: '#6B7280',
            fontSize: 12,
      },
      details: {},
      pair: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 8,
            borderBottomWidth: 2,
            borderBottomColor: 'black',
            color: "#111827",
      },
      heading: {
            fontSize: 18,
            fontWeight: 'bold',
            marginTop: 16,
            marginBottom: 8,
            color: "#111827",

      },
      explanation: {
            color: '#6B7280',
            fontSize: 16,
      },
});

export default MainInfo;
