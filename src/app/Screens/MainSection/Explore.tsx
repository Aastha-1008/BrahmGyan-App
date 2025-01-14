import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  TextInput, 
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Find your best book</Text>
        <View style={styles.profileContainer}>
          <Image 
            source={require('../../../assets/images/Amish.png')} 
            style={styles.profileImage} 
          />
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput 
          style={styles.searchInput} 
          placeholder="Search book" 
          placeholderTextColor="#888" 
        />
        <TouchableOpacity style={styles.searchButton}>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      <View style={styles.continueReadingContainer}>
        <Text style={styles.sectionTitle}>Continue Reading</Text>
        <TouchableOpacity style={styles.bookContainer}>
          <Image 
            source={require('../../../assets/images/icon.png')} 
            style={styles.bookCover} 
          />
          <View style={styles.bookDetails}>
            <Text style={styles.bookTitle}>Aatmbodh Mala</Text>
            <Text style={styles.bookSeason}>Chapter 4 of 5</Text>
          </View>
          <View style={styles.bookProgressContainer}>
            <Text style={styles.bookProgress}>30%</Text>
          </View>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      </View>

      <View style={styles.recommendedContainer}>
        <Text style={styles.sectionTitle}>Recommended for you</Text>
        <View style={styles.booksRow}>
          <TouchableOpacity style={styles.bookContainer}>
            <Image 
              source={require('../../../assets/images/book.png')} 
              style={styles.bookCover} 
            />
            <Text style={styles.bookTitle}>Good Enough</Text>
            <Text style={styles.bookAuthor}>Janelle Monáe</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookContainer}>
            <Image 
              source={require('../../../assets/images/cartoon.png')} 
              style={styles.bookCover} 
            />
            <Text style={styles.bookTitle}>Of White and Shady</Text>
            <Text style={styles.bookAuthor}>Robert Wiersema</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bookContainer}>
            <Image 
              source={require('../../../assets/images/avatar.png')} 
              style={styles.bookCover} 
            />
            <Text style={styles.bookTitle}>A Minor Fall from Grace</Text>
            <Text style={styles.bookAuthor}>Joyce Carol Oates</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Show More</Text> 
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden', 
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  searchButton: {
    backgroundColor: '#000', 
    borderRadius: 5,
    padding: 8,
  },
  continueReadingContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  bookCover: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
  bookDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookTitle: {
    fontWeight: 'bold',
  },
  bookSeason: {
    color: '#888',
  },
  bookProgressContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  bookProgress: {
    color: '#fff',
  },
  continueButton: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  continueButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight:'bold',
  },
  booksRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendedContainer: {
    marginBottom: 20, 
  },
  bookAuthor: {
    color: '#888', 
  },
  buttonStyle: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;