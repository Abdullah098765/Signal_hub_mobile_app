import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import useAction from '../../hooks/useAction';
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';

const CreateSignalForm = () => {
      const { user } = useAuth()
      const [pair, setPair] = useState('');
      const [explaination, setExplaination] = useState('');
      const [entry1, setEntry1] = useState('');
      const [entry2, setEntry2] = useState('');
      const [takeProfit1, setTakeProfit1] = useState('');
      const [takeProfit2, setTakeProfit2] = useState('');
      const [takeProfit3, setTakeProfit3] = useState('');
      const [stopLoss, setStopLoss] = useState('');
      const [duration, setDuration] = useState(Date.now() + 8.64e+7);
      const [market, setMarket] = useState('Crypto');
      const [longShort, setLongShort] = useState('Long');

      const [pairError, setPairError] = useState(false);
      const [explainationError, setExplainationError] = useState(false);
      const [entry1Error, setEntry1Error] = useState(false);
      const [entry2Error, setEntry2Error] = useState(false);
      const [takeProfit1Error, setTakeProfit1Error] = useState(false);
      const [takeProfit2Error, setTakeProfit2Error] = useState(false);
      const [takeProfit3Error, setTakeProfit3Error] = useState(false);
      const [stopLossError, setStopLossError] = useState(false);
      const [selectedDuration, setSelectedDuration] = useState('1d'); // Default duration
      const [isSignalPosting, setIsSignalPosting] = useState(false);

      const { handleSignalSubmit } = useAction()

      const handlePairChange = (text) => {
            console.log(text);
            setPair(text.toUpperCase());
            setPairError(false);
      };
      const navigation = useNavigation()

      const handleNumericInputChange = (fieldName, text) => {
            // Remove non-numeric characters except for a single decimal point
            const numericValue = text.replace(/[^0-9.]/g, '');

            // Ensure there's only one decimal point
            const decimalCount = numericValue.split('.').length - 1;
            if (decimalCount > 1) return;

            // Set the state based on the field name
            switch (fieldName) {
                  case 'Entry 1':
                        setEntry1(numericValue);
                        setEntry1Error(false);
                        break;
                  case 'Entry 2':
                        setEntry2(numericValue);
                        setEntry2Error(false);
                        break;
                  case 'Take Profit 1':
                        setTakeProfit1(numericValue);
                        setTakeProfit1Error(false);
                        break;
                  case 'Take Profit 2':
                        setTakeProfit2(numericValue);
                        setTakeProfit2Error(false);

                        break;
                  case 'Take Profit 3':
                        setTakeProfit3(numericValue);
                        setTakeProfit3Error(false);

                        break;
                  case 'Stop Loss':
                        setStopLoss(numericValue);
                        setStopLossError(false);

                        break;
                  default:
                        break;
            }
      };

      const handleSubmit = async () => {
            // Validate input fields on submit
            if (!pair) setPairError(true);
            if (!explaination) setExplainationError(true);
            if (!entry1) setEntry1Error(true);
            if (!entry2) setEntry2Error(true);
            if (!takeProfit1) setTakeProfit1Error(true);
            if (!takeProfit2) setTakeProfit2Error(true);
            if (!takeProfit3) setTakeProfit3Error(true);
            if (!stopLoss) setStopLossError(true);
            if (!duration) setDurationError(true);
            if (!market) setMarketError(true);
            if (!longShort) setLongShortError(true);

            // If any field is empty, stop submission
            if (
                  !pair ||
                  !explaination ||
                  !entry1 ||
                  !entry2 ||
                  !takeProfit1 ||
                  !takeProfit2 ||
                  !takeProfit3 ||
                  !stopLoss ||
                  !duration ||
                  !market ||
                  !longShort
            ) {
                  console.log('Please fill in all required fields.');
                  return;
            }

            // Proceed with form submission if all fields are filled


            const signalData = {
                  pair,
                  explanation: explaination,
                  entry1,
                  entry2,
                  takeProfit1,
                  takeProfit2,
                  takeProfit3,
                  stopLoss,
                  cryptoOrStock: market,
                  duration,
                  longOrShort: longShort,
                  signalProvider: user._id,
                  status: 'Active'
            };

            const signal = await handleSignalSubmit(signalData, setIsSignalPosting)
            if (signal) {
                  setPair('')
                  setExplaination("")
                  setEntry1('')
                  setEntry2('')
                  setTakeProfit1('')
                  setTakeProfit2('')
                  setTakeProfit3('')
                  setStopLoss('')
                  setMarket("Crypto")
                  setSelectedDuration("1d")
                  setDuration(Date.now() + 8.64e+7)
                  setLongShort("Long")
                  setStopLossError(false)
                  navigation.navigate('Signal', { signalId: signal._id });
            }

            console.log({
                  pair,
                  explaination,
                  entry1,
                  entry2,
                  takeProfit1,
                  takeProfit2,
                  takeProfit3,
                  stopLoss,
                  duration,
                  longShort,
                  market
            });
      };

      const inputFields = ['Entry 1', 'Entry 2', 'Take Profit 1', 'Take Profit 2', 'Take Profit 3', 'Stop Loss'];

      const pairInputRef = React.useRef();
      const explanationInputRef = React.useRef();
      const numericInputRefs = inputFields.map(() => React.useRef());

      const focusNextInputField = (fieldName) => {
            switch (fieldName) {
                  case 'Pair':
                        explanationInputRef.current.focus();
                        break;
                  case 'Explanation':
                        numericInputRefs[0].current.focus();
                        break;
                  default:
                        // Find the index of the current field in inputFields array
                        const currentIndex = inputFields.indexOf(fieldName);
                        // If the current field is not the last one, focus on the next numeric input
                        if (currentIndex < inputFields.length - 1) {
                              numericInputRefs[currentIndex + 1].current.focus();
                        } else {
                              // If the current field is the last one, focus on the Duration input
                              // You can adjust this logic based on your form structure
                        }
                        break;
            }
      };
      const getFieldValue = (fieldName) => {
            switch (fieldName) {
                  case 'Pair':
                        return pair;
                  case 'Entry 1':
                        return entry1;
                  case 'Entry 2':
                        return entry2;
                  case 'Take Profit 1':
                        return takeProfit1;
                  case 'Take Profit 2':
                        return takeProfit2;
                  case 'Take Profit 3':
                        return takeProfit3;
                  case 'Stop Loss':
                        return stopLoss;
                  // Add more cases as needed
                  default:
                        return '';
            }
      };
      const setNumericInputError = (fieldName, value) => {
            switch (fieldName) {
                  case 'Pair':
                        setPairError(value);
                        break;
                  case 'Entry 1':
                        setEntry1Error(value);
                        break;
                  case 'Entry 2':
                        setEntry2Error(value);
                        break;
                  case 'Take Profit 1':
                        setTakeProfit1Error(value);
                        break;
                  case 'Take Profit 2':
                        setTakeProfit2Error(value);
                        break;
                  case 'Take Profit 3':
                        setTakeProfit3Error(value);
                        break;
                  case 'Stop Loss':
                        setStopLossError(value);
                        break;
                  // Add more cases as needed
                  default:
                        break;
            }
      };

      const numericInputError = (fieldName) => {
            switch (fieldName) {
                  case 'Pair':
                        return pairError;
                  case 'Entry 1':
                        return entry1Error;
                  case 'Entry 2':
                        return entry2Error;
                  case 'Take Profit 1':
                        return takeProfit1Error;
                  case 'Take Profit 2':
                        return takeProfit2Error;
                  case 'Take Profit 3':
                        return takeProfit3Error;
                  case 'Stop Loss':
                        return stopLossError;
                  // Add more cases as needed
                  default:
                        return false;
            }
      };


      const handleDurationChange = (itemValue, itemIndex) => {
            setSelectedDuration(itemValue);
            const _durationTimestamp = calculateTimestamp(itemValue);
            setDuration(_durationTimestamp);
            console.log('Selected Duration Timestamp: ', _durationTimestamp - Date.now());
            // You can save this timestamp in your state or use it as needed in your application.
      };

      const calculateTimestamp = (selectedValue) => {
            // Convert the selected duration to milliseconds
            let milliseconds = 0;

            if (selectedValue.endsWith('m')) {
                  const minutes = parseInt(selectedValue, 10);
                  milliseconds = minutes * 60 * 1000;
            } else if (selectedValue.endsWith('h')) {
                  const hours = parseInt(selectedValue, 10);
                  milliseconds = hours * 60 * 60 * 1000;
            } else if (selectedValue.endsWith('d')) {
                  const days = parseInt(selectedValue, 10);
                  milliseconds = days * 24 * 60 * 60 * 1000;
            } else if (selectedValue.endsWith('M')) {
                  const months = parseInt(selectedValue, 10);
                  milliseconds = months * 30 * 24 * 60 * 60 * 1000; // Assuming an average month has 30 days
            } else if (selectedValue.endsWith('y')) {
                  const years = parseInt(selectedValue, 10);
                  milliseconds = years * 365 * 24 * 60 * 60 * 1000; // Assuming a year has 365 days
            } else {
                  // Handle other cases or throw an error for unsupported values
            }

            // Calculate the current timestamp + selected duration
            const currentTimestamp = Date.now();
            const durationTimestamp = currentTimestamp + milliseconds;

            return durationTimestamp;
      };
      const handleMarketChange = (itemValue) => {
            setMarket(itemValue);
            // Handle other logic if needed
      };

      const handleTypeChange = (itemValue) => {
            setLongShort(itemValue);
            // Handle other logic if needed
      };
      return (

            <ScrollView style={{ marginTop: 45 }}>
                  <View style={styles.containerHeading}>
                        <Text style={styles.headingText}>Create A New Signal</Text>
                  </View>
                  <View style={styles.container}>
                        <Text style={[styles.headings, pairError && styles.errorText]}>Pair *</Text>
                        <TextInput
                              ref={pairInputRef}
                              onSubmitEditing={() => focusNextInputField('Pair')}
                              key={'Pair'}
                              placeholderTextColor={pairError ? "red" : 'gray'}
                              style={[styles.fullWidthInput, pairError && styles.errorInput]}
                              placeholder={'Pair (e.g., BTC/USDT)'}
                              onChangeText={(text) => handlePairChange(text)}
                              value={pair}
                              onBlur={() => setPairError(!pair)}

                        />
                        <Text style={[styles.headings, explainationError && styles.errorText]}>Signal Explanation *</Text>
                        <TextInput
                              ref={explanationInputRef}
                              onSubmitEditing={() => focusNextInputField('Explanation')}
                              key={'Explanation'}
                              placeholderTextColor={explainationError ? 'red' : "gray"}
                              style={[styles.fullWidthInput, { height: 70, textAlignVertical: 'top' }, explainationError && styles.errorInput]}
                              placeholder={'Enter Signal Explanation . . .'}
                              onChangeText={(text) => {
                                    setExplaination(text)
                                    setExplainationError(false)
                              }}
                              onBlur={() => setExplainationError(!explaination)}
                              value={explaination}
                              multiline
                        />
                        {inputFields.map((fieldName, index) => (
                              <React.Fragment key={fieldName}>
                                    <Text style={[styles.headings, numericInputError(fieldName) && styles.errorText]}>{fieldName + ' *'}</Text>
                                    <TextInput
                                          ref={numericInputRefs[index]}
                                          onSubmitEditing={() => focusNextInputField(fieldName)}
                                          key={fieldName}
                                          placeholderTextColor={!numericInputError(fieldName) ? "gray" : "red"}
                                          style={[styles.fullWidthInput, numericInputError(fieldName) && styles.errorInput]}
                                          placeholder={fieldName}
                                          value={
                                                fieldName === 'Pair'
                                                      ? pair
                                                      : fieldName === 'Entry 1'
                                                            ? entry1
                                                            : fieldName === 'Entry 2'
                                                                  ? entry2
                                                                  : fieldName === 'Take Profit 1'
                                                                        ? takeProfit1
                                                                        : fieldName === 'Take Profit 2'
                                                                              ? takeProfit2
                                                                              : fieldName === 'Take Profit 3'
                                                                                    ? takeProfit3
                                                                                    : fieldName === 'Stop Loss'
                                                                                          ? stopLoss
                                                                                          : ''
                                          }
                                          onChangeText={(text) => handleNumericInputChange(fieldName, text)}
                                          keyboardType="numeric"
                                          onBlur={() => setNumericInputError(fieldName, !getFieldValue(fieldName))}
                                    />
                              </React.Fragment>
                        ))}


                        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: -10 }}>
                              <View style={styles.pickerContainer}>
                                    <Text style={[styles.headings, { marginTop: 5 }]}>Duration</Text>
                                    <Picker
                                          dropdownIconColor={"#111827"}
                                          selectedValue={selectedDuration}
                                          style={[styles.fullWidthInput, { color: "black" }]}
                                          itemStyle={{ color: "#111827", backgroundColor: "red" }}
                                          onValueChange={handleDurationChange}>
                                          <Picker.Item label="10 minutes" value="10m" />
                                          <Picker.Item label="30 minutes" value="30m" />
                                          <Picker.Item label="1 hour" value="1h" />
                                          <Picker.Item label="2 hours" value="2h" />
                                          <Picker.Item label="4 hours" value="4h" />
                                          <Picker.Item label="6 hours" value="6h" />
                                          <Picker.Item label="12 hours" value="12h" />
                                          <Picker.Item label="1 day" value="1d" />
                                          <Picker.Item label="3 days" value="3d" />
                                          <Picker.Item label="7 days" value="7d" />
                                          <Picker.Item label="30 days" value="30d" />
                                          <Picker.Item label="2 months" value="2M" />
                                          <Picker.Item label="3 months" value="3M" />
                                          <Picker.Item label="6 months" value="6M" />
                                          <Picker.Item label="1 year" value="1y" />
                                    </Picker>
                              </View>
                              <View style={{ backgroundColor: "gray", width: 0.7 }} />

                              <View style={styles.pickerContainer}>

                                    <Text style={[styles.headings, { marginTop: 5 }]}>Market</Text>
                                    <Picker
                                          dropdownIconColor={"#111827"}
                                          selectedValue={market}
                                          style={styles.fullWidthInput}
                                          onValueChange={handleMarketChange}>
                                          <Picker.Item label="Crypto" value="Crypto" />
                                          {/* <Picker.Item label="All" value="All Markets" /> */}
                                          <Picker.Item label="Currency" value="Currency" />
                                          <Picker.Item label="Stock" value="Stock" />
                                          <Picker.Item label="Gold" value="Gold" />
                                          <Picker.Item label="Commodities" value="Commodities" />
                                          <Picker.Item label="Indices" value="Indices" />
                                          <Picker.Item label="Bonds" value="Bonds" />
                                          <Picker.Item label="Options" value="Options" />
                                          <Picker.Item label="ETFs" value="ETFs" />
                                          <Picker.Item label="Cryptocurrency Pairs" value="Crypto Pairs" />
                                          <Picker.Item label="Forex Crosses" value="Forex Crosses" />
                                          <Picker.Item label="Precious Metals" value="Precious Metals" />

                                    </Picker>
                              </View>
                              <View style={{ backgroundColor: "gray", width: 0.7 }} />
                              <View style={styles.pickerContainer}>

                                    <Text style={[styles.headings, { marginTop: 5 }]}>Type</Text>
                                    <Picker
                                          selectedValue={longShort}
                                          dropdownIconColor={"#111827"}

                                          style={styles.fullWidthInput}
                                          onValueChange={handleTypeChange}>
                                          <Picker.Item label="Long" value="Long" />
                                          <Picker.Item label="Short" value="Short" />
                                    </Picker>

                              </View>
                        </View>
                        <View style={{ backgroundColor: "gray", height: 0.7 }} />

                        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                              {isSignalPosting ? <Text style={styles.buttonText}>Posting</Text> : <Text style={styles.buttonText}>Post Signal</Text>}
                        </TouchableOpacity>
                  </View>

            </ScrollView>
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

export default CreateSignalForm;

