import React, { useContext } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import SubscribedCard from './subscribedCard';
import { useAuth } from '../../hooks/useAuth';
import { AppContext } from '../../context/AppContext';

const Subscriptions = () => {
      const { handleScroll } = useContext(AppContext);

      const { user } = useAuth()
      return (
            <ScrollView onScroll={({ nativeEvent }) => {
                  handleScroll({ nativeEvent });
            }}
                  // scrollEventThrottle={400}
                  scrollEventThrottle={16}
            >
                  <View style={{ height: 40, }}></View>
                  <SubscribedCard user={user} />
                  <SubscribedCard user={user} />
                  <SubscribedCard user={user} />
                  <SubscribedCard user={user} />
                  <SubscribedCard user={user} />
                  <SubscribedCard user={user} />

            </ScrollView>
      );
}

const styles = StyleSheet.create({})

export default Subscriptions;
