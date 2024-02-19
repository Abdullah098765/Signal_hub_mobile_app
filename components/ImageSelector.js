import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import useUpload from '../hooks/useUpload';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ImageSelector = ({ imageUrl, setImageUrl }) => {
      const [imageLoading, setImageLoading] = useState(false);
      const { handleSelectImage } = useUpload()
      return (
            <>
                  {!imageLoading ? !imageUrl ? <TouchableOpacity onPress={async () => {
                        setImageLoading(true)
                        const url = await handleSelectImage()
                        setImageLoading(false)
                        setImageUrl(url)
                  }} style={styles.imageUploadButton}>
                        <Ionicons color={"gray"} size={20} name="image-outline" />


                  </TouchableOpacity> :
                        <TouchableOpacity onPress={() => setImageUrl(null)} style={styles.imageUploadButton}>

                              <Ionicons color={"gray"} size={20} name="checkmark" />
                        </TouchableOpacity> :
                        <ActivityIndicator color={'gray'} />

                  }
            </>
      );
}

const styles = StyleSheet.create({
      imageUploadButton: {

            backgroundColor: '#EDEDED',
            color: '#111827'

      },

})

export default ImageSelector;
