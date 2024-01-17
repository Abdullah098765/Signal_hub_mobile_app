import React, { useContext } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import CountDown from './countDown.js'
import MainInfo from './mainInfo.js'
import AdditionalInfo from './AdditionalInfo.js'
import SignalProviderInfoOnSignalPage from './SignalProviderInfoOnSignalPage.js'
import { AppContext } from '../../context/AppContext.js';
import { useAuth } from '../../hooks/useAuth.js';
import Reviews from '../UserProfileScreen/ProfileComponents/Reviews.js';
import CommenSection from './CommentSection.js';

const SignalScreen = ({ }) => {

      const { handleScroll } = useContext(AppContext);
      const { user } = useAuth()

      const signal = {
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
                  "Subscribed": [
                        "658d474f4f6389e27030549f"
                  ],
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
                  "__v": 4
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
      }
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

                  <CommenSection user={user} />
                  <View style={{ height: 30 }}></View>

            </ScrollView>
      );
}

const styles = StyleSheet.create({})

export default SignalScreen;
