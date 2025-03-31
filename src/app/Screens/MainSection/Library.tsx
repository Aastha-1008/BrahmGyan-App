import React, { useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
  Platform
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomText from '@/components/shared/CustomText';



interface LibraryProps {
  navigation: any;
  allBooks: any[]
}

interface Book {
  id: string;
  bookname: string;
  authorname: string;
  cover: any;
  views?: number;
  likes?: number;
  addition_date?: string;
}

// Get screen width to calculate grid item size
const { width } = Dimensions.get('window');
const COLUMN_COUNT = 2;
const GRID_SPACING = 16;
const ITEM_WIDTH = (width - GRID_SPACING * (COLUMN_COUNT + 1)) / COLUMN_COUNT;


const Library: React.FC<LibraryProps> = ({ navigation,allBooks }) => {

  const [newestBooks , setNewestBooks] = useState<Book[]>([]);
  const [oldestBooks , setOldestBooks] = useState<Book[]>([]);
  const [mostViewed , setMostViewed] = useState<Book[]>([]);
  const [mostLiked , setMostLiked]  = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  let currentStatus = 'newest';


  useEffect(() => {
    if (allBooks.length > 0) {
      // Sort books by addition date (descending order: newest first)
      const sortedByDate = [...allBooks].sort((a, b) => 
        new Date(b.addition_date).getTime() - new Date(a.addition_date).getTime()
      );
  
      // Get half of the books for oldest and newest
      const halfLength = Math.floor(allBooks.length / 2);
      const newest = sortedByDate.slice(0, halfLength); // First half (newest)
      const oldest = sortedByDate.slice(-halfLength).reverse(); // Last half (oldest)
  
      // Get top 10 books by views (descending order)
      const mostViewedBooks = [...allBooks]
        .sort((a, b) => b.views - a.views)
        .slice(0, 10);
  
      // Get top 10 books by likes (descending order)
      const mostLikedBooks = [...allBooks]
        .sort((a, b) => b.likes - a.likes)
        .slice(0, 10);
  
      setNewestBooks(newest);
      setOldestBooks(oldest);
      setMostViewed(mostViewedBooks);
      setMostLiked(mostLikedBooks);
    }
  }, [allBooks]);


  // Apply sorting to books
  const handleContentChange = (tag: string) => {
    
    switch (tag) {
      case 'newest':
        setFilteredBooks(newestBooks);
        currentStatus = 'newest';
        break;
      case 'oldest':
        setFilteredBooks(oldestBooks);
        currentStatus = 'oldest';
        break;
      case 'mostViewed':
        setFilteredBooks(mostViewed);
        currentStatus = 'mostViewed';
        break;
      case 'mostLiked':
        setFilteredBooks(mostLiked);
        currentStatus = 'mostLiked';
        break;
    }
  };

  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity
      style={styles.bookCard}
    >
      <Image
        source={require('../../../assets/images/icon.png')}
        style={styles.bookCover} />
      <View style={styles.bookInfo}>
        <CustomText
          variant="h6"
          fontFamily="Bold"
          numberOfLines={1}
          style={styles.bookTitle}
        >
          {item.bookname}
        </CustomText>
        <CustomText
          variant="h8"
          fontFamily="Regular"
          numberOfLines={1}
          style={styles.bookAuthor}
        >
          {item.authorname}
        </CustomText>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <CustomText variant="h4" fontFamily="Bold" style={styles.headerTitle}>
            My Library
          </CustomText>
        </View>

        <View style={styles.sortContainer}>
          <CustomText variant="h6" fontFamily="Medium" style={styles.sortTitle}>
            Sort by:
          </CustomText>
          <View style={styles.sortOptions}>
            <TouchableOpacity
              style={[
                styles.sortOption,
                currentStatus === 'newest' && styles.sortOptionActive,
              ]}
              onPress={() => handleContentChange('newest')}
            >
              <CustomText
                variant="h7"
                fontFamily={currentStatus === 'newest' ? 'Bold' : 'Medium'}
                style={[
                  styles.sortOptionText,
                  currentStatus === 'newest' && styles.sortOptionTextActive,
                ]}
              >
                Newest
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sortOption,
                currentStatus === 'oldest' && styles.sortOptionActive,
              ]}
              onPress={() => handleContentChange('oldest')}
            >
              <CustomText
                variant="h7"
                fontFamily={currentStatus === 'oldest' ? 'Bold' : 'Medium'}
                style={[
                  styles.sortOptionText,
                  currentStatus === 'oldest' && styles.sortOptionTextActive,
                ]}
              >
                Oldest
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sortOption,
                currentStatus === 'mostViewed' && styles.sortOptionActive,
              ]}
              onPress={() => handleContentChange('mostViewed')}
            >
              <CustomText
                variant="h7"
                fontFamily={currentStatus === 'mostViewed' ? 'Bold' : 'Medium'}
                style={[
                  styles.sortOptionText,
                  currentStatus === 'mostViewed' && styles.sortOptionTextActive,
                ]}
              >
                Most Viewed
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.sortOption,
                currentStatus === 'mostLiked' && styles.sortOptionActive,
              ]}
              onPress={() => handleContentChange('mostLiked')}
            >
              <CustomText
                variant="h7"
                fontFamily={currentStatus === 'mostLiked' ? 'Bold' : 'Medium'}
                style={[
                  styles.sortOptionText,
                  currentStatus === 'mostLiked' && styles.sortOptionTextActive,
                ]}
              >
                Most Liked
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>

        <FlatList
          data={filteredBooks}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          numColumns={COLUMN_COUNT}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.bookGrid}
        />
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
    paddingHorizontal: 16,
    paddingTop: Platform.OS === 'ios' ? 0 : 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  headerTitle: {
    fontSize: 22,
    color: '#000',
  },
  sortContainer: {
    marginBottom: 16,
  },
  sortTitle: {
    marginBottom: 8,
    color: '#000',
  },
  sortOptions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  sortOption: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sortOptionActive: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  sortOptionText: {
    color: '#666',
  },
  sortOptionTextActive: {
    color: '#fff',
  },
  bookGrid: {
    paddingBottom: 20,
  },
  bookCard: {
    width: ITEM_WIDTH,
    marginHorizontal: GRID_SPACING / 2,
    marginBottom: GRID_SPACING,
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bookCover: {
    width: '100%',
    height: ITEM_WIDTH * 1.4,
    resizeMode: 'cover',
  },
  bookInfo: {
    padding: 12,
  },
  bookTitle: {
    color: '#000',
    marginBottom: 4,
  },
  bookAuthor: {
    color: '#666',
    marginBottom: 8,
  },
  bookStats: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    color: '#666',
    marginLeft: 4,
  },
});

export default Library;