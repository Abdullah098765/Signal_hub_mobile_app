import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Share } from 'react-native';
import ProfilePicture from '../../../components/ProfilePicture';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ActionButtonsForUser from './ActionButtonsForUser';
import ActionButtonsForProvider from './ActionButtonsForProvider';
import ShareButton from "../../../components/Buttons/ShareButton.js"
import { useAuth } from '../../../hooks/useAuth.js';
import LogoutButton from '../../../components/Buttons/LogoutButton.js';

const ProfileHeader = ({ user }) => {
      function formatRegistrationDate(timestamp) {
            const date = new Date(timestamp);

            const options = { year: "numeric", month: "long" };
            return new Intl.DateTimeFormat("en-US", options).format(date);
      }

      return (
            <View style={styles.container}>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5, position: "absolute", top: 10, left: 10 }}>
                     <LogoutButton/>
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 5, position: "absolute", top: 10, right: 10 }}>
                        <ShareButton />
                  </View>
                  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginVertical: 0, }}>
                        <ProfilePicture
                              source={user.profilePicture}
                              size={150}
                        />


                  </View>



                  <View style={styles.userInfoContainer}>
                        <Text style={styles.displayName}>{user.displayName}</Text>
                        <Text style={styles.bio}>{user.bio}</Text>
                        <Text style={styles.registrationDate}>
                              Joined at {formatRegistrationDate(user.registrationDate)}
                        </Text>
                        <Text style={styles.subscribers}>
                              Subscribers {user.Subscribers.length}
                        </Text>
                  </View>

                  {/* <ActionButtonsForUser /> */}
                  <ActionButtonsForProvider />
            </View>
      );
}

const styles = StyleSheet.create({
      container: {
            backgroundColor: 'white',
            borderRadius: 10,
            padding: 20,
            // paddingTop:0,
            paddingVertical: 10,
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 45,
            elevation: 5,
            shadowColor: "#000",
            margin: 5



      },
      displayName: {
            color: "#000",
            fontSize: 25,
            marginRight: 10,
            fontWeight: 'bold',
      },
      bio: {
            color: 'gray',
            marginBottom: 5,
            flexWrap: 'wrap',
            fontSize: 15,

      },
      registrationDate: {
            // fontSize: 12,
            color: 'gray',
            marginBottom: 2,


      },
      subscribers: {
            // fontSize: 12,
            color: 'gray',
      },

      userInfoContainer: {
            marginLeft: 10,
            justifyContent: 'center',
            alignItems: "center",
            // flex: 1,s
            // marginLeft:10,
            marginVertical: 10
      },

})

export default ProfileHeader;
