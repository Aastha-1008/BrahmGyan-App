import React from 'react';
import { 
  View, 
  Image, 
  TouchableOpacity, 
  StyleSheet, 
  SafeAreaView,
  ScrollView,
  Platform
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomText from '@/components/shared/CustomText';

// Define navigation types
type ProfileStackParamList = {
  library: undefined;
  editProfile: undefined;
  aboutSatguruPanth: undefined;
  contactUs: undefined;
  notifications: undefined;
  loginPage: undefined;
};

type ProfileScreenNavigationProp = StackNavigationProp<ProfileStackParamList>;

interface ProfileProps {
  navigation: ProfileScreenNavigationProp;
}

const Profile: React.FC<ProfileProps> = ({ navigation }) => {
  const wishlist = () => {
    navigation.navigate('library');
  };

  const profile = () => {
    navigation.navigate('editProfile');
  };

  const aboutSatguruPanth = () => {
    navigation.navigate('aboutSatguruPanth');
  };

  const contactUs = () => {
    navigation.navigate('contactUs');
  };

  const notifications = () => {
    navigation.navigate('notifications');
  };

  const signOut = () => {
    // Add sign out logic here
    navigation.navigate('loginPage');
  };

  // Main render with SafeAreaView properly applied
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.header}>
            <Image
              source={require('@/assets/images/icon.png')} // Update with your actual image path
              style={styles.profileImage}
            />
            <View style={styles.headerTextContainer}>
              <CustomText variant="h5" fontFamily="Bold" style={styles.name}>
                Amish Mishra
              </CustomText>
              <View style={styles.statusContainer}>
                <View style={styles.statusDot} />
                <CustomText variant="h8" fontFamily="Regular" style={styles.status}>
                  Active
                </CustomText>
              </View>
            </View>
          </View>

          <View style={styles.profileCard}>
            <TouchableOpacity style={styles.optionContainer}>
              <View style={styles.optionIconContainer}>
                <MaterialIcons name="location-on" size={22} color="#000" />
              </View>
              <CustomText variant="h6" fontFamily="Medium" style={styles.optionText}>
                Delhi in India
              </CustomText>
              <CustomText variant="h7" fontFamily="Medium" style={styles.optionAction}>
                Update
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer} onPress={profile}>
              <View style={styles.optionIconContainer}>
                <MaterialIcons name="person" size={22} color="#000" />
              </View>
              <CustomText variant="h6" fontFamily="Medium" style={styles.optionText}>
                Profile
              </CustomText>
              <MaterialIcons name="chevron-right" size={22} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer} onPress={wishlist}>
              <View style={styles.optionIconContainer}>
                <MaterialIcons name="favorite" size={22} color="#000" />
              </View>
              <CustomText variant="h6" fontFamily="Medium" style={styles.optionText}>
                Wishlist
              </CustomText>
              <CustomText variant="h7" fontFamily="Regular" style={styles.optionAction}>
                3 Books in Wishlist
              </CustomText>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.profileCard}>
            <TouchableOpacity style={styles.optionContainer} onPress={aboutSatguruPanth}>
              <View style={styles.optionIconContainer}>
                <MaterialIcons name="info" size={22} color="#000" />
              </View>
              <CustomText variant="h6" fontFamily="Medium" style={styles.optionText}>
                About Satguru Panth
              </CustomText>
              <MaterialIcons name="chevron-right" size={22} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.optionContainer} 
              onPress={notifications}
            >
              <View style={styles.optionIconContainer}>
                <MaterialIcons name="notifications" size={22} color="#000" />
              </View>
              <CustomText variant="h6" fontFamily="Medium" style={styles.optionText}>
                Notification Settings
              </CustomText>
              <MaterialIcons name="chevron-right" size={22} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer} onPress={contactUs}>
              <View style={styles.optionIconContainer}>
                <MaterialIcons name="phone" size={22} color="#000" />
              </View>
              <CustomText variant="h6" fontFamily="Medium" style={styles.optionText}>
                Contact Us
              </CustomText>
              <MaterialIcons name="chevron-right" size={22} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionContainer}>
              <View style={styles.optionIconContainer}>
                <MaterialIcons name="share" size={22} color="#000" />
              </View>
              <CustomText variant="h6" fontFamily="Medium" style={styles.optionText}>
                Share this App
              </CustomText>
              <CustomText variant="h7" fontFamily="Regular" style={styles.optionAction}>
                Share with friends
              </CustomText>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.signOutButton} onPress={signOut}>
            <MaterialIcons name="exit-to-app" size={22} color="white" />
            <CustomText variant="h6" fontFamily="Bold" style={styles.signOutText}>
              Sign out
            </CustomText>
          </TouchableOpacity>

          <View style={styles.versionContainer}>
            <CustomText variant="h8" fontFamily="Regular" style={styles.versionText}>
              Version 1.0.0
            </CustomText>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'ios' ? 0 : 25, // Only add top padding on Android
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 15,
    borderWidth: 2,
    borderColor: '#fff',
  },
  name: {
    color: '#000',
    marginBottom: 4,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'green',
    marginRight: 5,
  },
  status: {
    color: '#666',
  },
  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 5,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  optionIconContainer: {
    width: 36,
    height: 36,
    backgroundColor: '#f0f0f0',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  optionText: {
    flex: 1,
    color: '#000',
  },
  optionAction: {
    color: '#666',
  },
  divider: {
    height: 15,
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 15,
  },
  signOutText: {
    color: 'white',
    marginLeft: 8,
  },
  versionContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  versionText: {
    color: '#666',
  }
});

export default Profile;