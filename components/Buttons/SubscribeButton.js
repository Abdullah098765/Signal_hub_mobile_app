import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import useAction from '../../hooks/useAction';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SubscribeButton = ({ targetUser_id, targetUserSubscribers }) => {
      const [subscribed, setSubscribed] = useState(false)
      const [isLoading, setIsLoading] = useState(false)

      const { user, isLoggedIn } = useAuth()
      const { handleSubscription } = useAction()
      const navigation = useNavigation();
      useEffect(() => {

            // setSubscribers(targetUser.Subscribers)

            if (targetUserSubscribers) {
                  if (targetUserSubscribers.includes(user?._id)) {
                        setSubscribed(true);
                        console.log('User is in subscribers array.');
                  } else
                        setSubscribed(false);

            }

      }, [targetUser_id, user?._id])

      return (
            <View style={styles.container}>
                  {!subscribed ? (
                        <TouchableOpacity
                              onPress={() => {
                                    if (isLoggedIn) {
                                          handleSubscription('subscribe', setIsLoading, user._id, targetUser_id, user.notificationPreferences.fcmToken, setSubscribed);
                                    } else {
                                          navigation.navigate("Login")
                                    }
                              }}
                              style={styles.subscribeButton}
                        >
                              <View style={styles.buttonContent}>
                                    <Text style={styles.buttonText}>
                                          {isLoading ? (
                                                <ActivityIndicator size="small" color="#fff" />

                                          ) : (
                                                <> <Ionicons name="person-add" />  Subscribe</>
                                          )}
                                    </Text>
                              </View>
                        </TouchableOpacity>
                  ) : (
                        <TouchableOpacity
                              onPress={() => handleSubscription('unsubscribe', setIsLoading, user._id, targetUser_id, user.notificationPreferences.fcmToken, setSubscribed)}
                              style={styles.unsubscribeButton}
                        >
                              <View style={styles.buttonContent}>
                                    <Text style={styles.buttonText}>
                                          {isLoading ? (
                                                <ActivityIndicator size="small" color="#fff" />

                                          ) : (
                                                <> <Ionicons name="person-remove" />  Unsubscribe</>
                                          )}
                                    </Text>
                              </View>
                        </TouchableOpacity>
                  )
                  }
            </View >
      );
};

const styles = StyleSheet.create({
      container: {
            flexDirection: 'row',
      },
      subscribeButton: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#111827',
            padding: 8,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
      },
      unsubscribeButton: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#b91c1c',
            padding: 8,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',

      },
      buttonContent: {
            flexDirection: 'row',
            alignItems: 'center',
      },
      buttonText: {
            color: 'white',
            fontSize: 16,

      },

});

export default SubscribeButton;
