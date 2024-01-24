import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon
import useAction from '../../hooks/useAction';
import { useAuth } from '../../hooks/useAuth';

const LikeDislikeButton = ({ signal }) => {
      const { user } = useAuth()
      const [liked, setLiked] = useState(false);
      const [disliked, setDisliked] = useState(false);
      const [likeCount, setLikeCount] = useState(signal?.likes.length);
      const [dislikeCount, setDislikeCount] = useState(signal?.disLikesCount.length);

      const { handleLikeClick, handleDislikeClick } = useAction()
      useEffect(() => {

            if (signal.likes.indexOf(user?._id) !== -1) {
                  setLiked(true)
            }
            if (signal.disLikesCount.indexOf(user?._id) !== -1) {
                  setDisliked(true)
            }



      }, [user]);
      return (
            <View style={styles.container}>
                  <TouchableOpacity onPress={() => {
                        handleLikeClick(liked, signal._id, user._id, disliked, setLiked, likeCount, setLikeCount, setDisliked, dislikeCount, setDislikeCount)
                  }}>
                        <Icon name="thumbs-up" size={18} color={liked ? "green" : "#666"} />
                  </TouchableOpacity>
                  <Text style={styles.countText}>{likeCount}</Text>

                  <View style={styles.separator} />

                  <Text style={styles.countText}>{dislikeCount}</Text>
                  <TouchableOpacity onPress={() =>
                        handleDislikeClick(liked, signal._id, user._id, disliked, setLiked, likeCount, setLikeCount, setDisliked, dislikeCount, setDislikeCount)}>
                        <Icon name="thumbs-down" size={18} color={disliked ? "red" : "#666"} />
                  </TouchableOpacity>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            backgroundColor: '#fff',
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 10,
            fontSize: 14, // Similar to text-sm in Tailwind CSS
      },
      countText: {
            color: '#666',
            marginHorizontal: 8,
      },
      separator: {
            height: 20,
            width: 1,
            backgroundColor: '#fff', // Similar to border-gray-400
            marginHorizontal: 8,
      },
});

export default LikeDislikeButton;
