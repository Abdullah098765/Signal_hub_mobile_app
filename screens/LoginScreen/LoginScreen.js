import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert, ActivityIndicator } from 'react-native';
// import { firebaseConfig } from "../../../firebaseConfig"; // Assuming you have this imported
import Icon from 'react-native-vector-icons/FontAwesome'; // Importing Icon from FontAwesome
import { useAuth } from '../../hooks/useAuth';

const LoginScreen = () => {
  const [isGoogleClicked, setIsGoogleClicked] = useState(false);
  const [isMetaMaskClicked, setIsMetaMaskClicked] = useState(false);
  const [isCoinBaseClicked, setIsCoinBaseClicked] = useState(false);
  const [isBinanceClicked, setIsBinanceClicked] = useState(false);

  const showAlert = () => {
    Alert.alert(
      '',
      'Feature Under Development!',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      { cancelable: false }
    );
  };

  const { login, user } = useAuth()

  if (user) return

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/signalhubIcon.jpg')}
        style={{ height: 70, width: 70, marginBottom: 20 }}
      />

      <Text style={styles.title}>Join</Text>

      <TouchableOpacity

        style={styles.button}
        onPress={() => {
          if (!isGoogleClicked) {
            login('google');
            setIsGoogleClicked(true)
          }
        }}
        disabled={isGoogleClicked}
      >
        {isGoogleClicked ? (
          // Loading spinner or other indicator
          <ActivityIndicator size={'small'} color="#111827" />)
          : (
            <>
              {/* Google Icon (You may need to use a different icon library or approach) */}
              <Image
                width={24}
                height={24}
                source={require('../../assets/google-icon-2048x2048-czn3g8x8.png')} // Replace with the path to your SVG file
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Sign Up with Google</Text>
            </>
          )}
      </TouchableOpacity>


      <Text style={styles.title}>Or Connect</Text>
      <Text style={{ color: "red", fontSize: 11 }} >Following features are under Development</Text>

      <TouchableOpacity
        style={[styles.button, { opacity: 0.5 }]}
        onPress={() => {
          showAlert()
          if (!isMetaMaskClicked) {
            login('google');
          }
        }}
        disabled={true}
      >
        {isMetaMaskClicked ? (
          // Loading spinner or other indicator
          <Text>Loading...</Text>
        ) : (
          <>


            <Image
              width={24}
              height={24}
              source={require('../../assets/metamask.png')} // Replace with the path to your SVG file
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Connect Wallet</Text>
          </>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { opacity: 0.5 }]}
        onPress={() => {
          showAlert()

          if (!isCoinBaseClicked) {
          }
        }}
        disabled={true}
      >
        {isCoinBaseClicked ? (
          // Loading spinner or other indicator
          <Text>Loading...</Text>
        ) : (
          <>


            <Image
              width={24}
              height={24}
              source={require('../../assets/coinbaselogo.png')} // Replace with the path to your SVG file
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Connect Wallet</Text>
          </>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { opacity: 0.5 }]}
        onPress={() => {
          if (!isBinanceClicked) {
            showAlert()

            signInWithGoogle();
          }
        }}
        disabled={true}
      >
        {isBinanceClicked ? (
          // Loading spinner or other indicator
          <Text>Loading...</Text>
        ) : (
          <>


            <Image
              width={24}
              height={24}
              source={require('../../assets/bnbwllet.jpg')} // Replace with the path to your SVG file
              style={styles.icon}
            />
            <Text style={styles.buttonText}>Connect Wallet</Text>
          </>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 80,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: "#000"

  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: "#000"


  },
  button: {
    width: '80%',
    padding: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#000",
    marginVertical: 10,

  },
  buttonText: {
    marginLeft: 8,
    fontSize: 18,
    color: "#000"
  },
  icon: {
    marginRight: 8,
    height: 24,
    width: 24

  },
});



export default LoginScreen;
