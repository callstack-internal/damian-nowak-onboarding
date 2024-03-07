import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {
  CityWeatherItem,
  EmptyCitiesList,
  ErrorLoadingCitiesList,
  LoadingCitiesList,
} from './components';
import {cityIds} from './data/cityIds.ts';
import {useWeatherForCitiesQuery} from '../../../hooks/queries';
import {CityWeather} from '../../../models/CityWeather.ts';
import {Routes, WeatherStackNavigationProps} from '../../../navigation';

export default function CitiesListScreen() {
  const {navigate} =
    useNavigation<
      WeatherStackNavigationProps<Routes.CitiesList>['navigation']
    >();

  const {data, isError, isLoading, refetch} = useWeatherForCitiesQuery(cityIds);

  const keyExtractor = (item: CityWeather) => item.id.toString();

  const onPressItem = useCallback(
    (item: CityWeather) => {
      navigate(Routes.CityDetails, {weather: item});
    },
    [navigate],
  );

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<CityWeather>) => {
      return <CityWeatherItem weather={item} onPress={onPressItem} />;
    },
    [onPressItem],
  );

  const renderEmptyComponent = () => {
    if (isError) {
      return <ErrorLoadingCitiesList onRefresh={refetch} />;
    }
    if (isLoading) {
      return <LoadingCitiesList />;
    }
    return <EmptyCitiesList onRefresh={refetch} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={renderEmptyComponent}
    />
  );
}
