import React from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, ScrollView, Text, View} from 'react-native';

import {cityIds} from './data/cityIds.ts';
import {useWeatherForCitiesQuery} from '../../../hooks/queries';
import {Routes, WeatherStackNavigationProps} from '../../../navigation';
import {styles} from '../../../theme/styles.tsx';

export default function CitiesListScreen() {
  const {navigate} =
    useNavigation<
      WeatherStackNavigationProps<Routes.CitiesList>['navigation']
    >();

  const {data} = useWeatherForCitiesQuery(cityIds);

  return (
    <View style={styles.screenContent}>
      <Text>Cities List Screen</Text>
      <ScrollView>
        {data &&
          data.map(cityWeather => (
            <Button
              key={cityWeather.id}
              title={cityWeather.cityName}
              onPress={() =>
                navigate(Routes.CityDetails, {name: cityWeather.cityName})
              }
            />
          ))}
      </ScrollView>
    </View>
  );
}
