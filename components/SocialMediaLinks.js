import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet, Modal, TextInput, TouchableWithoutFeedback } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SocialMediaLinks = ({ socialMediaLinks, updateSocialMediaLinks, removeSocialMediaLink }) => {

  const AddLinkModal = ({ updateSocialMediaLinks }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');

    const handleAddLink = () => {


      if (!title.trim() || !url.trim()) {
        // Display an error message, you can modify this part based on your UI/UX design
        alert('Title and URL cannot be empty');
        return;
      }

      // Call the updateSocialMediaLinks function only if the values are not empty
      updateSocialMediaLinks(title, url);

      // Clear the input fields and close the modal
      setTitle('');
      setUrl('');
      setModalVisible(false);

    };

    return (
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                <Text style={{ color: "#111827", fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Add Link</Text>
                <TextInput
                  style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10, color: '#000' }}
                  placeholder="Title"
                  placeholderTextColor="gray"
                  value={title}
                  onChangeText={(text) => setTitle(text)}
                />
                <TextInput
                  style={{ borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 10, paddingVertical: 10, color: '#000' }}
                  placeholder="URL"
                  placeholderTextColor="gray"
                  value={url}
                  onChangeText={(text) => setUrl(text)}
                />

                <TouchableOpacity
                  style={{ backgroundColor: "#111827", color: "#fff", alignItems: "center", paddingVertical: 10, borderRadius: 5 }}
                  onPress={handleAddLink} ><Text style={{ backgroundColor: "#111827", color: "#fff" }}>Add Link</Text></TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Ionicons name="add-circle-outline" color="gray" size={25} />
        </TouchableOpacity>

      </View>
    );
  };


  return (
    <View style={{ paddingLeft: 2, gap: 10 }}>

      <Text style={styles.headings}>Links</Text>

      <View style={{ flexDirection: "row" }}>
        {socialMediaLinks &&
          socialMediaLinks.map((link, index) => (
            <View
              key={index}
              style={{ flexDirection: "column" }}>
              <TouchableOpacity style={{ left: 50 }} onPress={() => removeSocialMediaLink(index)}>
                <Text style={{ color: "gray" }}> <Ionicons name="close" color="gray" size={15} />
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => Linking.openURL(link.link)}
                style={{ marginRight: 10, }}
              >
                <Text style={{ color: '#3498db', textDecorationLine: 'underline' }}>{link.title}</Text>
              </TouchableOpacity>

            </View>

          ))}
      </View>
      {/* <TouchableOpacity>
        <Ionicons name="add-circle-outline" color={"gray"} size={25} />
      </TouchableOpacity> */}

      <AddLinkModal updateSocialMediaLinks={updateSocialMediaLinks} />

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
    // alignItems: "center",

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

export default SocialMediaLinks;
