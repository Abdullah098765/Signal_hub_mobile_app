import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import SubscribedCard from './subscribedCard';
import { useAuth } from '../../hooks/useAuth';
import { AppContext } from '../../context/AppContext';

const Subscriptions = () => {
      const { handleScroll } = useContext(AppContext);
      const [subscriptions, setSubscriptions] = useState();
      const [dataLoading, setDataLoading] = useState(true);
      const [loggedIn, setLoggedIn] = useState(true);
      useEffect(() => {
            const fetchData = async () => {
                  try {
                        // Make a POST request using the fetch API
                        const response = await fetch('https://signal-hub.vercel.app/api/getSubscriptions', {
                              method: 'POST',
                              headers: {
                                    'Content-Type': 'application/json',
                              },
                              body: JSON.stringify({ subscriberId: user._id }),
                        });

                        // Check if the response is successful (status code 2xx)
                        if (response.ok) {
                              const data = await response.json();
                              setSubscriptions(data);

                              setTimeout(() => {
                                    setDataLoading(false);
                              }, 2000);
                              console.log(data);
                        } else {
                              console.error('Failed to fetch subscribed data');
                        }
                  } catch (error) {
                        console.error('Error fetching subscribed data:', error);
                  }
            };

            // Check if the user is available before making the request
            if (user) {
                  fetchData();
            }
      }, [user]);

      const { user } = useAuth()
      return (
            <ScrollView onScroll={({ nativeEvent }) => {
                  handleScroll({ nativeEvent });
            }}
                  // scrollEventThrottle={400}
                  scrollEventThrottle={16}
            >
                  <View style={{ height: 40, }}></View>
                  {subscriptions?.map((subscription) => (
                        <SubscribedCard user={subscription} key={subscription._id} />
                  ))}

            </ScrollView>
      );
}

const styles = StyleSheet.create({})

export default Subscriptions;
