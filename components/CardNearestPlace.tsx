import { INearestPlacesDummy } from '@/data/nearestPlacesDummy';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CardNearestPlace = React.memo(({ name, ubi, kms, image }: INearestPlacesDummy) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image
          source={{ uri: image }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.infoColumn}>
          <Text style={styles.nameText}>{name}</Text>
          <View style={styles.locationRow}>
            <Ionicons name='location' size={18} color={'#BDBDBD'} />
            <Text style={styles.ubiText}>{ubi}</Text>
          </View>
          <Text style={styles.kmsText}>{kms} Km</Text>
        </View>
        <TouchableOpacity
          style={styles.routeButton}
          activeOpacity={0.7}
          accessibilityLabel={`Get route to ${name}`}
        >
          <Text style={styles.routeText}>Route</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
});

export default CardNearestPlace

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
  },
  infoColumn: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  nameText: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Nunito',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  ubiText: {
    fontSize: 10,
    fontWeight: 'semibold',
    color: '#646464',
    fontFamily: 'Nunito',
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
    right: 0,
    position: 'absolute',
  },
  routeText: {
    fontSize: 12,
    fontWeight: 'semibold',
    color: '#fff',
    fontFamily: 'Nunito',
  },
})