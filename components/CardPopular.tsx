import { IPopularDummy } from '@/data/popularDummy';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CardPopular = ({id,name,ubi,kms,image}: IPopularDummy) => {
  return (
    <ImageBackground
      source={{ uri: image }}
      style={{
        width: 180,
        height: 240,
      }}
      imageStyle={{ borderRadius: 16 }}
    >
      <View style={{
        backgroundColor: '#fff',
        opacity: .8,
        width: 164,
        height: 91,
        padding: 10,
        borderRadius: 16,
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
      }}>
        <Text style={{
          fontSize: 12,
          fontWeight: 'bold',
          fontFamily: 'Nunito'
        }}>{name}</Text>
        <View style={{ flexDirection: 'row', gap: 5, justifyContent: 'flex-start', alignItems: 'center', marginTop: 2 }}>
          <Ionicons name='location' size={16} color={'#BDBDBD'} />
          <Text style={{
            fontSize: 10,
            fontWeight: 'semibold',
            color: '#646464',
            fontFamily: 'Nunito'
          }}>{ubi}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 15 }}>
          <Text style={{
            fontSize: 12,
            fontWeight: 'semibold',
            color: '#646464',
            fontFamily: 'Nunito'
          }}>{kms} Km</Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#5893D8',
              width: 56,
              height: 24,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center'
            }}
            activeOpacity={0.7}
          >
            <Text style={{
              fontSize: 12,
              fontWeight: 'semibold',
              color: '#fff',
              fontFamily: 'Nunito'
            }}>Route</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
}

export default CardPopular

const styles = StyleSheet.create({})