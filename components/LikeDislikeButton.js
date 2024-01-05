import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icon

const LikeDislikeButton = ({ likeCount, dislikeCount, handleLikeClick, handleDislikeClick, setIsModalOpen }) => {
      return (
            <View style={styles.container}>
                  <TouchableOpacity onPress={handleLikeClick}>
                        <Icon name="thumbs-up" size={14} color="#666" />
                  </TouchableOpacity>
                  <Text style={styles.countText}>{"3.2k"}</Text>

                  <View style={styles.separator} />

                  <Text style={styles.countText}>{"1k"}</Text>
                  <TouchableOpacity onPress={handleDislikeClick}>
                        <Icon name="thumbs-down" size={14} color="#666" />
                  </TouchableOpacity>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            backgroundColor: '#fff', // Similar to bg-gray-700
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
