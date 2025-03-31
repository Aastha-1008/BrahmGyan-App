import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
  Dimensions,
  SafeAreaView,
  Platform,
  Text
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { GetNewReleasedBooks } from '@/components/API/BooksAPI';
import CustomText from '@/components/shared/CustomText';



interface ForYouProps {
  navigation: any;
  allBooks: any[]
}

interface Book1 {
  id: string;
  title: string;
  author: string;
  cover: any;
  rating?: number;
  lastRead?: string;
  releaseDate?: string;
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

interface NewsItem {
  id: string;
  title: string;
  date: string;
  image: any;
}

interface ContinueReadingBook {
  id: string;
  title: string;
  author: string;
  cover: any;
  progress: number;
  chapter: string;
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.42;

const ForYou: React.FC<ForYouProps> = ({ navigation,allBooks }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [featuredBook, setFeaturedBook] = useState<ContinueReadingBook>({
    id: '1',
    title: 'Aatmbodh Mala',
    author: 'Sant Dr. Gurmeet Ram Rahim Singh Ji Insan',
    cover: require('@/assets/images/icon.png'),
    progress: 30,
    chapter: 'Chapter 4 of 5'
  });

  const [recentBooks, setRecentBooks] = useState<Book1[]>([
    {
      id: '1',
      title: 'Satsang Vishesh',
      author: 'Sant Dr. Gurmeet Ram Rahim Singh Ji Insan',
      cover: require('@/assets/images/icon.png'),
      lastRead: '2 days ago'
    },
    {
      id: '2',
      title: 'Spiritual Knowledge',
      author: 'Sant Dr. Gurmeet Ram Rahim Singh Ji Insan',
      cover: require('@/assets/images/icon.png'),
      lastRead: '5 days ago'
    },
    {
      id: '3',
      title: 'Truth of Life',
      author: 'Sant Dr. Gurmeet Ram Rahim Singh Ji Insan',
      cover: require('@/assets/images/icon.png'),
      lastRead: 'Yesterday'
    }
  ]);

  const [newReleases, setNewReleases] = useState<any[]>([]);
  const [recommendedBooks, setRecommendedBooks] = useState<any[]>([]);

  useEffect(() => {
    const fetchNewReleasedBooks = async () => {
      try {
        const newReleasedBooks = await GetNewReleasedBooks(); // Wait for the API response
        setNewReleases(newReleasedBooks); // Set the data in state
        console.log(newReleasedBooks);
      } catch (error) {
        console.error('Error fetching new releases for you class:', error);
      }
    };
    fetchNewReleasedBooks();
  }, []);

  useEffect(() => {
  if (allBooks.length > 0) {
    const topBooks = allBooks
      .filter((book) => book.likes > 200) // Filter books with likes > 200
      .sort((a, b) => b.likes - a.likes) // Sort by likes (highest first)
      .slice(0, 10); // Get top 10 books

    setRecommendedBooks(topBooks);
  }
}, [allBooks]); // Runs whenever allBooks updates



  const [latestNews, setLatestNews] = useState<NewsItem[]>([
    {
      id: '1',
      title: 'New Meditation Technique Announced',
      date: 'March 10, 2023',
      image: require('@/assets/images/icon.png')
    },
    {
      id: '2',
      title: 'Upcoming Satsang Festival',
      date: 'March 5, 2023',
      image: require('@/assets/images/icon.png')
    },
    {
      id: '3',
      title: 'New Ashram Foundation Ceremony',
      date: 'February 28, 2023',
      image: require('@/assets/images/icon.png')
    }
  ]);
  const renderItem = ({ item }: { item: Book }) => (
    <TouchableOpacity
      style={styles.bookCard}
      onPress={() => navigation.navigate('bookDetails', { book: item })}
    >
      <Image
        source={require('../../../assets/images/icon.png')}
        style={styles.bookCover} />
      <View style={styles.bookInfoContainer}>
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
  const renderBookItem = ({ item }: { item: Book1 }) => (
    <TouchableOpacity
      style={styles.bookCard}
      onPress={() => navigation.navigate('bookDetails', { book: item })}
    >
      <Image
        source={require('../../../assets/images/icon.png')}
        style={styles.bookCover} />
      <View style={styles.bookInfoContainer}>
        <CustomText
          variant="h6"
          fontFamily="Bold"
          numberOfLines={1}
          style={styles.bookTitle}
        >
          {item.title}
        </CustomText>
        <CustomText
          variant="h8"
          fontFamily="Regular"
          numberOfLines={1}
          style={styles.bookAuthor}
        >
          {item.author}
        </CustomText>
      </View>
    </TouchableOpacity>
  );

  const renderNewsItem = ({ item }: { item: NewsItem }) => (
    <TouchableOpacity
      style={styles.newsCard}
      onPress={() => navigation.navigate('newsDetails', { news: item })}
    >
      <Image source={item.image} style={styles.newsImage} />
      <View style={styles.newsTextContainer}>
        <CustomText
          variant="h7"
          fontFamily="Bold"
          numberOfLines={2}
          style={styles.newsTitle}
        >
          {item.title}
        </CustomText>
        <CustomText
          variant="h8"
          fontFamily="Regular"
          style={styles.newsDate}
        >
          {item.date}
        </CustomText>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.greetingContainer}>
            <Text style={styles.namasteEmoji}>🙏</Text>
            <CustomText variant="h4" fontFamily="Bold" style={styles.headerTitle}>
              नमस्ते
            </CustomText>
          </View>
          <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('profile')}
          >
            <Image
              source={require('@/assets/images/icon.png')}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search books, authors..."
            placeholderTextColor="#888"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={24} color="#fff" />
          </TouchableOpacity>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {/* Latest News Section (Small, at top) */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <CustomText variant="h5" fontFamily="Bold" style={styles.sectionTitle}>
                Latest News
              </CustomText>
              <TouchableOpacity onPress={() => navigation.navigate('allNews')}>
                <CustomText variant="h7" fontFamily="Medium" style={styles.viewAllText}>
                  See All
                </CustomText>
              </TouchableOpacity>
            </View>
            <FlatList
              data={latestNews}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderNewsItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.newsListContainer}
            />
          </View>

          {/* Continue Reading Section */}
          <View style={styles.continueReadingContainer}>
            <CustomText variant="h5" fontFamily="Bold" style={styles.sectionTitle}>
              Continue Reading
            </CustomText>
            <TouchableOpacity
              style={styles.continueReadingCard}
              onPress={() => navigation.navigate('bookReader', { book: featuredBook })}
            >
              <Image source={featuredBook.cover} style={styles.continueReadingCover} />
              <View style={styles.continueReadingInfo}>
                <CustomText variant="h6" fontFamily="Bold" style={styles.continueReadingTitle}>
                  {featuredBook.title}
                </CustomText>
                <CustomText variant="h8" fontFamily="Regular" style={styles.continueReadingChapter}>
                  {featuredBook.chapter}
                </CustomText>
                <View style={styles.progressBarContainer}>
                  <View style={[styles.progressBar, { width: `${featuredBook.progress}%` }]} />
                </View>
                <View style={styles.progressTextContainer}>
                  <CustomText variant="h8" fontFamily="Regular" style={styles.progressText}>
                    {featuredBook.progress}% completed
                  </CustomText>
                </View>
                <TouchableOpacity style={styles.continueButton}>
                  <CustomText variant="h7" fontFamily="Bold" style={styles.continueButtonText}>
                    Continue
                  </CustomText>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>

          {/* Recently Read Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <CustomText variant="h5" fontFamily="Bold" style={styles.sectionTitle}>
                Recently Read
              </CustomText>
              <TouchableOpacity onPress={() => navigation.navigate('recentBooks')}>
                <CustomText variant="h7" fontFamily="Medium" style={styles.viewAllText}>
                  See All
                </CustomText>
              </TouchableOpacity>
            </View>
            <FlatList
              data={recentBooks}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderBookItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.bookListContainer}
            />
          </View>

          {/* Recommended Books Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <CustomText variant="h5" fontFamily="Bold" style={styles.sectionTitle}>
                Recommended for You
              </CustomText>
              <TouchableOpacity onPress={() => navigation.navigate('recommendedBooks')}>
                <CustomText variant="h7" fontFamily="Medium" style={styles.viewAllText}>
                  See All
                </CustomText>
              </TouchableOpacity>
            </View>
            <FlatList
              data={recommendedBooks}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.bookListContainer}
            />
          </View>

          {/* New Releases Section */}
          <View style={styles.sectionContainer}>
            <View style={styles.sectionHeader}>
              <CustomText variant="h5" fontFamily="Bold" style={styles.sectionTitle}>
                New Releases
              </CustomText>
              <TouchableOpacity onPress={() => navigation.navigate('newReleases')}>
                <CustomText variant="h7" fontFamily="Medium" style={styles.viewAllText}>
                  See All
                </CustomText>
              </TouchableOpacity>
            </View>
            <FlatList
              data={newReleases}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              contentContainerStyle={styles.bookListContainer}
            />
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
    backgroundColor: '#f0f0f0',
  },
  scrollContent: {
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  greetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  namasteEmoji: {
    fontSize: 24,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 22,
    color: '#000',
  },
  profileButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 15,
    height: 48,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  searchButton: {
    backgroundColor: '#000',
    width: 36,
    height: 36,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#000',
  },
  viewAllText: {
    color: '#000',
  },
  bookListContainer: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  bookCard: {
    width: CARD_WIDTH,
    marginRight: 15,
    marginBottom: 5,
  },
  bookCover: {
    width: '100%',
    height: CARD_WIDTH * 1.5,
    borderRadius: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  bookInfoContainer: {
    marginTop: 8,
  },
  bookTitle: {
    color: '#000',
    marginBottom: 4,
  },
  bookAuthor: {
    color: '#666',
  },
  newsListContainer: {
    paddingLeft: 20,
    paddingRight: 10,
  },
  newsCard: {
    width: width * 0.7,
    height: 100,
    marginRight: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  newsImage: {
    width: 100,
    height: '100%',
  },
  newsTextContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  newsTitle: {
    color: '#000',
  },
  newsDate: {
    color: '#666',
  },
  continueReadingContainer: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  continueReadingCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  continueReadingCover: {
    width: 80,
    height: 120,
    borderRadius: 6,
    marginRight: 15,
  },
  continueReadingInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  continueReadingTitle: {
    color: '#000',
    marginBottom: 4,
  },
  continueReadingChapter: {
    color: '#666',
    marginBottom: 10,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#eee',
    borderRadius: 3,
    marginBottom: 6,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#000',
    borderRadius: 3,
  },
  progressTextContainer: {
    marginBottom: 15,
  },
  progressText: {
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
  }
});

export default ForYou;