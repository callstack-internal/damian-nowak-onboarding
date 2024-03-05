import {Text, View} from 'react-native';
import React from 'react';
import {styles} from '../../theme/styles.tsx';
import {Routes, WeatherStackNavigationProps} from '../../navigation';
import {useRoute} from '@react-navigation/native';

export default function CityDetailsScreen() {
  const route =
    useRoute<WeatherStackNavigationProps<Routes.CityDetails>['route']>();
  const {name} = route.params;

  return (
    <View style={styles.screenContent}>
      <Text>City Details Screen</Text>
      <Text>{name} weather</Text>
    </View>
  );
}
