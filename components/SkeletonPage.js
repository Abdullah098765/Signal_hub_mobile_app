import React from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

const SignalPageSkeleton = () => {
  // Animated values for loading animation
  const loadingAnimation = new Animated.Value(0);

  React.useEffect(() => {
    startLoadingAnimation();
  }, []);

  const startLoadingAnimation = () => {
    Animated.loop(
      Animated.timing(loadingAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  const interpolatedColor = loadingAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#ccc', '#ddd'], // Change color as needed
  });

  const headerItemStyle = {
    backgroundColor: interpolatedColor,
    height: 40,
    width: '40%',
    borderRadius: 8,
  };

  const signalItemStyle = {
    backgroundColor: interpolatedColor,
    borderRadius: 8,
    width: '100%', // Take full width
  };

  const signalContentStyle = {
    backgroundColor: '#ddd',
    height: 120,
    marginBottom: 8,
    borderRadius: 4,
  };

  const signalMetaStyle = {
    backgroundColor: '#ddd',
    height: 20,
    width: '50%',
    borderRadius: 4,
  };

  return (
    <View style={styles.container}>

      <View style={styles.signalList}>
        {/* Repeat the following block for each signal item */}
        <Animated.View style={[styles.signalItem, signalItemStyle]}>
          <Animated.View style={[styles.signalContent, signalContentStyle]}></Animated.View>
          <Animated.View style={[styles.signalMeta, signalMetaStyle]}></Animated.View>
        </Animated.View>
        {/* End of signal item block */}

      </View>

      <View style={styles.signalList}>
        {/* Repeat the following block for each signal item */}
        <Animated.View style={[styles.signalItem, signalItemStyle]}>
          <Animated.View style={[styles.signalContent, signalContentStyle]}></Animated.View>
          <Animated.View style={[styles.signalMeta, signalMetaStyle]}></Animated.View>
        </Animated.View>
        {/* End of signal item block */}

      </View>
      <View style={styles.signalList}>
        {/* Repeat the following block for each signal item */}
        <Animated.View style={[styles.signalItem, signalItemStyle]}>
          <Animated.View style={[styles.signalContent, signalContentStyle]}></Animated.View>
          <Animated.View style={[styles.signalMeta, signalMetaStyle]}></Animated.View>
        </Animated.View>
        {/* End of signal item block */}

      </View>
      <View style={styles.header}>
        <Animated.View style={[styles.headerItem, headerItemStyle]}></Animated.View>
        <Animated.View style={[styles.headerItem, headerItemStyle]}></Animated.View>
      </View>
      <View style={styles.signalList}>
        {/* Repeat the following block for each signal item */}
        <Animated.View style={[styles.signalItem, signalItemStyle]}>
          <Animated.View style={[styles.signalContent, signalContentStyle]}></Animated.View>
          <Animated.View style={[styles.signalMeta, signalMetaStyle]}></Animated.View>
        </Animated.View>
        {/* End of signal item block */}

      </View>
      <View style={styles.header}>
        <Animated.View style={[styles.headerItem, headerItemStyle]}></Animated.View>
        <Animated.View style={[styles.headerItem, headerItemStyle]}></Animated.View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingTop: 45
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  headerItem: {
    height: 50,
    width: '40%',
    borderRadius: 8,
  },
  signalList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  signalItem: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  signalContent: {
    height: 120,
    marginBottom: 8,
    borderRadius: 4,
  },
  signalMeta: {
    height: 20,
    width: '50%',
    borderRadius: 4,
  },
});

export default SignalPageSkeleton;
