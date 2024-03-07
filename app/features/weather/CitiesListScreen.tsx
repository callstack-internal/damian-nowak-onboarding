import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';

import {Routes, WeatherStackNavigationProps} from '../../navigation';
import {styles} from '../../theme/styles.tsx';

export default function CitiesListScreen() {
  const {navigate} =
    useNavigation<
      WeatherStackNavigationProps<Routes.CitiesList>['navigation']
    >();

  return (
    <View style={styles.screenContent}>
      <Text>Cities List Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigate(Routes.CityDetails, {name: 'Sydney'})}
      />
    </View>
  );
}
