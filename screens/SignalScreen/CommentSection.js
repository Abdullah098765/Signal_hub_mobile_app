import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet } from 'react-native';
import { formatDistanceToNow } from 'date-fns';
import ProfilePicture from '../../components/ProfilePicture';

const CommentCard = ({ comment }) => (
      <View style={styles.commentCard}>
            <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                  <View style={styles.userContainer}>
                        {comment.rProfilePicture && (
                              <ProfilePicture source={comment.rProfilePicture} size={20} />
                        )}
                        <Text style={styles.displayName}>{comment.rDisplayName}</Text>
                  </View>
                  <Text style={styles.timestamp}>
                        {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                  </Text>
            </View>
            <Text style={styles.commentText}>{comment.text}</Text>
            {comment.image && (
                  <TouchableOpacity onPress={() => handleImageOpen(comment.image)}>
                        <Image source={{ uri: comment.image }} style={styles.commentImage} />
                  </TouchableOpacity>
            )}
      </View>
);

const CommentsInput = ({ user, newComment, handleCommentSubmit, loading }) => (
      <>
            <View style={styles.commentInputContainer}>
                  <TextInput
                        value={newComment}
                        // onChangeText={(text) => setNewComment(text)}
                        style={styles.input}
                        placeholder='Write your comment...'
                        multiline
                        placeholderTextColor={"#111827"}
                  />
                  <TouchableOpacity style={styles.imageUploadButton}>
                        {'imageUrl' ? (
                              <Text style={[styles.buttonText, { color: "#000" }]}>✓</Text>
                        ) : (
                              <Text style={styles.buttonText}>📷</Text>
                        )}
                  </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={handleCommentSubmit} style={styles.submitButton} disabled={loading}>
                  {loading ? (
                        <Text style={styles.buttonText}>Loading...</Text>
                  ) : (
                        <View style={{ flexDirection: "row", }}>
                              {user.profilePicture && <ProfilePicture size={20} source={user.profilePicture} />}
                              <Text style={styles.buttonText}> Comment</Text>
                        </View>
                  )}
            </TouchableOpacity>
      </>
);

const CommentSection = ({ user, newComment, handleCommentSubmit, loading }) => {

      const comments = user?.reviews;
      if (!user) return <Text>No Comments</Text>;

      return (
            <View style={styles.container}>
                  <ScrollView style={styles.commentsContainer}>
                        {comments.map((comment, index) => (
                              <CommentCard key={index} comment={comment} />
                        ))}
                  </ScrollView>

                  <CommentsInput
                        user={user}
                        newComment={newComment}
                        handleCommentSubmit={handleCommentSubmit}
                        loading={loading}
                  />
            </View>
      );
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
      commentsContainer: {
            flex: 1,
            marginBottom: 16,
      },
      commentCard: {
            marginBottom: 16,
            borderColor: "lightgray",
            borderBottomWidth: 1,
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
            marginLeft: 4,
      },
      commentText: {
            fontSize: 14,
            marginBottom: 8,
            color: '#111827',
      },
      timestamp: {
            fontSize: 12,
            color: 'gray',
            marginBottom: 8,
      },
      commentInputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            color: '#111827',
            backgroundColor: '#EDEDED',
            borderRadius: 8,
            marginTop: 16,
      },
      input: {
            flex: 1,
            backgroundColor: '#EDEDED',
            padding: 8,
            borderRadius: 8,
            marginRight: 8,
            color: '#111827',
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
      commentImage: {
            width: 150,
            height: 150,
            borderRadius: 8,
            marginBottom: 8,
      },
      imageUploadButton: {
            padding: 8,
            borderRadius: 8,
            backgroundColor: '#EDEDED',
            color: '#111827'

      },
});

export default CommentSection;
