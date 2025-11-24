import { IPopularDummy } from '@/data/popularDummy';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CardPopular = React.memo(({id,name,ubi,kms,image}: IPopularDummy) => {
  return (
    <ImageBackground
      source={{ uri: image }}
      style={styles.imageBackground}
      imageStyle={styles.image}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.nameText}>{name}</Text>
        <View style={styles.locationRow}>
          <Ionicons name='location' size={16} color={'#BDBDBD'} />
          <Text style={styles.ubiText}>{ubi}</Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.kmsText}>{kms} Km</Text>
          <TouchableOpacity
            style={styles.routeButton}
            activeOpacity={0.7}
            accessibilityLabel={`Get route to ${name}`}
          >
            <Text style={styles.routeText}>Route</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  )
});

export default CardPopular

const styles = StyleSheet.create({
  imageBackground: {
    width: 180,
    height: 240,
    marginRight: 8
  },
  image: {
    borderRadius: 16,
  },
  overlay: {
    backgroundColor: '#fff',
    opacity: 0.8,
    width: 164,
    height: 91,
    padding: 10,
    borderRadius: 16,
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  nameText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Nunito',
  },
  locationRow: {
    flexDirection: 'row',
    gap: 5,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 2,
  },
  ubiText: {
    fontSize: 10,
    fontWeight: 'semibold',
    color: '#646464',
    fontFamily: 'Nunito',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  kmsText: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: '#646464',
    fontFamily: 'Nunito',
  },
  routeButton: {
    backgroundColor: '#5893D8',
    width: 56,
    height: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  routeText: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: '#fff',
    fontFamily: 'Nunito',
  },
})