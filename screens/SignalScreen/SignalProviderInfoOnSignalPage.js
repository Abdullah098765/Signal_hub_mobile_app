import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../../hooks/useAuth';

const SignalProviderInfoOnSignalPage = ({ signal, user, router, setRouterLoading }) => {

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => {
            // setRouterLoading(true);
            // router.push('/signal-provider/' + signal.signalProvider.fIdHash);
          }}
        >
          <Image
            style={styles.profilePicture}
            source={{ uri: signal.signalProvider.profilePicture }}
          />
          <View>
            <Text style={styles.displayName}>{signal.signalProvider.displayName}</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.statsContainer}>
          <View style={styles.signalInfo}>
            <Text style={styles.signalInfoText}>
              {signal.signalProvider.goodSignals.length} Good Signals
            </Text>
          </View>
          <View style={styles.signalInfo}>
            <Text style={styles.signalInfoText}>
              {signal.signalProvider.badSignals.length} Bad Signals
            </Text>
          </View>
          <View style={styles.signalInfo}>
            <Text style={styles.signalInfoText}>
              {signal.signalProvider.Subscribers.length} Subscribers
            </Text>
          </View>
          <View style={styles.signalInfo}>
            <Text style={styles.signalInfoText}>
              {signal.signalProvider.reviews.length} Reviews
            </Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          {/* {signal.signalProvider._id !== user._id ? (
            <Subscribe targetUser={signal.signalProvider} />
          ) : (
           
          )} */}

          <View style={{ justifyContent: "flex-end", alignItems: "flex-end", flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                // setRouterLoading(true);
                // router.push('/profile');
              }}
              style={styles.profileButton}
            >
              <Text style={styles.profileButtonText}>
                <Ionicons name="person" /> Go To Profile
              </Text>
            </TouchableOpacity>
          </View>
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

    alignItems: "center",
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  profilePicture: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 8,
  },
  displayName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: "#111827"
  },
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
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  profileButton: {
    flexDirection: 'row',
    backgroundColor: '#b91c1c',
    padding: 8,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileButtonText: {
    color: 'white',
  },
});

export default SignalProviderInfoOnSignalPage;
