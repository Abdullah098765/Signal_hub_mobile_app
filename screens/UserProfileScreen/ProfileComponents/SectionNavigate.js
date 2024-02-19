import React, { useState, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';
import AllSignals from './ProfileNavigationComponents/All-Signals';
import Sections from './Sections';
import { View } from 'react-native';

const Tab = createMaterialTopTabNavigator();
const tabNames = ["All", "Active", "Stock", "Crypto", "About", "Reviews"];

const SectionNavigate = ({ targetUser, isMyProfile }) => {
      const [currentProfileRoute, setCurrentProfileRoute] = useState("All");
      const navigation = useNavigation();
      const route = useRoute();


      return (
            <View style={{ marginHorizontal: 5, flex: 1 }}>
                  <NavigationContainer independent={true}>
                        <Tab.Navigator
                              initialRouteName={currentProfileRoute}
                              screenOptions={{
                                    tabBarLabelStyle: {
                                          fontSize: 16,
                                          fontWeight: 'bold',
                                          textTransform: 'none',
                                          maxWidth: 100,
                                          overflow: 'hidden',
                                    },
                                    tabBarItemStyle: {
                                          width: 100,
                                    },
                                    tabBarStyle: {
                                          backgroundColor: '#ffffff',
                                    },
                                    tabBarIndicatorStyle: {
                                          backgroundColor: '#3498db',
                                    },
                                    tabBarScrollEnabled: true,
                              }}
                        >
                              {tabNames.map((tabName) => (
                                    <Tab.Screen
                                          key={tabName}
                                          name={tabName}
                                          component={AllSignals}
                                          listeners={({ navigation, route }) => ({
                                                tabPress: (e) => {
                                                      // Handle custom logic when the tab is pressed
                                                      console.log(`Tab ${tabName} is pressed`);
                                                      setCurrentProfileRoute(tabName)
                                                      // You can also use navigation.navigate to navigate to another screen
                                                      // navigation.navigate('YourScreen');
                                                },
                                          })}
                                    />
                              ))}
                        </Tab.Navigator>
                  </NavigationContainer>
                  <Sections
                        currentProfileRoute={currentProfileRoute}
                        setCurrentProfileRoute={setCurrentProfileRoute}
                        isMyProfile={isMyProfile}
                        targetUser={targetUser}
                  />
            </View>
      );
};

export default SectionNavigate;
