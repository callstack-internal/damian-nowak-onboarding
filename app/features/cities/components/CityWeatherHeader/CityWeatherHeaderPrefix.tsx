import React from 'react';

import {List} from 'react-native-paper';

import {getWeatherIconUrl} from '../../../../utils/getWeatherIconUrl.ts';

interface CityWeatherHeaderPrefixProps {
  weatherIconCode: string;
}

export const CityWeatherHeaderPrefix = ({
  weatherIconCode,
}: CityWeatherHeaderPrefixProps) => {
  return (
    <List.Image
      source={{
        uri: getWeatherIconUrl(weatherIconCode),
      }}
    />
  );
};
