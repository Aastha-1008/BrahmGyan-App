import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
  StatusBar
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';
import CustomText from '@/components/shared/CustomText';
import { LinearGradient } from 'expo-linear-gradient';

type AboutStackParamList = {
  profile: undefined;
};

type AboutScreenNavigationProp = StackNavigationProp<AboutStackParamList>;

interface AboutSatguruPanthProps {
  navigation: AboutScreenNavigationProp;
}

const { width, height } = Dimensions.get('window');

const AboutSatguruPanth: React.FC<AboutSatguruPanthProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Hero Header Section */}
      <ImageBackground
        source={require('@/assets/images/icon.png')} // Replace with a spiritual background image
        style={styles.headerBackground}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']}
          style={styles.headerGradient}
        >
          <SafeAreaView style={styles.headerContent}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.goBack()}
            >
              <MaterialIcons name="arrow-back" size={24} color="#fff" />
            </TouchableOpacity>
            
            <View style={styles.titleContainer}>
              <CustomText variant="h4" fontFamily="Bold" style={styles.titleText}>
                सतगुरु पंथ
              </CustomText>
              <View style={styles.titleUnderline} />
              <CustomText variant="h7" fontFamily="Regular" style={styles.subtitleText}>
                आत्मीय यात्रा के मार्ग
              </CustomText>
            </View>
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Introduction Card */}
        <View style={styles.introCard}>
          <View style={styles.cardDecoration} />
          <View style={styles.cardContent}>
            <View style={styles.quoteContainer}>
              <CustomText variant="h5" fontFamily="Bold" style={styles.quoteText}>
                " आत्मदीक्षा से आत्मबोध तक "
              </CustomText>
            </View>
            
            <CustomText variant="h6" fontFamily="Regular" style={styles.paragraph}>
              सतगुरु पंथ एक आध्यात्मिक पंथ है। इस पंथ की स्थापना जीव कल्याण के उद्देश्य से परम संत सद्गुरु वक्त सुरेशादयाल जी महाराज के द्वारा सन 2003 में सीतापुर जनपद के मोचकला नामक छोटे से गांव में की गयी।
            </CustomText>
          </View>
        </View>

        {/* Guru Info Section */}
        <View style={styles.guruSection}>
          <View style={styles.guruImageContainer}>
            <Image
              source={require('@/assets/images/icon.png')} // Replace with guru's image
              style={styles.guruImage}
            />
            <View style={styles.guruImageBorder} />
          </View>
          
          <View style={styles.guruInfo}>
            <CustomText variant="h6" fontFamily="Medium" style={styles.guruInfoTitle}>
              गुरु जी का परिचय
            </CustomText>
            
            <CustomText variant="h7" fontFamily="Regular" style={styles.guruDescription}>
              गुरु जी का जन्म ग्राम/ पोस्ट भदमरा जनपद सीतापुर(उत्तर प्रदेश) भारत में सन 11/10/1954 में हुआ। इन्होने विज्ञान वर्ग से लखनऊ विश्वविद्यालय से परास्नातक की उपाधि प्राप्त की। तदोपरांत अपने देश के बहुत से धर्म गुरुओं से दीक्षा लेकर उन सभी धर्मो का गहराई से अध्ययन और निधि ध्यासन करके सांगोपांग पालन किया।
            </CustomText>
            
            <CustomText variant="h7" fontFamily="Regular" style={styles.guruDescription}>
              तदोपरांत सभी धर्मो तथा सभी पंथों से सारों का सार तथा स्वयं के बोध संतृप्त होकर एवं सदगुरु मोहन दयाल जी महाराज जी से दीक्षा लेकर आत्मबोध को उपलब्ध हुए। उसके उपरांत महाराज जी ने सतगुरु पंथ की स्थापना की।
            </CustomText>
          </View>
        </View>

        {/* Purpose Section */}
        <View style={styles.purposeSection}>
          <View style={styles.purposeBadge}>
            <CustomText variant="h6" fontFamily="Bold" style={styles.purposeBadgeText}>
              उद्देश्य
            </CustomText>
          </View>
          
          <View style={styles.purposeContent}>
            <CustomText variant="h7" fontFamily="Regular" style={styles.purposeText}>
              इस पंथ का उद्देश्य जीव का पूर्ण उद्धार करके चौथे पद अर्थात अनामी धाम को पहुंचा देना है। समय समय पर सतगुरु पंथ के सत्संगी साधुजन गांव-गांव जाकर लघु सत्संग के द्वारा जीवों को जगाते हैं और जिज्ञासु महाराज जी के दर्शन करके आत्म साक्षात्कार करते हैं।
            </CustomText>
          </View>
        </View>

        {/* What is Satguru Panth Section */}
        <View style={styles.whatIsSection}>
          <CustomText variant="h5" fontFamily="Bold" style={styles.whatIsTitle}>
            सतगुरु पंथ क्या है
          </CustomText>
          
          <View style={styles.expressionDesign}>
            <View style={styles.expressionLine} />
            <View style={styles.expressionDot} />
            <View style={styles.expressionLine} />
          </View>
          
          {/* List Items with Elegant Styling */}
          <View style={styles.listContainer}>
            {/* Item 1 */}
            <View style={styles.listItemCard}>
              <View style={styles.listItemHeader}>
                <View style={styles.listNumberCircle}>
                  <CustomText variant="h7" fontFamily="Bold" style={styles.listNumberText}>
                    1
                  </CustomText>
                </View>
                <CustomText variant="h6" fontFamily="SemiBold" style={styles.listItemTitle}>
                  गायत्री संकल्प
                </CustomText>
              </View>
              <CustomText variant="h7" fontFamily="Regular" style={styles.listItemContent}>
                यह गायत्री की "आत्मदीक्षा" है। तथा संकल्प पूर्ति है :- "हम बदलेंगे युग बदलेगा।"
              </CustomText>
            </View>
            
            {/* Item 2 */}
            <View style={styles.listItemCard}>
              <View style={styles.listItemHeader}>
                <View style={styles.listNumberCircle}>
                  <CustomText variant="h7" fontFamily="Bold" style={styles.listNumberText}>
                    2
                  </CustomText>
                </View>
                <CustomText variant="h6" fontFamily="SemiBold" style={styles.listItemTitle}>
                  जयगुरुदेव पंथ
                </CustomText>
              </View>
              <CustomText variant="h7" fontFamily="Regular" style={styles.listItemContent}>
                जयगुरुदेव पंथ का संकल्प पूर्ति है:- "कलयुग में सतयुग आएगा।"
              </CustomText>
            </View>
            
            {/* Item 3 */}
            <View style={styles.listItemCard}>
              <View style={styles.listItemHeader}>
                <View style={styles.listNumberCircle}>
                  <CustomText variant="h7" fontFamily="Bold" style={styles.listNumberText}>
                    3
                  </CustomText>
                </View>
                <CustomText variant="h6" fontFamily="SemiBold" style={styles.listItemTitle}>
                  राधास्वामी पंथ
                </CustomText>
              </View>
              <CustomText variant="h7" fontFamily="Regular" style={styles.listItemContent}>
                राधास्वामी पंथ आगरा का:
              </CustomText>
              <View style={styles.subListContainer}>
                <View style={styles.subListItem}>
                  <View style={styles.subListDot} />
                  <CustomText variant="h7" fontFamily="Regular" style={styles.subListText}>
                    चौथा पद है।
                  </CustomText>
                </View>
                <View style={styles.subListItem}>
                  <View style={styles.subListDot} />
                  <CustomText variant="h7" fontFamily="Regular" style={styles.subListText}>
                    राधास्वामी पद है।
                  </CustomText>
                </View>
                <View style={styles.subListItem}>
                  <View style={styles.subListDot} />
                  <CustomText variant="h7" fontFamily="Regular" style={styles.subListText}>
                    सतनाम और सतगुरु पद है।
                  </CustomText>
                </View>
              </View>
            </View>
            
            {/* Remaining items following the same pattern */}
            <View style={styles.listItemCard}>
              <View style={styles.listItemHeader}>
                <View style={styles.listNumberCircle}>
                  <CustomText variant="h7" fontFamily="Bold" style={styles.listNumberText}>
                    4
                  </CustomText>
                </View>
                <CustomText variant="h6" fontFamily="SemiBold" style={styles.listItemTitle}>
                  मानवता मंदिर
                </CustomText>
              </View>
              <CustomText variant="h7" fontFamily="Regular" style={styles.listItemContent}>
                मानवता मंदिर होशियारपुर की:
              </CustomText>
              <View style={styles.subListContainer}>
                <View style={styles.subListItem}>
                  <View style={styles.subListDot} />
                  <CustomText variant="h7" fontFamily="Regular" style={styles.subListText}>
                    नयी शिक्षा है।
                  </CustomText>
                </View>
                <View style={styles.subListItem}>
                  <View style={styles.subListDot} />
                  <CustomText variant="h7" fontFamily="Regular" style={styles.subListText}>
                    शिक्षा में परिवर्तन है।
                  </CustomText>
                </View>
              </View>
            </View>
            
            {/* Continuing with more list items */}
            <View style={styles.listItemCard}>
              <View style={styles.listItemHeader}>
                <View style={styles.listNumberCircle}>
                  <CustomText variant="h7" fontFamily="Bold" style={styles.listNumberText}>
                    5
                  </CustomText>
                </View>
                <CustomText variant="h6" fontFamily="SemiBold" style={styles.listItemTitle}>
                  इस्लाम धर्म
                </CustomText>
              </View>
              <CustomText variant="h7" fontFamily="Regular" style={styles.listItemContent}>
                इस्लाम धर्म का:
              </CustomText>
              <View style={styles.subListContainer}>
                <View style={styles.subListItem}>
                  <View style={styles.subListDot} />
                  <CustomText variant="h7" fontFamily="Regular" style={styles.subListText}>
                    "अल्लाह" है।
                  </CustomText>
                </View>
                <View style={styles.subListItem}>
                  <View style={styles.subListDot} />
                  <CustomText variant="h7" fontFamily="Regular" style={styles.subListText}>
                    मार्फ़त वाली इबादत है।
                  </CustomText>
                </View>
              </View>
            </View>
            
            {/* More list items with simplified format for brevity */}
            <View style={styles.listItemCard}>
              <View style={styles.listItemHeader}>
                <View style={styles.listNumberCircle}>
                  <CustomText variant="h7" fontFamily="Bold" style={styles.listNumberText}>
                    6
                  </CustomText>
                </View>
                <CustomText variant="h6" fontFamily="SemiBold" style={styles.listItemTitle}>
                  सिख धर्म
                </CustomText>
              </View>
              <CustomText variant="h7" fontFamily="Regular" style={styles.listItemContent}>
                सिख धर्म का:- वाहेगुरु सतनाम है।
              </CustomText>
            </View>
            
            <View style={styles.listItemCard}>
              <View style={styles.listItemHeader}>
                <View style={styles.listNumberCircle}>
                  <CustomText variant="h7" fontFamily="Bold" style={styles.listNumberText}>
                    7
                  </CustomText>
                </View>
                <CustomText variant="h6" fontFamily="SemiBold" style={styles.listItemTitle}>
                  जैन धर्म
                </CustomText>
              </View>
              <CustomText variant="h7" fontFamily="Regular" style={styles.listItemContent}>
                जैन धर्म का :- "कैवल्य पद" है।
              </CustomText>
            </View>
            
            <View style={styles.listItemCard}>
              <View style={styles.listItemHeader}>
                <View style={styles.listNumberCircle}>
                  <CustomText variant="h7" fontFamily="Bold" style={styles.listNumberText}>
                    8
                  </CustomText>
                </View>
                <CustomText variant="h6" fontFamily="SemiBold" style={styles.listItemTitle}>
                  बौद्ध धर्म
                </CustomText>
              </View>
              <CustomText variant="h7" fontFamily="Regular" style={styles.listItemContent}>
                बौद्ध धर्म का:
              </CustomText>
              <View style={styles.subListContainer}>
                <View style={styles.subListItem}>
                  <View style={styles.subListDot} />
                  <CustomText variant="h7" fontFamily="Regular" style={styles.subListText}>
                    निर्वाण है।
                  </CustomText>
                </View>
                <View style={styles.subListItem}>
                  <View style={styles.subListDot} />
                  <CustomText variant="h7" fontFamily="Regular" style={styles.subListText}>
                    मोक्ष पद है।
                  </CustomText>
                </View>
              </View>
            </View>
            
            {/* Final list items */}
            <View style={styles.listItemCard}>
              <View style={styles.listItemHeader}>
                <View style={styles.listNumberCircle}>
                  <CustomText variant="h7" fontFamily="Bold" style={styles.listNumberText}>
                    9-13
                  </CustomText>
                </View>
                <CustomText variant="h6" fontFamily="SemiBold" style={styles.listItemTitle}>
                  अन्य धर्म संबंध
                </CustomText>
              </View>
              <View style={styles.condensedList}>
                <CustomText variant="h7" fontFamily="Regular" style={styles.condensedListItem}>
                  9. सत्य सतनाम धर्म: एक ही आत्मा है। राम है।
                </CustomText>
                <CustomText variant="h7" fontFamily="Regular" style={styles.condensedListItem}>
                  10. संतमत का: सतनाम है। सत्यलोक है। केंद्र है, किलिया, धुरी है। अनामी धाम है।
                </CustomText>
                <CustomText variant="h7" fontFamily="Regular" style={styles.condensedListItem}>
                  11. गीता का: कृष्ण है
                </CustomText>
                <CustomText variant="h7" fontFamily="Regular" style={styles.condensedListItem}>
                  12. वेदों का: अद्वैत पद है
                </CustomText>
                <CustomText variant="h7" fontFamily="Regular" style={styles.condensedListItem}>
                  13. जीव का: परम धर्म है
                </CustomText>
              </View>
            </View>
          </View>
        </View>
        
        {/* Footer Decorative Element */}
        <View style={styles.footerDecoration}>
          <View style={styles.footerDecorationInner} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f5f2', // Warm background color
  },
  headerBackground: {
    height: height * 0.25,
    width: '100%',
  },
  headerGradient: {
    height: '100%',
    width: '100%',
  },
  headerContent: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 16,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  titleText: {
    color: '#fff',
    fontSize: 32,
    marginBottom: 8,
  },
  titleUnderline: {
    width: 100,
    height: 3,
    backgroundColor: '#ffd700', // Gold color
    marginBottom: 8,
  },
  subtitleText: {
    color: '#fff',
    opacity: 0.9,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  introCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: -40,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    overflow: 'hidden',
  },
  cardDecoration: {
    height: 6,
    backgroundColor: '#ffd700', // Gold color
  },
  cardContent: {
    padding: 20,
  },
  quoteContainer: {
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: '#ffd700', // Gold color
    paddingLeft: 12,
  },
  quoteText: {
    fontStyle: 'italic',
    color: '#333',
  },
  paragraph: {
    color: '#555',
    lineHeight: 24,
    textAlign: 'justify',
  },
  guruSection: {
    marginHorizontal: 16,
    marginTop: 24,
    flexDirection: 'row',
  },
  guruImageContainer: {
    width: 100,
    height: 100,
    marginRight: 16,
    position: 'relative',
  },
  guruImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  guruImageBorder: {
    position: 'absolute',
    top: -5,
    left: -5,
    right: -5,
    bottom: -5,
    borderRadius: 55,
    borderWidth: 2,
    borderColor: '#ffd700', // Gold color
    borderStyle: 'dashed',
  },
  guruInfo: {
    flex: 1,
  },
  guruInfoTitle: {
    color: '#333',
    marginBottom: 8,
  },
  guruDescription: {
    color: '#555',
    lineHeight: 20,
    marginBottom: 8,
    textAlign: 'justify',
  },
  purposeSection: {
    marginHorizontal: 16,
    marginTop: 24,
    backgroundColor: '#fcf8ed', // Light cream color
    borderRadius: 12,
    overflow: 'hidden',
  },
  purposeBadge: {
    backgroundColor: '#ffd700', // Gold color
    paddingVertical: 6,
    paddingHorizontal: 16,
    alignSelf: 'flex-start',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
  purposeBadgeText: {
    color: '#333',
  },
  purposeContent: {
    padding: 16,
  },
  purposeText: {
    color: '#555',
    lineHeight: 22,
    textAlign: 'justify',
  },
  whatIsSection: {
    marginHorizontal: 16,
    marginTop: 32,
  },
  whatIsTitle: {
    color: '#333',
    textAlign: 'center',
  },
  expressionDesign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  expressionLine: {
    height: 1,
    width: 40,
    backgroundColor: '#ffd700', // Gold color
  },
  expressionDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ffd700', // Gold color
    marginHorizontal: 8,
  },
  listContainer: {
    marginTop: 8,
  },
  listItemCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  listItemHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  listNumberCircle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#ffd700', // Gold color
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  listNumberText: {
    color: '#333',
    fontSize: 14,
  },
  listItemTitle: {
    color: '#333',
  },
  listItemContent: {
    color: '#555',
    lineHeight: 22,
  },
  subListContainer: {
    marginTop: 8,
    marginLeft: 38,
  },
  subListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  subListDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#ffd700', // Gold color
    marginRight: 8,
  },
  subListText: {
    color: '#555',
    flex: 1,
  },
  condensedList: {
    marginTop: 8,
  },
  condensedListItem: {
    color: '#555',
    marginBottom: 6,
    lineHeight: 22,
  },
  footerDecoration: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
  },
  footerDecorationInner: {
    width: 60,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#ffd700', // Gold color
  },
});

export default AboutSatguruPanth;