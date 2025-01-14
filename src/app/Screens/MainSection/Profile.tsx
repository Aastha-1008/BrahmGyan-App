import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Profile = ({navigation}:any) => {

  const wishlist=()=>{
    navigation.navigate('library')
  }

  const profile = () => {
    console.log("i");
    navigation.navigate('editProfile')
  }

  const aboutSatguruPanth = () => {
    navigation.navigate('aboutSatguruPanth')
  }

  const  contactUs = () => {
    navigation.navigate('contactUs')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/Amish.png')}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Amish Mishra</Text>
        <View style={styles.statusContainer}>
          <View style={styles.statusDot} />
          <Text style={styles.status}>Active</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.optionContainer}>
        <View style={styles.optionIcon}>
          <MaterialIcons name="location-on" size={24} color="black" />
        </View>
        <Text style={styles.optionText}>Delhi in India</Text>
        <Text style={styles.optionAction}>Update</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={profile}>
        <View style={styles.optionIcon}>
          <MaterialIcons name="person" size={24} color="black" />
        </View>
        <Text style={styles.optionText}>Profile</Text>
        <MaterialIcons name="chevron-right" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={wishlist}>
        <View style={styles.optionIcon}>
          <MaterialIcons name="favorite" size={24} color="black" />
        </View>
        <Text style={styles.optionText}>Wishlist</Text>
        <Text style={styles.optionAction}>3 Books in Wishlist</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer} onPress={aboutSatguruPanth}>
        <View style={styles.optionIcon}>
          <MaterialIcons name="info" size={24} color="black" />
        </View>
        <Text style={styles.optionText}>About Satguru Panth</Text>
        <MaterialIcons name="chevron-right" size={24} color="black" />
      </TouchableOpacity>


      {/* Add more options similarly */}

      <TouchableOpacity style={styles.optionContainer}>
        <View style={styles.optionIcon}>
          <MaterialIcons name="notifications" size={24} color="black" />
        </View>
        <Text style={styles.optionText}>Notification Settings</Text>
        <MaterialIcons name="chevron-right" size={24} color="black" />
      </TouchableOpacity>

      {/* ... other options ... */}

      <TouchableOpacity style={styles.optionContainer} onPress={contactUs}>
        <View style={styles.optionIcon}>
          <MaterialIcons name="phone" size={24} color="black" />
        </View>
        <Text style={styles.optionText}>Contact Us</Text>
        <MaterialIcons name="chevron-right" size={24} color="black" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionContainer}>
        <View style={styles.optionIcon}>
          <MaterialIcons name="share" size={24} color="black" />
        </View>
        <Text style={styles.optionText}>Share this App</Text>
        <Text style={styles.optionAction}>Need to Add App link here in future</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signOutButton}>
        <MaterialIcons name="exit-to-app" size={24} color="white" />
        <Text style={styles.signOutText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
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
    color: 'gray',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionIcon: {
    marginRight: 15,
  },
  optionText: {
    flex: 1,
  },
  optionAction: {
    color: 'blue',
  },
  signOutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  signOutText: {
    color: 'white',
    marginLeft: 5,
  },
});

export default Profile;