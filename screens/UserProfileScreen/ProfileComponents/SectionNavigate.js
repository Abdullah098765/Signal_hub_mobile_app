import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { AppContext } from '../../../context/AppContext';

const SectionNavigate = () => {
      const { currentProfileRoute, setCurrentProfileRoute } = useContext(AppContext);

      const handleGetRoute = (route) => {
            setCurrentProfileRoute(route);
      };

      return (
            <View style={styles.container}>
                  <TouchableOpacity
                        onPress={() => handleGetRoute("All")}
                        style={[
                              styles.scrollItem,
                              currentProfileRoute === "All" && styles.activeItem,
                        ]}
                  >
                        <Text style={styles.itemText}>All</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                        onPress={() => handleGetRoute("Active")}
                        style={[
                              styles.scrollItem,
                              currentProfileRoute === "Active" && styles.activeItem,
                        ]}
                  >
                        <Text style={styles.itemText}>Active</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                        onPress={() => handleGetRoute("Expired")}
                        style={[
                              styles.scrollItem,
                              currentProfileRoute === "Expired" && styles.activeItem,
                        ]}
                  >
                        <Text style={styles.itemText}>Expired</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                        onPress={() => handleGetRoute("Forex")}
                        style={[
                              styles.scrollItem,
                              currentProfileRoute === "Forex" && styles.activeItem,
                        ]}
                  >
                        <Text style={styles.itemText}>Forex</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                        onPress={() => handleGetRoute("Crypto")}
                        style={[
                              styles.scrollItem,
                              currentProfileRoute === "Crypto" && styles.activeItem,
                        ]}
                  >
                        <Text style={styles.itemText}>Crypto</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                        onPress={() => handleGetRoute("About")}
                        style={[
                              styles.scrollItem,
                              currentProfileRoute === "About" && styles.activeItem,
                        ]}
                  >
                        <Text style={styles.itemText}>About</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                        onPress={() => handleGetRoute("Reviews")}
                        style={[
                              styles.scrollItem,
                              currentProfileRoute === "Reviews" && styles.activeItem,
                        ]}
                  >
                        <Text style={styles.itemText}>Reviews</Text>
                  </TouchableOpacity>
                  {/* Add more items as needed */}
            </View>
      );
};

const styles = StyleSheet.create({
      container: {

            flexDirection: 'row',
            // alignItems: 'center',
            overflow: 'hidden',
            backgroundColor: "#fff",
            margin: 5,
            marginBottom: 0,
            justifyContent: 'space-between',
            // alignContent: "center"
      },
      scrollItem: {
            padding: 10,
            // borderWidth: 1,
            borderColor: 'gray',
            // marginRight: 10,
            // borderRadius: 5,
            justifyContent: 'space-between'

      },
      activeItem: {
            backgroundColor: 'lightgray', // Change to your desired active color
            color: "#000"

      },
      itemText: {
            color: 'gray',
      },
});

export default SectionNavigate;
