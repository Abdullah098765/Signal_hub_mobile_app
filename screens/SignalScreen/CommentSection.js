import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, StyleSheet, ToastAndroid } from 'react-native';
import { formatDistanceToNow } from 'date-fns';
import ProfilePicture from '../../components/ProfilePicture';
import useAction from '../../hooks/useAction';
import ImagePicker from 'react-native-image-picker';
import ImageSelector from '../../components/ImageSelector';
import ImageModal from '../../components/ImageModal';


const CommentCard = ({ comment }) => {
      const [imageModalVisible, setImageModalVisible] = useState(false);

      return <View style={styles.commentCard}>
            <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                  <View style={styles.userContainer}>
                        {comment.cProfilePicture && (
                              <ProfilePicture source={comment.cProfilePicture} size={20} />
                        )}
                        <Text style={styles.displayName}>{comment.cDisplayName}</Text>
                  </View>
                  <Text style={styles.timestamp}>
                        {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                  </Text>
            </View>
            <Text style={styles.commentText}>{comment.text}</Text>
            {comment.image && (
                  <TouchableOpacity onPress={() => setImageModalVisible(true)}>
                        <Image source={{ uri: comment.image }} style={styles.commentImage} />
                  </TouchableOpacity>
            )}
            {comment.image && <ImageModal urls={[comment.image]} visible={imageModalVisible} setImageModalVisible={setImageModalVisible} />}
      </View>
}

const CommentsInput = ({ user, newComment, setNewComment, signalId, setComments, comments }) => {

      const { handleCommentSubmit } = useAction()

      const [loading, setLoading] = useState(false);
      const [imageUrl, setImageUrl] = useState();
      const [imageLoading, setImageLoading] = useState(false);

      return <>
            <View style={styles.commentInputContainer}>
                  <TextInput
                        value={newComment}
                        onChangeText={(text) => setNewComment(text)}
                        style={styles.input}
                        placeholder='Write your comment...'
                        multiline
                        placeholderTextColor={"#111827"}
                  />
                  <ImageSelector imageLoading={imageLoading} setImageLoading={setImageLoading} imageUrl={imageUrl} setImageUrl={setImageUrl} />

            </View>
            <TouchableOpacity onPress={() => {
                  if (!imageLoading) {

                        if (imageUrl || newComment.trim() !== '') {
                              handleCommentSubmit(setLoading, user, newComment, imageUrl, signalId, setComments, comments, setNewComment, setImageUrl)

                        } else {
                              // Display a message or handle the case where the conditions are not met
                              ToastAndroid.show('Please provide a valid comment or upload an image.', 2000);

                        }
                  } else {
                        ToastAndroid.show('Image is still loading. Please wait.', 2000);
                  }
            }} style={styles.submitButton} disabled={loading}>
                  {loading ? (
                        <Text style={styles.buttonText}>Posting...</Text>
                  ) : (
                        <View style={{ flexDirection: "row", }}>
                              {user?.profilePicture && <ProfilePicture size={20} source={user.profilePicture} />}
                              <Text style={styles.buttonText}>  Comment</Text>
                        </View>
                  )}
            </TouchableOpacity>
      </>

}
const CommentSection = ({ signal, user }) => {


      const [comments, setComments] = useState(signal.comments)
      const [newComment, setNewComment] = useState('');
      if (!comments) return <Text>No Comments</Text>;

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
                        setNewComment={setNewComment}
                        signalId={signal._id}
                        comments={comments}
                        setComments={setComments}
                  />
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            borderRadius: 6,
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
            paddingHorizontal: 10
      },
      input: {
            flex: 1,
            backgroundColor: '#EDEDED',
            padding: 5,
            borderRadius: 8,
            marginRight: 8,
            color: '#111827',
      },
      submitButton: {
            padding: 10,
            borderRadius: 5,
            backgroundColor: '#111827',
            alignItems: "center",
            marginTop: 10,
            // marginBottom: 40,
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
