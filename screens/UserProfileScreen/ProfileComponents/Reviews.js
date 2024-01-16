import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { formatDistanceToNow } from 'date-fns';
import ProfilePicture from '../../../components/ProfilePicture';

const ReviewCard = ({ review }) => (
      <View style={styles.reviewCard}>
            <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                  <View style={styles.userContainer}>
                        {review.rProfilePicture && (
                              <ProfilePicture source={review.rProfilePicture} size={20} />)}
                        <Text style={styles.displayName}>{review.rDisplayName}</Text>


                  </View>
                  <Text style={styles.timestamp}>
                        {formatDistanceToNow(new Date(review.createdAt), { addSuffix: true })}
                  </Text>
            </View>
            <Text style={styles.reviewText}>{review.text}</Text>


            {review.image && (
                  <TouchableOpacity onPress={() => handleImageOpen(review.image)}>
                        <Image source={{ uri: review.image }} style={styles.reviewImage} />
                  </TouchableOpacity>
            )}
      </View>
);

const ReviewsInput = ({ user, newReview, handleSelectImage, handleReviewSubmit, loading }) => (
      <>
            <View style={styles.reviewInputContainer}>
                  <TextInput
                        value={newReview}
                        // onChangeText={(text) => setNewReview(text)}
                        style={styles.input}
                        placeholder='Write your review...'
                        multiline
                        placeholderTextColor={"#111827"}
                  />
                  <TouchableOpacity onPress={handleSelectImage} style={styles.imageUploadButton}>
                        {'imageUrl' ? (
                              <Text style={[styles.buttonText, { color: "#000" }]}>✓</Text>
                        ) : (
                              <Text style={styles.buttonText}>📷</Text>
                        )}
                  </TouchableOpacity>

            </View>
            <TouchableOpacity onPress={handleReviewSubmit} style={styles.submitButton} disabled={loading}>
                  {loading ? (
                        <Text style={styles.buttonText}>Loading...</Text>
                  ) : (
                        <View style={{ flexDirection: "row", }}>{user.profilePicture && <ProfilePicture size={20} source={user.profilePicture} />}<Text style={styles.buttonText}> Post</Text></View>
                  )}
            </TouchableOpacity>
      </>
);

const Reviews = ({ user, newReview, handleSelectImage, handleReviewSubmit, loading, handleImageOpen }) => {

      const reviews = user.reviews


      return < View style={styles.container} >
            <ScrollView style={styles.reviewsContainer}>
                  {reviews.map((review, index) => (
                        <ReviewCard key={index} review={review} />
                  ))}
            </ScrollView>

            <ReviewsInput
                  user={user}
                  newReview={newReview}
                  handleSelectImage={handleSelectImage}
                  handleReviewSubmit={handleReviewSubmit}
                  loading={loading}
            />
      </View >
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            backgroundColor: '#fff',
            padding: 16,
            margin: 5,
            color: '#111827',
            marginTop: 0,

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
            color: '#111827'

      },
      submitButton: {
            padding: 10,
            borderRadius: 80,
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
