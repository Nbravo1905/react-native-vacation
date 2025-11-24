import CardNearestPlace from '@/components/CardNearestPlace';
import CardPopular from '@/components/CardPopular';
import { nearestPlacesDummy } from '@/data/nearestPlacesDummy';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlashList } from "@shopify/flash-list";
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { popularDummy } from '../data/popularDummy';

const COLORS = {
  primary: '#5893D8',
  secondary: '#e3e3e3',
  background: '#e1e1e1',
  textPrimary: '#333333',
  textSecondary: '#4F4F4F',
  textMuted: '#646464',
  white: '#fff',
  locationIcon: '#BDBDBD',
};

const FONTS = {
  nunito: 'Nunito',
};

const Home = () => {

  return (
    <SafeAreaView style={styles.container}>

      <FlashList
        ListHeaderComponent={(
          <>
            {/* HEADER */}
            <View style={styles.header}>
              <View style={styles.locationContainer}>
                <Ionicons name='location' size={24} color={COLORS.primary} />
                <Text style={styles.locationText}>Denpasar, Bali</Text>
              </View>
              <View>
                <Image
                  source={require('@/assets/images/user.png')}
                  style={styles.userImage}
                  accessibilityLabel="User profile image"
                />
              </View>
            </View>
            {/* HERO */}
            <View style={styles.heroContainer}>
              <Text style={styles.heroText}>Find your Happiness {'\n'}with Us!</Text>
            </View>
            {/* SEARCH */}
            <View>
              <View style={styles.searchContainer}>
                <TextInput
                  placeholder='Search your destination'
                  style={styles.searchInput}
                  accessibilityLabel="Search input for destinations"
                />
                <Ionicons style={styles.searchIcon} name='search' size={24} color={COLORS.primary} />
              </View>
            </View>

            {/* POPULAR */}
            <View style={styles.popularContainer}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Popular</Text>
                <Text style={styles.seeAllText}>See All</Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {popularDummy.map((item) => (
                  <CardPopular key={item.id} {...item} />
                ))}
              </ScrollView>
            </View>
            {/* Nearest Places */}
            <View style={styles.nearestContainer}>
              <View style={styles.sectionHeader}>
                <Text style={styles.sectionTitle}>Nearest Places</Text>
                <Text style={styles.seeAllText}>See All</Text>
              </View>
            </View>
          </>
        )}
        data={nearestPlacesDummy}
        renderItem={({ item }) => <CardNearestPlace {...item} />}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <View style={styles.nearestSeparator} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  locationContainer: {
    flexDirection: 'row',
    gap: 5,
    width: 161,
    backgroundColor: COLORS.secondary,
    borderRadius: 16,
    height: 48,
    padding: 8,
    alignItems: 'center',
  },
  locationText: {
    color: COLORS.textSecondary,
    fontSize: 16,
    fontFamily: FONTS.nunito,
    fontWeight: 'semibold',
  },
  userImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
  },
  heroContainer: {
    marginVertical: 20,
  },
  heroText: {
    fontSize: 32,
    fontFamily: FONTS.nunito,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 48,
    borderRadius: 32,
    backgroundColor: COLORS.background,
  },
  searchInput: {
    flex: 1,
    height: 48,
    borderRadius: 32,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
    fontFamily: FONTS.nunito,
  },
  searchIcon: {
    flex: 0.15,
  },
  popularContainer: {
    marginVertical: 30,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: FONTS.nunito,
    fontWeight: 'bold',
    color: COLORS.textPrimary,
  },
  seeAllText: {
    fontSize: 16,
    fontFamily: FONTS.nunito,
    fontWeight: 'semibold',
    color: COLORS.primary,
  },
  nearestContainer: {
    flex: 1,
  },
  popularSeparator: {
    marginRight: 8,
  },
  nearestSeparator: {
    marginBottom: 8,
  },
})