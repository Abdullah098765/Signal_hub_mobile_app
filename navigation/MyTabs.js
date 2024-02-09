import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import AppNavigator from "./AppNavigator";
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ProfilePicture from "../components/ProfilePicture";
import { AppContext } from "../context/AppContext";
import { useContext, useEffect, useState } from "react";
import { Animated } from "react-native";
import CreateSignal from "../screens/CreateSignalScreen/CreateSignal";
import Subscriptions from "../screens/Subscriptions/Subscriptions.js";
import FollowingSignals from "../screens/FollowingSignals/FollowingSignals.js";
import Navbar from "../components/MainComponents/navbar.js";


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
                        header: (props) => <Navbar title="Home" {...props} />,
                        headerShown: true, // Ensure header is shown

                        tabBarStyle: {
                              position: "absolute",
                              backgroundColor: "#111827",
                              transform: [{ translateY: tabBarTranslateY }],
                        },
                        tabBarActiveTintColor: '#818CF8',
                        tabBarInactiveTintColor: '#fff',
                        // tabBarVisible: false, // Add tabBarVisible option
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
                        name="Following"
                        component={FollowingSignals}
                        options={{
                              tabBarIcon: ({ color, size }) => (
                                    <Ionicons name="bar-chart" color={color} size={size} />
                              ),
                        }}
                  />
                  <Tab.Screen
                        name="Subscriptions"
                        component={Subscriptions}
                        options={{
                              tabBarIcon: ({ color, size }) => (
                                    <Ionicons name="people" color={color} size={size} />
                              ),
                        }}
                  />


                  <Tab.Screen
                        name="Create"
                        component={CreateSignal}
                        options={{
                              tabBarIcon: ({ color, size }) => (
                                    <Ionicons name="add" color={color} size={size} />
                              ),
                        }}
                  />




                  {/* <Tab.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                              tabBarIcon: ({ color, size }) => (
                                    <Ionicons name="search" color={color} size={size} />),
                        }}
                  /> */}
            </Tab.Navigator>
      );
};
