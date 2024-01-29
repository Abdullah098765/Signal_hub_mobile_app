import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../../hooks/useAuth';
import ProviderCareer from '../../components/MainComponents/ProviderCareer.js'
import SubscribeButton from '../../components/Buttons/SubscribeButton.js';
import WriteAReviewButton from '../../components/Buttons/WriteAReviewButton.js';
import ActionButtonsForUser from '../UserProfileScreen/ProfileComponents/ActionButtonsForUser.js';

const SignalProviderInfoOnSignalPage = ({ signal, user, router, setRouterLoading }) => {
  const [IsThisSignalProvidedByMe, setIsThisSignalProvidedByMe] = useState(false);
  useEffect(() => {

    if (signal.signalProvider._id === user._id) {
      setIsThisSignalProvidedByMe(true)
    }

  }, [signal, user]);

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

        <ProviderCareer signalProvider={signal.signalProvider} />



        <View style={styles.actionsContainer}>
          {/* {signal.signalProvider._id !== user._id ? (
            <Subscribe targetUser={signal.signalProvider} />
          ) : (
           
          )} */}

          <View style={{ justifyContent: "flex-end", alignItems: "flex-end", flex: 1 }}>
            {!IsThisSignalProvidedByMe ? <ActionButtonsForUser targetUser={signal.signalProvider}/>
              : <TouchableOpacity
                onPress={() => {
                  // setRouterLoading(true);
                  // router.push('/profile');
                }}
                style={styles.profileButton}
              >

                <Text style={styles.profileButtonText}>
                  <Ionicons name="person" /> Go To Profile
                </Text>
              </TouchableOpacity>}
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
    justifyContent: 'center',
    flex: 1,
    width: "100%"
  },
  profileButtonText: {
    color: 'white',
  },
});

export default SignalProviderInfoOnSignalPage;
