import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { formatDistanceToNow } from 'date-fns';
import SignalDetails from '../SignalCardDetails';
import UserProfileLink from '../UserProfileLink';
import SignalFollowButton from '../Buttons/SignalFollowButton';
import LikeDislikeButton from '../Buttons/LikeDislikeButton';
// import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const SignalCard = ({ signal }) => {


      return (
            <View style={styles.card}>
                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={[styles.badge, { backgroundColor: signal.longOrShort === 'Long' ? 'green' : 'red' }]}>
                              <Text style={styles.badgeText}>{signal.longOrShort === 'Long' ? 'Buy' : 'Sell'}</Text>
                        </View>
                        <Text style={styles.timestamp}>
                              {formatDistanceToNow(new Date(signal.createdAt), { addSuffix: true })}
                        </Text>
                  </View>
                  <View style={{}}>
                        <Text style={styles.pair}>{signal.pair}</Text>
                        <Text style={signal.duration >= new Date().getTime() ? styles.active : styles.expired}>
                              {signal.duration >= new Date().getTime() ? 'Active Signal' : 'Expired'}
                        </Text>
                        <Text
                              style={styles.explanation}
                              numberOfLines={1.5}
                              ellipsizeMode="tail"
                        >
                              {signal.explanation}
                        </Text>
                  </View>

                  <View style={styles.line}></View>
                  <SignalDetails signal={signal} />

                  <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }} >
                        <UserProfileLink signal={signal} />
                        <View style={styles.commentTextcontainer}>
                              <Text style={styles.commentText}>Comments: {signal.comments.length}</Text>
                              <Text style={styles.commentText}>Followers: {signal.followers.length}</Text>
                        </View>
                  </View>

                  <View style={styles.cardButtonsContainer}>
                        <LikeDislikeButton signal={signal} />
                        <View style={{ width: 4 }}></View>
                        <SignalFollowButton signal={signal} />
                  </View>

            </View>
      );
};
const styles = StyleSheet.create({
      card: {
            marginBottom: 10,
            shadowColor: 'black',
            shadowOffset: { width: 0, height: 2 },
            shadowRadius: 6,
            shadowOpacity: 0.26,
            elevation: 8,
            backgroundColor: 'white',
            padding: 10,
            borderRadius: 0

            // borderRadius: 10
      },
      badge: {
            padding: 5,
            borderRadius: 5,

      },
      badgeText: {
            color: 'white',
            fontSize: 12,
            fontWeight: 'bold',
      },
      timestamp: {
            color: 'gray',
            fontSize: 12,
      },
      active: {
            color: 'green',
      },
      expired: {
            color: 'red',
      },
      pair: {
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
      },
      explanation: {
            fontSize: 14,
            marginBottom: 10,
            color: 'black',

      },
      line: {
            borderBottomColor: '#ccc', // Change color as per your requirement
            borderBottomWidth: 1,
            marginVertical: 10, // Adjust spacing as per your requirement
      },
      commentTextcontainer: {
            marginTop: 2,
            fontSize: 14, // Similar to text-sm in Tailwind CSS
            color: '#666', // Text color similar to text-gray-600
            display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'
      },
      commentText: {
            marginBottom: 2, // Space between lines
            color: '#666', // Text color similar to text-gray-600
            marginHorizontal: 4
      },
      cardButtonsContainer: {
            marginVertical: 10,
            display: 'flex', flexDirection: 'row', justifyContent: 'space-between'

      }
});
export default SignalCard;