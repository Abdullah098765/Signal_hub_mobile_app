import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const LanguageInput = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [availableLanguages, setAvailableLanguages] = useState([
    'English',
    'Spanish',
    'French',
    'German',
    // Add more languages as needed
  ]);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    // You can perform any additional actions based on the selected language
  };

  const renderLanguageItem = ({ item }) => (
    <Text
      style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}
      onPress={() => handleLanguageChange(item)}
    >
      {item}
    </Text>
  );

  return (
    <View>
      <Text style={styles.headings}>Languages</Text>
      <TextInput
        style={styles.fullWidthInput}
        placeholder="Type to search for a language"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        data={availableLanguages.filter((language) =>
          language.toLowerCase().includes(searchQuery.toLowerCase())
        )}
        renderItem={renderLanguageItem}
        keyExtractor={(item) => item}
      />
      <Text>Selected Language: {selectedLanguage}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
      container: {
            flexDirection: 'column',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 20,
            // marginTop: 30,

      },
      fullWidthInput: {
            width: '100%',
            borderWidth: 0,
            borderColor: '#ccc',
            padding: 10,
            marginBottom: 10,
            color: '#111827',
            borderBottomWidth: 2,
      },
      errorInput: {
            borderColor: 'red', // Change border color for error state
      },
      button: {
            backgroundColor: '#111827',
            padding: 10,
            borderRadius: 5,
            // marginTop: 100,
            position: 'relative',
            marginTop: 100,
      },
      buttonText: {
            color: 'white',
            textAlign: 'center',
      },
      headings: {
            fontWeight: '500',
            color: '#111827',

      },
      errorText: {
            color: 'red', // Change text color for error state
      },
      pickerContainer: {
            flex: 1,
            alignItems: "center",

      },
      containerHeading: {
            alignItems: 'center',
            marginBottom: 0,
      },
      headingText: {
            fontSize: 25,
            fontWeight: 'bold',
            color: '#004080', // Set your desired text color
            fontFamily: 'Arial', // Set your desired font family
            // Additional styles for the heading text
      },
});
export default LanguageInput;
