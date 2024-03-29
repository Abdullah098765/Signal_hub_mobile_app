import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileHeader from './ProfileComponents/ProfileHeader';
import Careere from './ProfileComponents/Careere.js';
import UserInfoSection from './ProfileComponents/UserInfoSection.js';
import SectionNavigate from './ProfileComponents/SectionNavigate.js';
import Sections from './ProfileComponents/Sections.js';
import { AppContext } from '../../context/AppContext.js';
import { useRoute } from '@react-navigation/native';
import SignalPageSkeleton from '../../components/SkeletonPage.js';


const UserProfileComponent = ({ }) => {

      const { user, getUser } = useAuth()
      const [_user, set_User] = useState();

      const router = useRoute()
      const [isMyProfile, setIsMyProfile] = useState(true);
      const { scrollToBottom, currentProfileRoute, setCurrentProfileRoute, scrollViewRef, handleScrollForSignals } = useContext(AppContext);


      const getTargetUser = (pid) => {
            var myHeaders = new Headers();
            var raw = JSON.stringify({
                  "uid": pid
            });

            var requestOptions = {
                  method: 'POST',
                  headers: myHeaders,
                  body: raw,
                  redirect: 'follow'
            };

            fetch("https://signal-hub.vercel.app/api/get-user", requestOptions)
                  .then(response => response.text())
                  .then(result => {
                        set_User(JSON.parse(result))

                  })
                  .catch(error => Alert.alert("Can't get user"));

      };


      useEffect(() => {

            async function runUseEffect(params) {
                  set_User(null)
                  if (router?.params?.fIdHash === user?.fIdHash) {
                        console.log('My Profile is True');
                        await getUser()
                        setIsMyProfile(true)
                        set_User(user)
                  }
                  else if (!router.params) {
                        console.log('My Page');
                        setIsMyProfile(true)
                        set_User(user)
                  }
                  else {
                        console.log('My Profile is false');
                        setIsMyProfile(false)
                        getTargetUser(router.params.fIdHash)
                  }

            }
            runUseEffect()
      }, [router, user]);

      useEffect(() => {

            if (router?.params?.writeAReview && !isMyProfile) {
                  console.log('writeAReview', router?.params?.writeAReview);

                  scrollToBottom()
                  setCurrentProfileRoute("Reviews")
                  // setIsMyProfile(false)
                  // getTargetUser(router.params.fIdHash)
            }

      }, [scrollViewRef, _user]);


      if (!_user?._id) return <SignalPageSkeleton />
      // if (!user) return <SignalPageSkeleton />

      return (
            <View style={{ padding: 5, backgroundColor: "#e5e7eb", }}>
                  <ScrollView ref={scrollViewRef} style={{ paddingTop: 40 }} onScroll={({ nativeEvent }) => {
                        handleScrollForSignals({ nativeEvent });
                  }} scrollEventThrottle={16}>
                        <ProfileHeader isMyProfile={isMyProfile} user={_user} />
                        <Careere isMyProfile={isMyProfile} user={_user} />
                        <UserInfoSection isMyProfile={isMyProfile} personalInformation={_user.personalInfo} />
                        <SectionNavigate isMyProfile={isMyProfile} targetUser={_user} />

                  </ScrollView>
            </View>
      );
};

const styles = StyleSheet.create({


});

export default UserProfileComponent;
