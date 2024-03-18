import React from 'react';

import {View} from 'react-native';
import {List} from 'react-native-paper';

import {CityWeatherHeaderPrefix} from './CityWeatherHeaderPrefix.tsx';
import {CityWeatherHeaderSuffix} from './CityWeatherHeaderSuffix.tsx';
import {CityWeather} from '../../../../models/CityWeather.ts';

interface CityWeatherHeaderProps {
  weather: CityWeather;
  onPress?: (item: CityWeather) => void;
  testID?: string;
}

export const CityWeatherHeader = ({
  weather,
  onPress,
  testID,
}: CityWeatherHeaderProps) => {
  const onPressItem = () => {
    onPress && onPress(weather);
  };

  const renderCityWeatherHeaderPrefix = () => (
    <CityWeatherHeaderPrefix weatherIconCode={weather.weatherIconCode} />
  );

  const renderCityWeatherHeaderSuffix = () => (
    <CityWeatherHeaderSuffix
      temperature={weather.temp}
      displayNavigation={onPress !== undefined}
    />
  );

  return (
    <View testID={testID || `city-weather-item-${weather.id}`}>
      <List.Item
        title={weather.cityName}
        description={weather.weatherDescription}
        onPress={onPressItem}
        left={renderCityWeatherHeaderPrefix}
        right={renderCityWeatherHeaderSuffix}
      />
    </View>
  );
};
