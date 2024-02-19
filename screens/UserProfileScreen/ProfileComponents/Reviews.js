import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet, Alert } from 'react-native';
import { formatDistanceToNow } from 'date-fns';
import ProfilePicture from '../../../components/ProfilePicture';
import useAction from '../../../hooks/useAction';
import ImageSelector from '../../../components/ImageSelector';
import ImageModal from '../../../components/ImageModal';
import { useAuth } from '../../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

const ReviewCard = ({ review }) => {
      const navigation = useNavigation()
      const [imageModalVisible, setImageModalVisible] = useState(false);


      return <View style={styles.reviewCard}>
            <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                  <TouchableOpacity
                        onPress={() => navigation.navigate('UserProfile', { fIdHash: review.rFireBaseUid })}
                        style={styles.userContainer}>
                        {review.rProfilePicture && (
                              <ProfilePicture source={review.rProfilePicture} size={20} />)}
                        <Text style={styles.displayName}>{review.rDisplayName}</Text>


                  </TouchableOpacity>
                  <Text style={styles.timestamp}>
                        {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}
                  </Text>
            </View>
            <Text style={styles.reviewText}>{review.text}</Text>


            {review.image && (
                  <TouchableOpacity onPress={() => setImageModalVisible(true)}>
                        <Image source={{ uri: review.image }} style={styles.reviewImage} />
                  </TouchableOpacity>
            )}
            {review.image && <ImageModal urls={[review.image]} visible={imageModalVisible} setImageModalVisible={setImageModalVisible} />}

      </View>
};

const ReviewsInput = ({ targetUser, reviews, setReviews }) => {
      const { user } = useAuth()
      const [newReview, setNewReview] = useState('');
      const { handleReviewSubmit } = useAction()
      const [loading, setLoading] = useState(false);
      const [imageUrl, setImageUrl] = useState();
      return <>
            <View style={styles.reviewInputContainer}>
                  <TextInput
                        value={newReview}
                        onChangeText={(text) => setNewReview(text)}
                        style={styles.input}
                        placeholder='Write your review...'
                        multiline
                        placeholderTextColor={"#111827"}
                  />
                  <ImageSelector imageUrl={imageUrl} setImageUrl={setImageUrl} />


            </View>
            <TouchableOpacity onPress={() => {
                  if (imageUrl || newReview.trim() !== '') {
                        handleReviewSubmit(setLoading, user, newReview, imageUrl, targetUser._id, setReviews, reviews, setNewReview, setImageUrl);
                  } else {
                        // Display a message or handle the case where the conditions are not met
                        Alert.alert('Please provide a valid review or  upload an image.');
                  }
            }} style={styles.submitButton}>

                  {loading ? (
                        <Text style={styles.buttonText}>Loading...</Text>
                  ) : (
                        <View style={{ flexDirection: "row", }}>{user.profilePicture && <ProfilePicture size={20} source={user.profilePicture} />}<Text style={styles.buttonText}> Post</Text></View>
                  )}
            </TouchableOpacity>
      </>
};

const Reviews = ({ targetUser, isMyProfile }) => {

      const [reviews, setReviews] = useState(targetUser?.reviews);
      useEffect(() => {
            setReviews(targetUser?.reviews)
      }, [targetUser]);

      if (!targetUser) return <Text>No Reviews</Text>

      return < View style={styles.container} >
            <ScrollView style={styles.reviewsContainer}>
                  {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                  ))}
            </ScrollView>

            {!isMyProfile && <ReviewsInput
                  targetUser={targetUser}
                  reviews={reviews}
                  setReviews={setReviews}
            />}
      </View >
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 16,
            margin: 0,
            color: '#111827',
            marginTop: 0,
            marginBottom: 30

      },
      reviewsContainer: {
            flex: 1,
            marginBottom: 16,

      },
      reviewCard: {
            marginBottom: 16,
            borderColor: "lightgray",
            borderBottomWidth: 1,
            // padding: 2,
            // borderRadius: 5

      },
      userContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8,
            color: '#111827',

      },

      displayName: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#111827',
            marginLeft: 4

      },
      reviewText: {
            fontSize: 14,
            marginBottom: 8,
            color: '#111827'

      },
      timestamp: {
            fontSize: 12,
            color: 'gray',
            marginBottom: 8,
      },
      reviewImage: {
            width: 150,
            height: 150,
            borderRadius: 8,
            marginBottom: 8,
      },
      reviewInputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            color: '#111827',
            backgroundColor: '#EDEDED',
            borderRadius: 8,
            paddingRight: 10
      },
      input: {
            flex: 1,
            backgroundColor: '#EDEDED',
            padding: 8,
            borderRadius: 8,
            marginRight: 8,
            color: '#111827',

            // placeholder:'#000'

      },
      imageUploadButton: {
            padding: 8,
            borderRadius: 8,
            backgroundColor: '#EDEDED',
            color: '#111827',
            

      },
      submitButton: {
            padding: 10,
            borderRadius: 6,
            backgroundColor: '#111827',
            alignItems: "center",
            marginTop: 10,

      },
      buttonText: {
            color: 'white',
            fontWeight: 'bold',



      },
});

export default Reviews;
