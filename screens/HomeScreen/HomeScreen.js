import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, ActivityIndicator } from 'react-native';
import SignalCard from '../../components/MainComponents/card';
import { AppContext } from '../../context/AppContext';
import SkeletonCard from '../../components/SkeletonCard';

const HomeScreen = () => {
  const [signals, setSignals] = useState([]);
  const { page, handleScrollForSignals, isSignalsLoading, setIsSignalsLoading } = useContext(AppContext);

  const getSignals = () => {
    setIsSignalsLoading(true);

    var raw = JSON.stringify({
      skip: page
    });

    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow"
    };

    fetch("https://signal-hub.vercel.app/api/get-signals", requestOptions)
      .then(response => response.json())
      .then(newSignals => {
        setSignals(prevSignals => {
          // Check if each signal in newSignals already exists in prevSignals based on a specific condition
          let uniqueNewSignals = newSignals.filter(newSignal =>
            !prevSignals.some(prevSignal => prevSignal._id === newSignal._id)
          );

          let updatedSignals = prevSignals.concat(uniqueNewSignals);
          console.log("All Signals:", updatedSignals);
          return updatedSignals; // This value will be the new state
        });
        setIsSignalsLoading(false);
      })
      .catch(error => {
        console.log("Error fetching signals:", error);
        setIsSignalsLoading(false);
      });
  };
  useEffect(() => {
    getSignals();
  }, [page]);

  return (
    <ScrollView
      style={{ padding: 0, }}
      onScroll={({ nativeEvent }) => {
        handleScrollForSignals({ nativeEvent });
      }}
      // scrollEventThrottle={400}
      scrollEventThrottle={16}
    >
      <View style={{ marginTop: 36 }}>
        {signals.map((signal, index) => (
          <SignalCard signal={signal} key={signal._id} />
        ))}
        {isSignalsLoading && Array.from({ length: 3 }).map((_, index) => (
          <SkeletonCard key={index} />
        ))
        }
        {isSignalsLoading && <ActivityIndicator size={40} color={"#111827"} />}

      </View>
    </ScrollView>
  );
};

export default HomeScreen;