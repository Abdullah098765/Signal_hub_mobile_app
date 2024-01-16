import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { formatDistanceToNow } from 'date-fns';  // Make sure to import this if not already done
import SignalCard from '../../../components/MainComponents/card';

const ProfileSignalCards = ({ signals }) => {
      var signals = [
            {
                  "_id": "658b1d95c68d5b1a64a3d5bd",
                  "signalProvider": {
                        "_id": "658aa18418e027cedd91178b",
                        "personalInfo": {
                              "fullName": "Abdullah Sabir",
                              "age": "21",
                              "socialMediaLinks": [
                                    {
                                          "title": "Instagram",
                                          "link": "https://www.instagram.com/sabirali18.9/",
                                          "_id": "658e51e91a7b4d0578000bbe"
                                    },
                                    {
                                          "title": "Facebook",
                                          "link": "https://www.facebook.com/Sabirali19/",
                                          "_id": "659111ac2760e48f04cf0e05"
                                    }
                              ],
                              "mobile": "+923142991434",
                              "email": "ssmmhazz@gmail.com",
                              "market": "All Markets",
                              "languages": "English",
                              "country": "Pakistan"
                        },
                        "displayName": "Signal Hubs",
                        "email": "ssmmhazz@gmail.com",
                        "fireBaseUid": "6ildueoonpvab1qbkkp4vog48vf2",
                        "fIdHash": "2fv84Gov4pkkbQ1bAVPNOoeUdLi6cmZnD",
                        "profilePicture": "https://firebasestorage.googleapis.com/v0/b/signal-hub-eb98f.appspot.com/o/profile-pictures%2F658aa18418e027cedd91178b%2FsignalhubIcon.jpg?alt=media&token=c0cd6b43-4918-463d-80e9-43e5264e4e0e",
                        "bio": "Passionate about trading cryptocurrencies and stocks.",
                        "about": "...",
                        "Subscribers": [
                              "659571978bcc5e8a24deae2d"
                        ],
                        "SubscribersFCMTokens": [
                              "ehjyAFJ-bnvBoKjIPnM5B9:APA91bFWMVMreHZxayjH5hWo0C1o_F8h_je73BIWv4SOunexU6WledCFsbtEx6GW1gnKuquSRBolV1F_nU88pepZRSaE6zzknxZyD4z6MUrwCv9B7kzQ-nKtkJ2aP4X1A5ke1aFeJDjk"
                        ],
                        "Subscribed": [],
                        "expiredSignals": [
                              "658d3e5e0bc8df9828d30d74"
                        ],
                        "activeSignals": [
                              "658b1d95c68d5b1a64a3d5bd"
                        ],
                        "signalsPosted": [],
                        "goodSignals": [
                              "658b1d95c68d5b1a64a3d5bd",
                              "658d3e5e0bc8df9828d30d74"
                        ],
                        "badSignals": [],
                        "neutralSignals": [],
                        "notificationPreferences": {
                              "fcmToken": "ehjyAFJ-bnvBoKjIPnM5B9:APA91bFWMVMreHZxayjH5hWo0C1o_F8h_je73BIWv4SOunexU6WledCFsbtEx6GW1gnKuquSRBolV1F_nU88pepZRSaE6zzknxZyD4z6MUrwCv9B7kzQ-nKtkJ2aP4X1A5ke1aFeJDjk",
                              "inApp": true
                        },
                        "accountStatus": "active",
                        "market": "Crypto/Forex",
                        "reviews": [],
                        "registrationDate": "2023-12-26T09:48:52.224Z",
                        "__v": 1
                  },
                  "cryptoOrStock": "Crypto",
                  "duration": 1735151890449,
                  "entry1": 1.2,
                  "entry2": 0.9,
                  "explanation": "🌐 Overview:\nAnticipating the upcoming launch of EtherealCash (ERCH) on Signal Hub! This signal recommends a strategic buy in the early stages, offering investors a unique entry advantage. As ERCH integrates into the Signal Hub ecosystem, potential for growth aligns with platform success.\n\n🔍 Key Points:\n\nEarly Entry: Secure an early position before ERCH launch.\nEcosystem Integration: ERCH central to Signal Hub transactions.\nFuture Potential: Market position tied to platform success.\n📊 Investment Strategy:\n\nPosition for Launch: Prepare for ERCH availability.\nMonitor Updates: Stay tuned for official announcements.\nRisk Awareness: Acknowledge inherent risks in cryptocurrency investments.\n\n\n🚀 Prepare for ERCH Launch!\n#ERCHLaunchOpportunity #FutureBuySignal #SignalHubInsights",
                  "longOrShort": "Long",
                  "status": "Active",
                  "pair": "ERCH/USDT",
                  "stopLoss": 0.6,
                  "takeProfit1": 1.6,
                  "takeProfit2": 2,
                  "takeProfit3": 2.5,
                  "isSuccess": "true",
                  "likes": [
                        "658aa18418e027cedd91178b"
                  ],
                  "disLikesCount": [],
                  "followers": [
                        "659571978bcc5e8a24deae2d"
                  ],
                  "createdAt": "2023-12-26T18:38:13.341Z",
                  "comments": [
                        {
                              "cFireBaseUid": "6ildueoonpvab1qbkkp4vog48vf2",
                              "cProfilePicture": "https://firebasestorage.googleapis.com/v0/b/signal-hub-eb98f.appspot.com/o/profile-pictures%2F658aa18418e027cedd91178b%2FsignalhubIcon.jpg?alt=media&token=ded1d485-710e-4673-8a51-9da053f64da9",
                              "cDisplayName": "Signal Hub",
                              "text": "EtherealCash ",
                              "image": "https://firebasestorage.googleapis.com/v0/b/signal-hub-eb98f.appspot.com/o/comment_images%2FzujBuB.png?alt=media&token=3c2fc6f6-b110-4cf0-93b1-cc0f311b5fb5",
                              "createdAt": "2023-12-31T06:57:15.223Z",
                              "_id": "659110cc318f9b87a4556f93"
                        },
                        {
                              "cFireBaseUid": "jzs4m7vrhmd1vpmmaeejaepeolg3",
                              "cProfilePicture": "https://lh3.googleusercontent.com/a/ACg8ocKOPLZkpOzk9TBG5tEjWALhBPvEaHmMuDjL4eHCkPtHFZk=s96-c",
                              "cDisplayName": "Huzaifa Shaikh",
                              "text": "Absolutely captivated by this ERCH signal overview! The strategic insights provided make a compelling case for an early entry. Can't wait to position myself ahead of the launch and witness how ERCH integrates with Signal Hub. This is a game-changer in the making! ",
                              "createdAt": "2024-01-04T08:13:09.909Z",
                              "_id": "65966896e875f345f89da485"
                        }
                  ]
            },
            {
                  "_id": "658d476d3b5eb7c61b1efc32",
                  "signalProvider": {
                        "_id": "658d474f4f6389e27030549f",
                        "personalInfo": {
                              "fullName": "Abdullah Sabir Ali",
                              "age": "21 Years",
                              "mobile": "+923142991434",
                              "email": "abdullahsabir2121@gmail.com",
                              "market": "All Markets",
                              "languages": "Urdu Hindi",
                              "country": "Pakistan",
                              "socialMediaLinks": [
                                    {
                                          "title": "Instagram",
                                          "link": "https://www.instagram.com/sabirali18.9/",
                                          "_id": "65a3cfbaa74b65a5c5f3d94a"
                                    }
                              ]
                        },
                        "displayName": "Abdullah Sabir",
                        "email": "abdullahsabir2121@gmail.com",
                        "fireBaseUid": "p9ag6hoitnc2mm0gyssjz9yg5h33",
                        "fIdHash": "33h5GY9ZJSSyG0MM2cNTioh6GA9PGw8C5",
                        "profilePicture": "https://lh3.googleusercontent.com/a/ACg8ocLuRfwQkCWXeeAJpDyktKoWfFDKVbDEstE5ppmPvLk6ZA=s96-c",
                        "bio": "Passionate about trading cryptocurrencies and stocks.",
                        "about": "...",
                        "Subscribers": [],
                        "SubscribersFCMTokens": [],
                        "Subscribed": [],
                        "expiredSignals": [],
                        "activeSignals": [
                              "658d476d3b5eb7c61b1efc32"
                        ],
                        "signalsPosted": [],
                        "goodSignals": [
                              "658d476d3b5eb7c61b1efc32"
                        ],
                        "badSignals": [],
                        "neutralSignals": [],
                        "notificationPreferences": {
                              "fcmToken": "fEd5HZnIK1xZXHN6Zt4Tiu:APA91bG0Hp2Sp-ii4fK4EKUS1-toN5s2uH-R3iQPT-7wTGKHz1NIndcjbc8digcqbU7-_XMpFHH7eLgrkjhnggOxeFs37AJVkW2rR-d56cAK-VrCoVzROgRYgmvjXZGP3-G3XWYQBmW2",
                              "inApp": true
                        },
                        "accountStatus": "active",
                        "market": "Crypto/Forex",
                        "reviews": [],
                        "registrationDate": "2023-12-28T10:00:47.622Z",
                        "__v": 0
                  },
                  "cryptoOrStock": "Crypto",
                  "duration": 1719309674832,
                  "entry1": 5,
                  "entry2": 4,
                  "explanation": "But I ",
                  "longOrShort": "Long",
                  "status": "Active",
                  "pair": "NM-NP",
                  "stopLoss": 3,
                  "takeProfit1": 6,
                  "takeProfit2": 7,
                  "takeProfit3": 8,
                  "isSuccess": "true",
                  "likes": [],
                  "disLikesCount": [],
                  "followers": [],
                  "createdAt": "2023-12-28T10:01:17.384Z",
                  "comments": []
            }
      ]

      return (
            <View style={styles.container}>
                  {signals?.length === 0 ? (
                        <Text style={styles.noSignalsText}>No signals available.</Text>
                  ) : (
                        <View style={styles.cardContainer}>
                              {signals.map((signal, index) => (
                                    <SignalCard key={index} signal={signal} />
                              ))}
                        </View>
                  )}
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            // backgroundColor: 'white',
            // padding: 
            marginTop:0,
            margin:5,


      },
      noSignalsText: {
            textAlign: 'center',
            paddingTop: 20,
            paddingBottom: 32,
            color: 'gray',
      },
      cardContainer: {

            // flexDirection: 'row',
            // flexWrap: 'wrap',
            // justifyContent: 'space-between',
            // gap: 4,
      },
      card: {
            backgroundColor: 'white',
            padding: 8,
            marginBottom: 8,
            width: '30%',  // Adjust the width as per your design
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
      },
      header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
      },
      signalTypeBadge: {
            paddingVertical: 2,
            paddingHorizontal: 4,
            borderRadius: 4,
      },
      signalTypeText: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'bold',
      },
      timestamp: {
            color: 'gray',
            fontSize: 12,
      },
      pairContainer: {
            marginBottom: 8,
      },
      pairText: {
            fontSize: 16,
            fontWeight: 'bold',
      },
      signalStrengthText: {
            fontSize: 12,
      },
      explanationText: {
            fontSize: 14,
            marginBottom: 8,
      },
      metricsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
      },
      commentsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
      },
      commentsText: {
            fontSize: 12,
            color: 'gray',
      },
      followersText: {
            fontSize: 12,
            color: 'gray',
      },
      buttonsContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
      },
      button: {
            backgroundColor: 'gray',
            padding: 8,
            borderRadius: 8,
      },
      buttonText: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'bold',
      },
});

export default ProfileSignalCards;
