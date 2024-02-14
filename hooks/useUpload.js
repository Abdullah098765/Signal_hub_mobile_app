import React from 'react';
import ImageCropPicker from 'react-native-image-crop-picker';
// import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import storage from '@react-native-firebase/storage';

const useUpload = () => {


      const handleSelectImage = async () => {
            try {
                  const image = await ImageCropPicker.openPicker({
                        cropping: true,
                  });
                  console.log(image);


                  // Create a reference to the storage service
                  const storageRef = storage().ref(`comment_images/${image.filename}`);

                  // Upload the image to Firebase Storage
                  await storageRef.putFile(image.path)

                  // Get the download URL for the uploaded image
                  const imageUrl = await storage().ref(`comment_images/${image.filename}`).getDownloadURL();
                  console.log(imageUrl);
                  return imageUrl
            } catch (error) {
            }
      };
      return {
            handleSelectImage
      }
}


export default useUpload;
