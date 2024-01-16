import React, { useContext, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useAuth } from '../../hooks/useAuth';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfileHeader from './ProfileComponents/ProfileHeader';
import Careere from './ProfileComponents/Careere.js';
import UserInfoSection from './ProfileComponents/UserInfoSection.js';
import SectionNavigate from './ProfileComponents/SectionNavigate.js';
import Sections from './ProfileComponents/Sections.js';
import { AppContext } from '../../context/AppContext.js';


const UserProfileComponent = ({ formatRegistrationDate }) => {
      const { user } = useAuth()

      const { handleScroll } = useContext(AppContext);

      if (!user) return
      return (
            <View style={{ padding: 5, backgroundColor: "#e5e7eb", }}>
                  <ScrollView style={{ padding: 0, }} onScroll={({ nativeEvent }) => { handleScroll({ nativeEvent }) }} scrollEventThrottle={16}>
                        <ProfileHeader user={user} />
                        <Careere user={user} />
                        <UserInfoSection personalInformation={user.personalInfo} />
                        <SectionNavigate />
                        <Sections user={user} />
                  </ScrollView>
            </View>
      );
};

const styles = StyleSheet.create({


});

export default UserProfileComponent;
