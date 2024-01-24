import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import ActionButtons from './ActionButtons';

const AdditionalInfo = ({ signal }) => {

      const [copyentry1, setCopyentry1] = useState('Copy');
      const [copyentry2, setCopyentry2] = useState('Copy');
      const [copytp1, setCopytp1] = useState('Copy');
      const [copytp2, setCopytp2] = useState('Copy');
      const [copytp3, setCopytp3] = useState('Copy');
      const [copysl, setCopysl] = useState('Copy');

      const handleCopyClick = async (value, name) => {
            try {
                  // Convert value to string before copying
                  const stringValue = String(value);
                  await Clipboard.setString(stringValue);

                  switch (name) {
                        case 'entry1':
                              setCopyentry1('Copied');
                              setTimeout(() => {
                                    setCopyentry1('Copy');
                              }, 1000);
                              break;
                        case 'entry2':
                              setCopyentry2('Copied');
                              setTimeout(() => {
                                    setCopyentry2('Copy');
                              }, 1000);
                              break;
                        case 'sl':
                              setCopysl('Copied');
                              setTimeout(() => {
                                    setCopysl('Copy');
                              }, 1000);
                              break;
                        case 'tp1':
                              setCopytp1('Copied');
                              setTimeout(() => {
                                    setCopytp1('Copy');
                              }, 1000);
                              break;
                        case 'tp2':
                              setCopytp2('Copied');
                              setTimeout(() => {
                                    setCopytp2('Copy');
                              }, 1000);
                              break;
                        case 'tp3':
                              setCopytp3('Copied');
                              setTimeout(() => {
                                    setCopytp3('Copy');
                              }, 1000);
                              break;
                        default:
                              break;
                  }
            } catch (error) {
                  console.error('Copy failed:', error);
            }
      };

      return (
            <View style={styles.container}>
                  <View style={styles.card}>
                        <View style={styles.gridContainer}>
                              <TouchableOpacity
                                    onPress={() => handleCopyClick(signal.entry1, 'entry1')}
                                    style={styles.gridItem}>
                                    <View style={styles.entryContainer}>
                                          <Text style={styles.label}>Entry 1</Text>
                                          <TouchableOpacity
                                                title={copyentry1}
                                                onPress={() => handleCopyClick(signal.entry1, 'entry1')}
                                                style={[
                                                      styles.copyButton,

                                                      { opacity: copyentry1 === 'Copied' ? 0 : 1 },

                                                ]}
                                          ><Text style={styles.copyButtonText}>{copyentry1}</Text></TouchableOpacity>
                                    </View>
                                    <Text style={styles.text}>{signal.entry1}</Text>
                              </TouchableOpacity>

                              <TouchableOpacity
                                    onPress={() => handleCopyClick(signal.entry2, 'entry2')}
                                    style={styles.gridItem}>
                                    <View style={styles.entryContainer}>
                                          <Text style={styles.label}>Entry 2</Text>
                                          <TouchableOpacity
                                                title={copyentry2}
                                                onPress={() => handleCopyClick(signal.entry2, 'entry2')}
                                                style={[
                                                      styles.copyButton,

                                                      { opacity: copyentry2 === 'Copied' ? 0 : 1 },

                                                ]}
                                          ><Text style={styles.copyButtonText}>{copyentry2}</Text></TouchableOpacity>
                                    </View>
                                    <Text style={styles.text}>{signal.entry2}</Text>
                              </TouchableOpacity>

                              <TouchableOpacity
                                    onPress={() => handleCopyClick(signal.stopLoss, 'sl')}
                                    style={styles.gridItem}>
                                    <View style={styles.entryContainer}>
                                          <Text style={styles.label}>Stop Loss</Text>
                                          <TouchableOpacity
                                                title={copysl}
                                                onPress={() => handleCopyClick(signal.stopLoss, 'sl')}
                                                style={[
                                                      styles.copyButton,

                                                      { opacity: copysl === 'Copied' ? 0 : 1 },

                                                ]}
                                          ><Text style={styles.copyButtonText}>{copysl}</Text></TouchableOpacity>
                                    </View>
                                    <Text style={styles.text}>{signal.stopLoss}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                    onPress={() => handleCopyClick(signal.takeProfit1, 'tp1')}
                                    style={styles.gridItem}>
                                    <View style={styles.entryContainer}>
                                          <Text style={styles.label}>Take Profit 1</Text>
                                          <TouchableOpacity
                                                title={copysl}
                                                onPress={() => handleCopyClick(signal.takeProfit1, 'tp1')}
                                                style={[
                                                      styles.copyButton,

                                                      { opacity: copytp1 === 'Copied' ? 0 : 1 },

                                                ]}
                                          ><Text style={styles.copyButtonText}>{copytp1}</Text></TouchableOpacity>
                                    </View>
                                    <Text style={styles.text}>{signal.takeProfit1}</Text>
                              </TouchableOpacity>

                              <TouchableOpacity
                                    onPress={() => handleCopyClick(signal.takeProfit2, 'tp2')}
                                    style={styles.gridItem}>
                                    <View style={styles.entryContainer}>
                                          <Text style={styles.label}>Take Profit 2</Text>
                                          <TouchableOpacity
                                                title={copysl}
                                                onPress={() => handleCopyClick(signal.takeProfit2, 'tp2')}
                                                style={[
                                                      styles.copyButton,

                                                      { opacity: copytp2 === 'Copied' ? 0 : 1 },

                                                ]}
                                          ><Text style={styles.copyButtonText}>{copytp2}</Text></TouchableOpacity>
                                    </View>
                                    <Text style={styles.text}>{signal.takeProfit2}</Text>
                              </TouchableOpacity>
                              <TouchableOpacity
                                    onPress={() => handleCopyClick(signal.takeProfit3, 'tp3')}
                                    style={styles.gridItem}>
                                    <View style={styles.entryContainer}>
                                          <Text style={styles.label}>Take Profit 3</Text>
                                          <TouchableOpacity
                                                onPress={() => handleCopyClick(signal.takeProfit3, 'tp3')}
                                                style={[
                                                      styles.copyButton,

                                                      { opacity: copytp3 === 'Copied' ? 0 : 1 },

                                                ]}
                                          ><Text style={styles.copyButtonText}>{copytp3}</Text></TouchableOpacity>
                                    </View>
                                    <Text style={styles.text}>{signal.takeProfit3}</Text>
                              </TouchableOpacity>
                              <View
                                    style={styles.gridItem}>
                                    <View style={styles.entryContainer}>
                                          <Text style={styles.label}>Market</Text>
                                    </View>
                                    <Text style={styles.text}>{signal.cryptoOrStock}</Text>
                              </View>
                              <View
                                    style={styles.gridItem}>
                                    <View style={styles.entryContainer}>
                                          <Text style={styles.label}>Long/Short</Text>
                                    </View>
                                    <Text style={styles.text}>{signal.longOrShort}</Text>
                              </View>

                              {/* Add the remaining grid items here */}

                        </View>
                        <ActionButtons signal={signal} />

                  </View>

            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            flex: 1,
            alignItems: 'center',
      },
      card: {
            width: '98%',
            backgroundColor: 'white',
            borderRadius: 8,
            shadowColor: '#000',
            shadowOffset: {
                  width: 0,
                  height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
            padding: 16,
            marginBottom: 5,
      },
      gridContainer: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
      },
      gridItem: {
            width: '48%', // Adjust the width as needed
            marginBottom: 16,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: 'gray',
            padding: 8
      },
      entryContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
      },
      label: {
            fontSize: 14,
            fontWeight: 'bold',
            color: "#111827"
      },
      copyButton: {
            backgroundColor: '#fff',
            color: 'black',
            padding: 4,
            borderRadius: 4,
      },
      copyButtonText: {
            color: "gray",
            fontSize: 13,

      },
      text: {
            fontSize: 18,
            color: "#111827"
      },
});

export default AdditionalInfo;
