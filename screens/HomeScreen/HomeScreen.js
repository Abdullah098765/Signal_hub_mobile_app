import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import SignalCard from '../../components/MainComponents/card';
import { AppContext } from '../../context/AppContext';
import { useRoute } from '@react-navigation/native';

const HomeScreen = () => {
  const [signals, setSignals] = useState([]);
  const [isSignalsLoading, setIsSignalsLoading] = useState(false);
  const { isLoggedIn, user, setUser, removeUidFromStorage, saveUidToStorage,
    scrollY, isTabBarVisible, setTabBarVisible,
    setScrollY,
    handleScroll,
    navbarTranslateY } = useContext(AppContext);
  const route = useRoute()
const [page, setPage] = useState(1);
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
        setSignals(prevSignals => [...prevSignals, ...newSignals]);
        setIsSignalsLoading(false);
      })
      .catch(error => {
        console.log("Error fetching signals:", error);
        setIsSignalsLoading(false);
      });
  };

  const handleScrollForSignals = (event) => {
    handleScroll(event)

    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;

    const isCloseToBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - 20;

    if (isCloseToBottom && !isSignalsLoading) {
      setPage((prevPage) => prevPage + 1);
    }
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
        {isSignalsLoading && <ActivityIndicator size="large" color="#0000ff" />}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
