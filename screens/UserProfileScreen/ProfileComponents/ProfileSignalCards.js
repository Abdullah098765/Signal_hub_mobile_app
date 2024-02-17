import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
import { formatDistanceToNow } from 'date-fns';  // Make sure to import this if not already done
import SignalCard from '../../../components/MainComponents/card';
import SkeletonCard from '../../../components/SkeletonCard';
import { AppContext } from '../../../context/AppContext';

const ProfileSignalCards = ({ currentprofileRoute, user_id }) => {

      const [signals, setSignals] = useState([])
      const { page, setPage, isSignalsLoading, setIsSignalsLoading, iseSignalsEnd, setiseSignalsEnd } = useContext(AppContext)
      useEffect(() => {

            const fetchData = async () => {
                  setIsSignalsLoading(true)

                  try {
                        // Replace 'yourId' with the actual value of _id

                        const response = await fetch('https://signal-hub.vercel.app/api/get-profile-signal-data', {
                              method: 'POST',
                              body: JSON.stringify({
                                    currentprofileRoute,
                                    _id: user_id,
                                    page: page,
                                    isOnlyCount: false
                              }),
                        });

                        if (response.ok) {
                              const data = await response.json();
                              if (!signals) {
                                    setSignals([])
                              }
                              if (Array.isArray(data)) {
                                    setSignals(prevSignals => {
                                          // Concatenate the new data to the existing signals array
                                          if (data.length === 0) { setiseSignalsEnd(true) }
                                          const updatedSignals = [...prevSignals, ...data];

                                          // Use a set to efficiently remove duplicates based on a specific condition
                                          const uniqueSignals = Array.from(new Set(updatedSignals.map(signal => signal._id)))
                                                .map(_id => updatedSignals.find(signal => signal._id === _id));

                                          return uniqueSignals;
                                    });
                                    setIsSignalsLoading(false)

                              } else {
                                    setIsSignalsLoading(false)
                                    // Handle the case where the data is not an array, log an error, or take appropriate action.
                              }
                              console.log(data);
                              setIsSignalsLoading(false)

                        } else {
                              console.error('Error fetching data');
                        }
                  } catch (error) {
                        console.error('Error fetching data:', error);
                  }
            };

            if (!iseSignalsEnd) {
                  fetchData();
            }
      }, [page, currentprofileRoute]);

      const containerRef = useRef(null);
      useEffect(() => {
            const handleScroll = () => {
                  const container = containerRef.current;

                  if (container) {
                        const isAtBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;

                        if (isAtBottom) {
                              console.log('Scrolled to the bottom!');
                              setPage((prevPage) => prevPage + 1)
                        }
                  }
            };

            const container = containerRef.current;

            if (container) {
                  container.addEventListener('scroll', handleScroll);

                  return () => {
                        container.removeEventListener('scroll', handleScroll);
                  };
            }
      }, []);
      useEffect(() => {
            setSignals([])
            setPage(1)
            setiseSignalsEnd(false)
      }, [currentprofileRoute]);

      return (
            <View style={styles.container}>
                  {signals?.length === 0 && !isSignalsLoading ? (
                        <Text style={styles.noSignalsText}>No signals available.</Text>
                  ) : (
                        <View style={styles.cardContainer}>
                              {signals[0]?._id && signals?.map((signal, index) => (
                                    <SignalCard key={index} signal={signal} />
                              ))}
                        </View>
                  )}
                  {(isSignalsLoading) && <><SkeletonCard /><SkeletonCard /><SkeletonCard /></>}
                  {(isSignalsLoading) && <ActivityIndicator size={40} color={"#111827"} />}
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            // backgroundColor: 'white',
            // padding: 
            marginTop: 0,
            margin: 5,
            marginBottom: 45

      },
      noSignalsText: {
            textAlign: 'center',
            paddingVertical: 200,

            color: 'gray',
            backgroundColor: "#fcfcfc",
            fontSize: 17
      },
      cardContainer: {

            // flexDirection: 'row',
            // flexWrap: 'wrap',
            // justifyContent: 'space-between',
            // gap: 4,
      },
      card: {
            backgroundColor: 'white',
            padding: 8,
            marginBottom: 8,
            width: '30%',  // Adjust the width as per your design
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
      },
      header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
      },
      signalTypeBadge: {
            paddingVertical: 2,
            paddingHorizontal: 4,
            borderRadius: 4,
      },
      signalTypeText: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'bold',
      },
      timestamp: {
            color: 'gray',
            fontSize: 12,
      },
      pairContainer: {
            marginBottom: 8,
      },
      pairText: {
            fontSize: 16,
            fontWeight: 'bold',
      },
      signalStrengthText: {
            fontSize: 12,
      },
      explanationText: {
            fontSize: 14,
            marginBottom: 8,
      },
      metricsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
      },
      commentsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
      },
      commentsText: {
            fontSize: 12,
            color: 'gray',
      },
      followersText: {
            fontSize: 12,
            color: 'gray',
      },
      buttonsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
      },
      button: {
            backgroundColor: 'gray',
            padding: 8,
            borderRadius: 8,
      },
      buttonText: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'bold',
      },
});

export default ProfileSignalCards;
