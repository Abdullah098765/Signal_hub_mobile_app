import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import CountdownClock from './CountdownClock'; // Assuming you have a CountdownClock component
import GoodBadButtons from './GoodBadButtons.js'; // Assuming you have a GoodBadButtons component
import { useNavigation } from '@react-navigation/native';

const FollowingSignalCard = ({ signal }) => {
      const navigation = useNavigation(); // React Navigation hook
      const handlePress = () => {
            navigation.navigate('Signal', { signalId: signal._id });
      };

      return (
            <TouchableOpacity
                  key={signal._id}
                  style={styles.signalCard}
                  onPress={handlePress}
            >

                  <View style={styles.addInfoContainer}>
                        <Text style={styles.pairText}>{signal.pair}</Text>

                        <View
                              style={{
                                    backgroundColor: signal.longOrShort === 'Long' ? 'green' : '#ff0000',
                                    ...styles.signalTypeBadge,
                              }}
                        >
                              <Text style={styles.signalTypeText}>
                                    {signal.longOrShort === 'Long' ? 'Buy' : 'Sell'}
                              </Text>
                        </View>


                  </View>
                  <View style={styles.entryEtcContainer}>
                        <Text style={styles.entryInfoText}>
                              Entry 1: {signal.entry1}
                        </Text>
                        <Text style={styles.entryInfoText}>
                              Entry 2: {signal.entry2}
                        </Text>
                        <Text style={styles.entryInfoText}>
                              Stop Loss: {signal.stopLoss}
                        </Text>
                        <Text style={styles.entryInfoText}>
                              Take Profit: {signal.takeProfit1}
                        </Text>
                  </View>


                  {signal.duration >= new Date().getTime() ? (

                        <CountdownClock duration={signal.duration} />

                  ) : (
                        <GoodBadButtons signal={signal} />
                  )}
                  <TouchableOpacity
                        style={styles.signalProviderContainer}
                        onPress={() => navigation.navigate('UserProfile', { fIdHash: signal.signalProvider.fIdHash })}
                  >
                        <Image
                              source={{ uri: signal.signalProvider.profilePicture }}
                              style={styles.profilePicture}
                        />
                        <Text style={styles.displayName}>{signal.signalProvider.displayName}</Text>
                  </TouchableOpacity>

            </TouchableOpacity>
      );
};

const styles = StyleSheet.create({
      signalCard: {
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#11827',
            // borderRadius: 8,
            padding: 16,
            margin: 2,
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: 10
      },
      signalTypeBadge: {
            padding: 4,
            borderRadius: 4,
      },
      signalTypeText: {
            color: '#fff',
            fontSize: 12,
            fontWeight: 'bold',
      },
      pairText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
      },
      entryInfoText: {
            fontSize: 14,
            color: '#555',
            width: "100%",
            textAlign: 'center'
      },
      signalProviderContainer: {
            flexDirection: 'row',
            alignItems: 'center',
      },
      profilePicture: {
            width: 30,
            height: 30,
            borderRadius: 15,
            marginRight: 8,
      },
      displayName: {
            fontSize: 14,
            fontWeight: 'bold',
            color: '#333',
      },
      durationText: {
            fontSize: 14,
            color: '#555',
      },
      detailsButton: {
            backgroundColor: '#333',
            padding: 8,
            borderRadius: 8,
      },
      detailsButtonText: {
            color: '#fff',
            fontWeight: 'bold',
      },
      addInfoContainer: {
            flexDirection: "row",
            gap: 10,
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%"
      },
      entryEtcContainer: {
            flexDirection: "row",
            justifyContent: 'space-around'
      }
});

export default FollowingSignalCard;
