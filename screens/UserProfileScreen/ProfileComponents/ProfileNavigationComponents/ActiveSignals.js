import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, ActivityIndicator } from 'react-native';
import useGetData from '../../../../hooks/useGetData';
import SignalCard from '../../../../components/MainComponents/card';
import SkeletonCard from '../../../../components/SkeletonCard';
import { AppContext } from '../../../../context/AppContext';

const ActiveSignals = ({ currentprofileRoute, targetUser }) => {
  const [signals, setSignals] = useState([])
  const { page, setPage, isSignalsLoading, setIsSignalsLoading, iseSignalsEnd, setiseSignalsEnd } = useContext(AppContext)
  const { getProfileSignals } = useGetData()
  useEffect(() => {
    async function getSignals() {
      await getProfileSignals(setIsSignalsLoading, currentprofileRoute, targetUser?._id, page, setSignals, setiseSignalsEnd,signals)
    }
    getSignals()
  }, [page]);

  return (
    <View >
      {(!signals[0]?._id && iseSignalsEnd) && <Text style={styles.noSignalsText}>No signals available.</Text>}

      {signals[0]?._id && signals?.map((signal, index) => (
        <SignalCard key={index} signal={signal} />
      ))}

      {(isSignalsLoading) && <><SkeletonCard /><SkeletonCard /><SkeletonCard /></>}
      {(isSignalsLoading) && <ActivityIndicator size={40} color={"#111827"} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
    height: 100
  },
});

export default ActiveSignals;
