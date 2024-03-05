import React, {useEffect, useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {Button, ScrollView, Text, View} from 'react-native';

import {cityIds} from './data/cityIds.ts';
import {Routes, WeatherStackNavigationProps} from '../../../navigation';
import {CityWeatherResponse} from '../../../services/api/api.types.ts';
import {getWeatherForCities} from '../../../services/api/cities/getWeatherForCities.ts';
import {styles} from '../../../theme/styles.tsx';

export default function CitiesListScreen() {
  const {navigate} =
    useNavigation<
      WeatherStackNavigationProps<Routes.CitiesList>['navigation']
    >();

  const [citiesWeather, setCitiesWeather] = useState<CityWeatherResponse[]>([]);

  useEffect(() => {
    const loadCities = async () => {
      const response = await getWeatherForCities(cityIds);
      setCitiesWeather(response.list);
    };

    loadCities();
  }, []);

  return (
    <View style={styles.screenContent}>
      <Text>Cities List Screen</Text>
      <ScrollView>
        {citiesWeather.map(cityWeather => (
          <Button
            key={cityWeather.name}
            title={cityWeather.name}
            onPress={() =>
              navigate(Routes.CityDetails, {name: cityWeather.name})
            }
          />
        ))}
      </ScrollView>
    </View>
  );
}
