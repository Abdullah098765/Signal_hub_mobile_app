import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Image, StatusBar, StyleSheet, View, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch} from 'react-redux';

function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home')
    }, 3000);
  }, [navigation]); // Include dependencies as needed

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <View>
      <StatusBar
        // hidden
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <View style={styles.imageContainer}>
        <Image
          style={styles.splashLogoImage}
          source={require('../../assets/signalhubIcon.jpg')}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  imageContainer: {
    width: 'auto',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    height: '100%',
  },

  splashLogoImage: {
    width: 100,
    height: 99.4,
  },
});

export default SplashScreen;
