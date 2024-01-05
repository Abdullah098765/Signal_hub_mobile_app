import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import SignalCard from '../../components/MainComponents/card';

const HomeScreen = () => {
  const [signals, setSignals] = useState([]);
  const [isSignalsLoading, setIsSignalsLoading] = useState(false);

  const getSignals = () => {
    setIsSignalsLoading(true);

    var raw = JSON.stringify({
      skip: signals.length
    });

    var requestOptions = {
      method: "POST",
      body: raw,
      redirect: "follow"
    };

    fetch("https://signal-hub.vercel.app/api/get-signals", requestOptions)
      .then(response => response.json())
      .then(newSignals => {
        setSignals(prevSignals => [...prevSignals, ...newSignals]);
        setIsSignalsLoading(false);
      })
      .catch(error => {
        console.log("Error fetching signals:", error);
        setIsSignalsLoading(false);
      });
  };

  const handleScroll = (event) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;
    
    if (isCloseToBottom && !isSignalsLoading) {
      getSignals();
    }
  };

  useEffect(() => {
    getSignals();
  }, []);

  return (
    <ScrollView 
      style={{ padding: 0 }}
      onScroll={({ nativeEvent }) => {
        handleScroll({ nativeEvent });
      }}
      scrollEventThrottle={400} // Adjust this value based on your preference
    >
      {signals.map((signal) => (
        <SignalCard signal={signal} key={signal._id} />
      ))}
      
      {isSignalsLoading && <ActivityIndicator size="large" color="#0000ff" />}
    </ScrollView>
  );
};

export default HomeScreen;
