import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { useAuth } from '../../hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import ProfilePictureSelector from '../../components/ProfilePictureSelector';
import SocialMediaLinks from '../../components/SocialMediaLinks';
import SignalPageSkeleton from '../../components/SkeletonPage';
import useUpdate from '../../hooks/useUpdate';

const EditProfileForm = () => {
      const { user } = useAuth()
      const [formData, setFormData] = useState(user);
      const [isSaving, setIsSaving] = useState(false);
      const { updateProfile } = useUpdate()
      const navigation = useNavigation()
      useEffect(() => {
            setFormData(user)
      }, [user]);

      const handleChange = (field, text) => {
            console.log(field, text);
            if (field === "displayName" || field === "bio" || field === "about") {
                  setFormData((prevFormData) => ({
                        ...prevFormData,
                        [field]: text,
                  }));
            }

            else {
                  setFormData((prevFormData) => ({
                        ...prevFormData,
                        personalInfo: {
                              ...prevFormData.personalInfo,
                              [field]: text,
                        },
                  }));

            }

      };


      const updateSocialMediaLinks = (title, url) => {
            setFormData((prevFormData) => ({
                  ...prevFormData,
                  personalInfo: {
                        ...prevFormData.personalInfo,
                        socialMediaLinks: [
                              ...prevFormData.personalInfo.socialMediaLinks,
                              { title, link: url },
                        ],
                  },
            }));
      };
      const removeSocialMediaLink = (index) => {
            setFormData((prevFormData) => ({
                  ...prevFormData,
                  personalInfo: {
                        ...prevFormData.personalInfo,
                        socialMediaLinks: prevFormData.personalInfo.socialMediaLinks.filter((_, i) => i !== index),
                  },
            }));
      };


      const handleSave = async () => {
            setIsSaving(true)
            var res = await updateProfile(formData)
            setIsSaving(false)
            navigation.navigate("UserProfile")
      };

      const handleReset = () => {
            setFormData(user)
      };

      if (!user) return <SignalPageSkeleton />
      return (
            <ScrollView style={{ marginTop: 45 }}>
                  <View style={styles.containerHeading}>
                        <Text style={styles.headingText}>Edit Profile</Text>

                  </View>

                  <View style={styles.container}>
                        <ProfilePictureSelector setFormData={setFormData} formData={formData} />
                        <Text style={styles.headings}>Hub Name *</Text>
                        <TextInput
                              onSubmitEditing={() => { }}
                              key={'Hub Name '}
                              placeholderTextColor='gray'
                              style={[styles.fullWidthInput]}
                              placeholder={'Hub (e.g., Signal Hub)'}
                              onChangeText={(text) => handleChange('displayName', text)}
                              value={formData?.displayName}

                        />
                        <Text style={styles.headings}>Bio</Text>
                        <TextInput
                              onSubmitEditing={() => { }}
                              key={'Bio'}
                              placeholderTextColor='gray'
                              style={[styles.fullWidthInput]}
                              placeholder={'Hub (e.g., Passionate about trading cryptocurrencies and stocks.)'}
                              onChangeText={(text) => handleChange('bio', text)}
                              value={formData?.bio}

                        />
                        <Text style={styles.headings}>Full name</Text>
                        <TextInput
                              onSubmitEditing={() => { }}
                              key={'Full name'}
                              placeholderTextColor='gray'
                              style={[styles.fullWidthInput]}
                              placeholder={'Hub (e.g., Sabir Ali)'}
                              onChangeText={(text) => handleChange("fullName", text)}
                              value={formData?.personalInfo?.fullName}
                        />
                        <Text style={styles.headings}>Age</Text>
                        <TextInput
                              onSubmitEditing={() => { }}
                              key={'age'}
                              placeholderTextColor='gray'
                              style={[styles.fullWidthInput]}
                              placeholder={'Age (e.g., 21 Years Old)'}
                              onChangeText={(text) => handleChange("age", text)}
                              value={formData?.personalInfo?.age}

                        />
                        <Text style={styles.headings}>Mobile</Text>
                        <TextInput
                              onSubmitEditing={() => { }}
                              key={'Mobile number'}
                              placeholderTextColor='gray'
                              style={[styles.fullWidthInput]}
                              placeholder={'Mobile Number'}
                              keyboardType={'phone-pad'}  // Set the keyboardType to 'phone-pad' for numerical input
                              onChangeText={(text) => handleChange("mobile", text)}
                              value={formData?.personalInfo?.mobile}  // Assuming you have a mobileNumber property in your user object
                        />




                        <Text style={[styles.headings]}>Email</Text>
                        <TextInput
                              onSubmitEditing={() => { }}
                              key={'Email'}
                              placeholderTextColor="gray"
                              style={[styles.fullWidthInput]}
                              placeholder={'Enter Email. . .'}
                              keyboardType={'email-address'}  // Set the keyboardType to 'email-address' for email input
                              onChangeText={(text) => handleChange("email", text)}
                              // onBlur={() => setExplainationError(!explaination)}
                              value={formData?.personalInfo?.email}
                        />

                        <Text style={styles.headings}>Languages</Text>
                        <TextInput
                              style={styles.fullWidthInput}
                              placeholder="Enter Your language"
                              placeholderTextColor="gray"
                              value={formData?.personalInfo?.languages}
                              onChangeText={(text) => handleChange("languages", text)}
                        />
                        <Text style={styles.headings}>Country</Text>
                        <TextInput
                              style={styles.fullWidthInput}
                              placeholder="Enter Your Country"
                              placeholderTextColor="gray"
                              value={formData?.personalInfo?.country}
                              onChangeText={(text) => handleChange("country", text)}
                        />
                        <Text style={[styles.headings]}>About</Text>
                        <TextInput
                              onSubmitEditing={() => { }}
                              key={'About'}
                              placeholderTextColor="gray"
                              style={[styles.fullWidthInput]}
                              placeholder={"Introduction to Your Trading Expertise"}
                              multiline={true} // Enable multiline for longer text
                              numberOfLines={4} // Set the number of lines you want to display
                              onChangeText={(text) => handleChange("about", text)}
                              // onBlur={() => setExplainationError(!explaination)}
                              value={formData?.about}
                        />
                        <View style={styles.pickerContainer}>

                              <Text style={[styles.headings, { marginTop: 5 }]}>Market</Text>
                              <Picker
                                    dropdownIconColor={"#111827"}
                                    selectedValue={formData?.personalInfo?.market}
                                    style={styles.fullWidthInput}
                                    onValueChange={(text) => handleChange("market", text)}
                              >
                                    <Picker.Item label="Crypto" value="Crypto" />
                                    <Picker.Item label="All" value="All Markets" />
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
                        <View style={{ backgroundColor: "gray", height: 0.7 }} />


                        <SocialMediaLinks removeSocialMediaLink={removeSocialMediaLink} updateSocialMediaLinks={updateSocialMediaLinks} socialMediaLinks={formData?.personalInfo.socialMediaLinks} />

                        <View style={{ flexDirection: 'row', gap: 5, flex: 1 }}>
                              <TouchableOpacity style={[styles.button, { backgroundColor: "darkred" }]} onPress={handleReset}>
                                    <Text style={styles.buttonText}>Reset</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.button} onPress={handleSave}>
                                    {isSaving ? <Text style={styles.buttonText}>Saving...</Text> : <Text style={styles.buttonText}>Save</Text>}
                              </TouchableOpacity>


                        </View>

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
            flex: 1,
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

export default EditProfileForm;

