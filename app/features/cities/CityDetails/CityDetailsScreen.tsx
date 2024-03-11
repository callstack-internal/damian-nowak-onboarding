import React, {useCallback} from 'react';

import {useRoute} from '@react-navigation/native';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {Divider} from 'react-native-paper';

import {mapCityWeatherToWeatherDetailItemProps} from './components/utils/WeatherDetailItemProps.mapper.ts';
import WeatherDetailItem, {
  WeatherDetailItemProps,
} from './components/WeatherDetailItem.tsx';
import {Routes, WeatherStackNavigationProps} from '../../../navigation';
import {CityWeatherHeader} from '../components/CityWeatherHeader.tsx';

export default function CityDetailsScreen() {
  const route =
    useRoute<WeatherStackNavigationProps<Routes.CityDetails>['route']>();
  const {weather} = route.params;

  const detailsRowsProps = mapCityWeatherToWeatherDetailItemProps(weather);

  const renderHeader = (
    <View>
      <CityWeatherHeader weather={weather} />
      <Divider />
    </View>
  );

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<WeatherDetailItemProps>) => (
      <WeatherDetailItem {...item} />
    ),
    [],
  );

  const keyExtractor = (item: WeatherDetailItemProps) => item.name;

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={detailsRowsProps}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
}
