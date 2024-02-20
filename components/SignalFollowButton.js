import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, ActivityIndicator, StyleSheet } from 'react-native';
import useAction from '../hooks/useAction';
import { useAuth } from '../hooks/useAuth';

const SignalFollowButton = ({ signal }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [following, setFollowing] = useState(false);

  const { handleFollow, handleUnFollow } = useAction();
  const { user } = useAuth()

  useEffect(() => {
    if (signal.followers.indexOf(user?._id) !== -1) {
      setFollowing(true)
    }
  }, [signal, user]);

  return (
    <TouchableOpacity
      onPress={() => {
        if (!following) {
          handleFollow(setIsLoading, signal._id, user._id, setFollowing)
        }
        else {
          handleUnFollow(setIsLoading, signal._id, user._id, setFollowing)
        }
      }}
      style={[
        styles.button,
        following ? styles.unfollowButton : styles.followButton,
        isLoading && { backgroundColor: 'transparent' },
      ]}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="blue" />
      ) : (
        <Text style={styles.buttonText}>
          {following ? 'Unfollow' : 'Follow Signal'}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#111827',
  },
  followButton: {
    backgroundColor: '#111827',
  },
  unfollowButton: {
    backgroundColor: '#b91c1c',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default SignalFollowButton;
