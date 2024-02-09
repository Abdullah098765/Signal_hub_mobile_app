import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CountDown from './countDown.js'
import MainInfo from './mainInfo.js'
import AdditionalInfo from './AdditionalInfo.js'
import SignalProviderInfoOnSignalPage from './SignalProviderInfoOnSignalPage.js'
import { AppContext } from '../../context/AppContext.js';
import { useAuth } from '../../hooks/useAuth.js';
import Reviews from '../UserProfileScreen/ProfileComponents/Reviews.js';
import CommenSection from './CommentSection.js';
import Skeleton from "../../components/SkeletonPage.js"
import ActionButtons from "./ActionButtons.js"


const SignalScreen = ({ route }) => {

      const { handleScroll } = useContext(AppContext);
      const { user } = useAuth()
      const { signalId } = route.params;
      const [signal, setSignal] = useState()

      const getSignal = () => {
            var myHeaders = new Headers();
            // myHeaders.append("a", "dni");
            // myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                  "signalId": signalId
            });

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };

            fetch("https://signal-hub.vercel.app/api/get-signal", requestOptions)
                  .then(response => response.text())
                  .then(result => {
                        setSignal(JSON.parse(result))
                  })
                  .catch(error => console.log('error', error));
      };
      useEffect(() => {
            getSignal()

      }, [signalId]);

      if (!signal) return <Skeleton />
      return (
            <ScrollView style={{ paddingTop: 45 }}

                  onScroll={({ nativeEvent }) => {
                        handleScroll({ nativeEvent });
                  }}
                  // scrollEventThrottle={400}
                  scrollEventThrottle={16}
            >
                  <CountDown signal={signal} />
                  <MainInfo signal={signal} />
                  
                  <AdditionalInfo signal={signal} />
                  <SignalProviderInfoOnSignalPage user={user} signal={signal} />
                  <CommenSection signal={signal}user={user}  />
                  <View style={{ height: 30 }}></View>

            </ScrollView>
      );
}

const styles = StyleSheet.create({})

export default SignalScreen;
