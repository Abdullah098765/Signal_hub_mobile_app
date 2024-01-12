import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import AppNavigator from "./AppNavigator";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePicture from "../components/ProfilePicture";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { Animated } from "react-native";


const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {

      const { tabBarTranslateY } = useContext(AppContext);



      return (
            <Tab.Navigator
                  // tabBarOptions={{
                  //   activeTintColor: 'blue',
                  //   inactiveTintColor: 'gray',
                  // }}
                  screenOptions={({ route }) => ({
                        headerShown: false,
                        tabBarStyle: {
                              position: "absolute",
                              backgroundColor: "#111827",
                              transform: [{ translateY: tabBarTranslateY }],
                        },
                        tabBarActiveTintColor: '#818CF8',
                        tabBarInactiveTintColor: '#fff',
                        tabBarVisible: false, // Add tabBarVisible option
                  })}
            >

                  <Tab.Screen
                        name="Home"
                        component={HomeScreen}
                        options={{
                              tabBarIcon: ({ color, size }) => (
                                    <Ionicons name="home" color={color} size={size} />
                              ),
                        }}
                  />
                  <Tab.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                              tabBarIcon: ({ color, size }) => (
                                    <Ionicons name="search" color={color} size={size} />),
                        }}
                  />
            </Tab.Navigator>
      );
};
