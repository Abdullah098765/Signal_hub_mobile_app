import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AppContext } from '../../../context/AppContext';
import ProfileSignalCards from "./ProfileSignalCards.js"
import Reviews from "./Reviews.js"
import About from "./About.js"
const Sections = ({ user }) => {
      const { currentProfileRoute } = useContext(AppContext);
      return (
            <View style={{
                  elevation: 100,

            }}>
                  {currentProfileRoute !== "Reviews" && currentProfileRoute !== "About" && <ProfileSignalCards name={currentProfileRoute} />}
                  {currentProfileRoute === "Reviews" && <Reviews user = {user} />}
                  {currentProfileRoute === "About" && <About about={user.about} />}
            </View>
      );
}

const styles = StyleSheet.create({})

export default Sections;