import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  Alert,
  Dimensions
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomText from '@/components/shared/CustomText';

const { width } = Dimensions.get('window');

// Define types
type ProfileStackParamList = {
  profile: undefined;
};

type EditProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList>;

interface EditProfileProps {
  navigation: EditProfileScreenNavigationProp;
}

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  pincode: string;
  city: string;
  profileImage: any;
}

// Mock function to look up city based on PIN code
const lookupCityByPincode = (pincode: string): Promise<string> => {
  // This would be replaced with an actual API call to an Indian PIN code service
  return new Promise((resolve) => {
    setTimeout(() => {
      // Mock data for demonstration
      const pincodeMap: { [key: string]: string } = {
        '110001': 'New Delhi',
        '400001': 'Mumbai',
        '700001': 'Kolkata',
        '600001': 'Chennai',
        '500001': 'Hyderabad',
        '380001': 'Ahmedabad',
        '226001': 'Lucknow'
      };
      
      resolve(pincodeMap[pincode] || '');
    }, 500);
  });
};

const EditProfile: React.FC<EditProfileProps> = ({ navigation }) => {
  const [profile, setProfile] = useState<UserProfile>({
    name: 'Amish Mishra',
    email: 'amish.mishra@example.com',
    phone: '9876543210',
    pincode: '110001',
    city: 'New Delhi',
    profileImage: require('@/assets/images/icon.png') // Default image
  });

  const [isLoading, setIsLoading] = useState(false);

  // Handle PIN code change and lookup city
  const handlePincodeChange = async (pincode: string) => {
    setProfile({
      ...profile,
      pincode,
      city: ''
    });

    if (pincode.length === 6) {
      setIsLoading(true);
      try {
        const city = await lookupCityByPincode(pincode);
        setProfile(prev => ({
          ...prev,
          city
        }));
      } catch (error) {
        console.error('Error looking up city:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Simple image picker without expo-image-picker
  const pickImage = () => {
    Alert.alert(
      "Change Profile Picture",
      "This would open your device's photo gallery.",
      [{ text: "OK" }]
    );
  };

  // Function to save profile data
  const saveProfile = () => {
    // Validate fields
    if (!profile.name.trim()) {
      Alert.alert('Error', 'Name is required');
      return;
    }
    
    if (!profile.phone.trim() || !/^\d{10}$/.test(profile.phone)) {
      Alert.alert('Error', 'Please enter a valid 10-digit phone number');
      return;
    }
    
    if (profile.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    
    // Save profile and navigate back
    // In a real app, you would save this to a database or API
    Alert.alert(
      'Success',
      'Profile updated successfully!',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack()
        }
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardAvoidView}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <MaterialIcons name="arrow-back" size={24} color="#000" />
            </TouchableOpacity>
            <CustomText variant="h5" fontFamily="Bold" style={styles.headerTitle}>
              Edit Profile
            </CustomText>
            <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
              <CustomText variant="h6" fontFamily="Bold" style={styles.saveButtonText}>
                Save
              </CustomText>
            </TouchableOpacity>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.profileImageContainer}>
              <Image
                source={profile.profileImage}
                style={styles.profileImage}
              />
              <TouchableOpacity style={styles.editImageButton} onPress={pickImage}>
                <MaterialIcons name="camera-alt" size={20} color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.formContainer}>
              {/* Name Input */}
              <View style={styles.inputContainer}>
                <CustomText variant="h6" fontFamily="Medium" style={styles.inputLabel}>
                  Full Name
                </CustomText>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your full name"
                  value={profile.name}
                  onChangeText={(text) => setProfile({...profile, name: text})}
                  maxLength={50}
                />
              </View>

              {/* Email Input */}
              <View style={styles.inputContainer}>
                <CustomText variant="h6" fontFamily="Medium" style={styles.inputLabel}>
                  Email Address
                </CustomText>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your email"
                  value={profile.email}
                  onChangeText={(text) => setProfile({...profile, email: text})}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Phone Input - FIXED LAYOUT */}
              <View style={styles.inputContainer}>
                <CustomText variant="h6" fontFamily="Medium" style={styles.inputLabel}>
                  Phone Number
                </CustomText>
                <View style={styles.phoneInputContainer}>
                  <View style={styles.countryCode}>
                    <CustomText variant="h6" fontFamily="Medium" style={styles.countryCodeText}>
                      +91
                    </CustomText>
                  </View>
                  <View style={styles.phoneInputWrapper}>
                    <TextInput
                      style={styles.phoneInput}
                      placeholder="Enter your phone number"
                      value={profile.phone}
                      onChangeText={(text) => setProfile({...profile, phone: text})}
                      keyboardType="phone-pad"
                      maxLength={10}
                    />
                  </View>
                </View>
              </View>

              {/* PIN Code Input */}
              <View style={styles.inputContainer}>
                <CustomText variant="h6" fontFamily="Medium" style={styles.inputLabel}>
                  PIN Code
                </CustomText>
                <TextInput
                  style={styles.textInput}
                  placeholder="Enter your 6-digit PIN code"
                  value={profile.pincode}
                  onChangeText={handlePincodeChange}
                  keyboardType="number-pad"
                  maxLength={6}
                />
              </View>

              {/* City Display */}
              <View style={styles.inputContainer}>
                <CustomText variant="h6" fontFamily="Medium" style={styles.inputLabel}>
                  City
                </CustomText>
                <View style={styles.cityDisplay}>
                  {isLoading ? (
                    <CustomText variant="h6" fontFamily="Regular" style={styles.cityText}>
                      Looking up city...
                    </CustomText>
                  ) : profile.city ? (
                    <CustomText variant="h6" fontFamily="Regular" style={styles.cityText}>
                      {profile.city}
                    </CustomText>
                  ) : (
                    <CustomText variant="h6" fontFamily="Regular" style={styles.placeholderText}>
                      City will appear based on PIN code
                    </CustomText>
                  )}
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  keyboardAvoidView: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    color: '#000',
  },
  saveButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  saveButtonText: {
    color: '#000',
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#fff',
  },
  editImageButton: {
    position: 'absolute',
    bottom: 0,
    right: width / 2 - 60,
    backgroundColor: '#000',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  formContainer: {
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  inputContainer: {
    marginBottom: 16,
  },
  inputLabel: {
    marginBottom: 8,
    color: '#000',
  },
  textInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%', // Ensure full width
  },
  countryCode: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginRight: 8,
    width: 60, // Fixed width
    justifyContent: 'center',
    alignItems: 'center',
  },
  countryCodeText: {
    color: '#000',
  },
  phoneInputWrapper: {
    flex: 1, // Take remaining space
  },
  phoneInput: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
  },
  cityDisplay: {
    backgroundColor: '#eee',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cityText: {
    color: '#000',
  },
  placeholderText: {
    color: '#999',
  },
});

export default EditProfile;