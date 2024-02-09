import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import useAction from '../../hooks/useAction';
import { useAuth } from '../../hooks/useAuth';

const GoodBadButtons = ({ signal }) => {

      const { handleGoodClick, handleNeutralClick, handleBadClick } = useAction()
      const { user } = useAuth()
      const [currentVote, setCurrentVote] = useState(null);
      const beenGoodColor = currentVote !== 'good' ? { backgroundColor: '#fff', borderWidth: 1, borderColor: '#1B5E20' } : { backgroundColor: '#1B5E20', borderWidth: 1, borderColor: '#fff' }
      const neutraledColor = currentVote !== 'neutral' ? { backgroundColor: '#fff', borderWidth: 1, borderColor: '#0D47A1' } : { backgroundColor: '#0D47A1', borderWidth: 1, borderColor: '#fff' }
      const beenBadColor = currentVote !== 'bad' ? { backgroundColor: '#fff', borderWidth: 1, borderColor: '#B71C1C' } : { backgroundColor: '#B71C1C', borderWidth: 1, borderColor: '#fff' }

      useEffect(() => {


            if (signal?.good?.indexOf(user._id) !== -1) {
                  setCurrentVote('good')
            }
            if (signal?.neutral?.indexOf(user._id) !== -1) {
                  setCurrentVote('neutral')
            }
            if (signal?.bad?.indexOf(user._id) !== -1) {
                  setCurrentVote('bad')
            }
      }, [signal])
      return (
            <View style={styles.container}>
                  <TouchableOpacity onPress={() => handleGoodClick(signal._id, user?._id, setCurrentVote, currentVote)} style={[styles.button, beenGoodColor]}>
                        <Text style={[styles.buttonText, { color: beenGoodColor.borderColor }]}>Good Signal</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => handleNeutralClick(signal._id, user?._id, setCurrentVote, currentVote)} style={[styles.button, neutraledColor]}>
                        <Text style={[styles.buttonText, { color: neutraledColor.borderColor }]}>Neutral Signal</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => handleBadClick(signal._id, user?._id, setCurrentVote, currentVote)} style={[styles.button, beenBadColor]}>
                        <Text style={[styles.buttonText, { color: beenBadColor.borderColor }]}>Bad Signal</Text>
                  </TouchableOpacity>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: 20,
            gap: 10
      },
      button: {
            flex: 1,
            padding: 10,
            borderRadius: 8,
            alignItems: 'center',
      },
      buttonText: {
            fontSize: 14,
            color: "#fff"
      },
});

export default GoodBadButtons;
