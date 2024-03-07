import React from 'react';

import {useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';

import {Routes, WeatherStackNavigationProps} from '../../../navigation';
import {styles} from '../../../theme/styles.tsx';

export default function CityDetailsScreen() {
  const route =
    useRoute<WeatherStackNavigationProps<Routes.CityDetails>['route']>();
  const {weather} = route.params;

  return (
    <View style={styles.screenContent}>
      <Text>City Details Screen</Text>
      <Text>{weather.cityName} weather</Text>
    </View>
  );
}
