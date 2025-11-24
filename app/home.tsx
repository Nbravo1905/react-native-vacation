import CardNearestPlace from '@/components/CardNearestPlace';
import CardPopular from '@/components/CardPopular';
import { nearestPlacesDummy } from '@/data/nearestPlacesDummy';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlashList } from "@shopify/flash-list";
import React from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { popularDummy } from '../data/popularDummy';

const Home = () => {

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
      {/* HEADER */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 5,
            width: 161,
            backgroundColor: '#e3e3e3',
            borderRadius: 16,
            height: 48,
            padding: 8,
            alignItems: 'center'
          }}
        >
          <Ionicons name='location' size={24} color={'#5893D8'} />
          <Text style={{ color: '#4F4F4F', fontSize: 16, fontFamily: 'Nunito', fontWeight: 'semibold' }}>Denpasar, Bali</Text>
        </View>
        <View>
          <Image
            source={require('@/assets/images/user.png')}
            style={{ width: 48, height: 48, borderRadius: 8 }}
          />
        </View>
      </View>
      {/* HERO */}
      <View style={{ marginVertical: 20 }}>
        <Text style={{ fontSize: 32, fontFamily: 'Nunito', fontWeight: 'bold', color: '#333333' }}>Find your Happiness {'\n'}with Us!</Text>
      </View>
      {/* SEARCH */}
      <View>
        <View style={{
          flexDirection: 'row', alignItems: 'center', width: '100%',
          height: 48,
          borderRadius: 32,
          backgroundColor: '#e1e1e1',
        }}>
          <TextInput
            placeholder='Search your destination'
            style={{
              flex: 1,
              height: 48,
              borderRadius: 32,
              backgroundColor: '#e1e1e1',
              paddingHorizontal: 20,
              fontFamily: 'Nunito'
            }}
          />
          <Ionicons style={{ flex: .15 }} name='search' size={24} color={'#5893D8'} />
        </View>
      </View>

      {/* POPULAR */}
      <View style={{ marginVertical: 30 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              color: '#333333'
            }}
          >Popular</Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Nunito',
              fontWeight: 'semibold',
              color: '#5893D8'
            }}
          >See All</Text>
        </View>
        <FlashList
          data={popularDummy}
          renderItem={({ item }) => <CardPopular {...item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          ItemSeparatorComponent={() => <View style={{ marginRight: 8 }} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      {/* Nearest Places */}
      <View style={{flex: 1}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 15 }}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: 'Nunito',
              fontWeight: 'bold',
              color: '#333333'
            }}
          >Nearest Places</Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: 'Nunito',
              fontWeight: 'semibold',
              color: '#5893D8'
            }}
          >See All</Text>
        </View>
        <FlashList
          data={nearestPlacesDummy}
          renderItem={({ item }) => <CardNearestPlace {...item} />}
          keyExtractor={(item) => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 8 }} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})