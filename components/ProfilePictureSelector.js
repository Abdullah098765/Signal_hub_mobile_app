import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, Text, ActivityIndicatorBase, ActivityIndicator } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import useUpload from '../hooks/useUpload';

const ProfilePictureSelector = ({ formData, setFormData }) => {
      const [selectedImage, setSelectedImage] = useState(null);
      const [imageUploading, setImageUploading] = useState(false);
      const { handleSelectImage } = useUpload()

      const handleImageUpload = async () => {
            try {
                  setImageUploading(true);

                  // Assuming handleSelectImage is an asynchronous function that handles image selection
                  let imageUrl = await handleSelectImage();

                  // Update formData and selectedImage
                  setFormData((prevData) => ({ ...prevData, profilePicture: imageUrl }));
                  setSelectedImage(imageUrl);
            } catch (error) {
                  console.error('Error handling image upload:', error);
            } finally {
                  setImageUploading(false);
            }
      };



      return (
            <View style={{ alignItems: 'center', width: '100%', }}>
                  <View>
                        <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handleImageUpload()}>
                              {imageUploading ? (
                                    <View style={{
                                          width: 118,
                                          height: 118,
                                          justifyContent: "center"
                                    }}><ActivityIndicator style={{}} size="large" color="gray" /></View>
                              ) : (
                                    formData?.profilePicture && <Image
                                          source={{ uri: formData?.profilePicture }}
                                          style={{
                                                width: 110,
                                                height: 110,
                                                borderRadius: 1000,
                                                margin: 4,
                                                borderWidth: 2,
                                                borderColor: 'gray',
                                          }}
                                    />
                              )}
                              <Text style={{
                                    fontWeight: '500',
                                    color: '#111827',
                              }}>Profile Picture</Text>
                        </TouchableOpacity>
                  </View>
            </View>
      );
};

export default ProfilePictureSelector;
