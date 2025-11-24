import { INearestPlacesDummy } from '@/data/nearestPlacesDummy'
import Ionicons from '@expo/vector-icons/Ionicons'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const CardNearestPlace = ({ name, ubi, kms, image }: INearestPlacesDummy) => {
  return (
    <View style={{ backgroundColor: '#fff', borderRadius: 16, padding: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 15 }}>
        <Image
          source={{ uri: image }}
          style={{
            width: 64,
            height: 64,
            borderRadius: 8
          }}
        />
        <View style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          <Text style={{
            fontSize: 12,
            fontWeight: 'bold',
            fontFamily: 'Nunito'
          }}
          >{name}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Ionicons name='location' size={18} color={'#BDBDBD'} />
            <Text style={{
              fontSize: 10,
              fontWeight: 'semibold',
              color: '#646464',
              fontFamily: 'Nunito'
            }}>{ubi}</Text>
          </View>
          <Text style={{
            fontSize: 12,
            fontWeight: 'semibold',
            color: '#646464',
            fontFamily: 'Nunito'
          }}>{kms} Km</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#5893D8',
            width: 56,
            height: 24,
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            right: 0,
            position: 'absolute'
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
  )
}

export default CardNearestPlace

const styles = StyleSheet.create({})