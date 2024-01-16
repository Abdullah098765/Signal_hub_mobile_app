import React, { useState } from 'react';
import { View, Text, StyleSheet, Linking } from 'react-native';

const UserInfoSection = ({ personalInformation }) => {
      const openLink = (url) => {
            Linking.openURL(url);
      };
      return (
            <View style={styles.container}>
                  <View style={styles.infoContainer}>
                        <View style={styles.headerContainer}>
                              <Text style={styles.headerText}>Personal Info</Text>
                        </View>
                        <View style={styles.listContainer}>
                              <ListItem label="Full name:" value={personalInformation.fullName} />
                              <ListItem label="Age:" value={personalInformation.age} />
                              <ListItem label="Mobile:" value={personalInformation.mobile} />
                              <ListItem label="Email:" value={personalInformation.email} />
                              <ListItem label="Market:" value={personalInformation.market} />
                              <ListItem label="Languages:" value={personalInformation.languages} />
                              <ListItem label="Country:" value={personalInformation.country} />
                              <View style={styles.linksContainer}>
                                    <Text style={styles.linkLabel}>Links:</Text>
                                    {personalInformation.socialMediaLinks &&
                                          personalInformation.socialMediaLinks.map((link, index) => (
                                                <Text
                                                      key={index}
                                                      style={styles.link}
                                                      onPress={() => openLink(link.link)}
                                                >
                                                      {link.title}
                                                </Text>
                                          ))}
                              </View>
                        </View>
                  </View>
            </View>
      );
};

const ListItem = ({ label, value }) => (
      <View style={styles.listItem}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
      </View>
);

const styles = StyleSheet.create({
      container: {
            // marginVertical: 10,
            // marginHorizontal:10
      },
      infoContainer: {
            backgroundColor: 'white',
            borderRadius: 8,
            margin: 5,
            padding: 20,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 5,
      },
      headerContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 12,
      },
      headerText: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
      },
      editButton: {
            fontSize: 14,
            color: '#3498db',
            marginRight: 10,
      },
      listContainer: {
            marginTop: 10,
      },
      listItem: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            borderBottomColor: '#ddd',
            paddingVertical: 8,
      },
      label: {
            flex: 1,
            fontWeight: 'bold',
            color: '#333',
      },
      value: {
            flex: 2,
            color: '#666',
      },
      linksContainer: {
            marginTop: 8,
      },
      linkLabel: {
            fontWeight: 'bold',
            color: '#333',
      },
      link: {
            color: '#3498db',
            marginTop: 4,
      },
});

export default UserInfoSection;
