// SectionNavigate.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';

const Tab = createBottomTabNavigator();

const tabNames = ["All", "Active", "Stock", "Crypto", "About", "Reviews"];

const SectionNavigate = () => {
      return (
            <NavigationContainer independent={true}>
                  <Tab.Navigator
                        tabBarOptions={{
                              activeTintColor: '#111827',
                              activeBackgroundColor: 'lightgray',

                              labelStyle: {
                                    fontSize: 15,
                                    flex: 1,
                                    textAlignVertical: 'center',
                              },
                              showLabel: true, // Set to false to hide text labels
                        }}
                  >
                        {tabNames.map((tabName) => (
                              <Tab.Screen
                                    key={tabName}
                                    name={tabName}
                                    component={() => (
                                          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                                                <Text>{`${tabName} Signals`}</Text>
                                          </View>
                                    )}
                                    options={{
                                          tabBarIconStyle: { display: "none" },
                                    }}
                              />
                        ))}
                  </Tab.Navigator>
            </NavigationContainer>
      );
};

export default SectionNavigate;
