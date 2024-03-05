import {Button, Text, View} from 'react-native';
import React from 'react';
import {styles} from '../../theme/styles.tsx';
import {useNavigation} from '@react-navigation/native';
import {Routes, WeatherStackNavigationProps} from '../../navigation';

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
