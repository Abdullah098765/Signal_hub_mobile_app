import React from 'react';
import { Modal, TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ImageModal = ({ urls, visible, setImageModalVisible }) => {

      return (
            <View style={styles.MainContainer}>
                  <Modal visible={visible} transparent={false} onRequestClose={() => setImageModalVisible(false)}>
                        <View style={styles.modalContainer}>
                              <TouchableOpacity style={styles.closeButton} onPress={() => setImageModalVisible(false)}>
                                    <Text><Ionicons name="close" color="#fff" size={15} />  </Text>
                              </TouchableOpacity>
                              <ImageViewer
                                    imageUrls={urls.map((url) => ({ url }))}
                                    enableSwipeDown={true}
                                    onSwipeDown={() => setImageModalVisible(false)}
                                    backgroundColor='#111827'
                                    enableImageZoom={true}
                                    style={{ flex: 1 }}
                                    pageAnimateStyle={{ backgroundColor: '#111827', width: "100%" }}
                                    

                              />
                        </View>
                  </Modal>
            </View>

      );
};

const styles = StyleSheet.create({
      modalContainer: {
            flex: 1,
            backgroundColor: '#fff',
      },
      closeButton: {
            position: 'absolute',
            top: 20,
            right: 20,
            color: "#000",
            zIndex: 100
            // Add styles for your close button or icon
      },
      MainContainer: {
            flex: 1,
            alignItems: 'center',
      },
});

export default ImageModal;
