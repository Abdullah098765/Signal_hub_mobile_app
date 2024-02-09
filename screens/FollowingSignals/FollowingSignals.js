import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { AppContext } from '../../context/AppContext';
import FollowingSignalCard from './FollowingSignalCard';
import { useAuth } from '../../hooks/useAuth';

const FollowingSignals = () => {
      const { handleScroll } = useContext(AppContext);
      const [followedSignals, setFollowedSignals] = useState();
      const { user } = useAuth()
      useEffect(() => {

            var myHeaders = new Headers();


            var raw = JSON.stringify({
                  'userId': user?._id
            });

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };
            fetch("https://signal-hub.vercel.app/api/followed-signals", requestOptions)
                  .then(response => response.text())
                  .then(result => {
                        setFollowedSignals(JSON.parse(result))
                        //   setDataLoading(false)
                        // console.log(JSON.parse(result));
                  }
                  )
                  .catch(error => console.log('error', error));


      }, [user]);
      return (
            <ScrollView
                  onScroll={({ nativeEvent }) => {
                        handleScroll({ nativeEvent });
                  }}
                  // scrollEventThrottle={400}
                  scrollEventThrottle={16}
            >
                  <View style={{ height: 40, }}></View>
                  {followedSignals && followedSignals.map((signal) => <FollowingSignalCard signal={signal} key={signal._id}/>)}



            </ScrollView>
      );
}

const styles = StyleSheet.create({})

export default FollowingSignals;
