import React, {useCallback} from 'react';

import {useNavigation} from '@react-navigation/native';
import {FlatList, ListRenderItemInfo, View} from 'react-native';
import {Text, Divider} from 'react-native-paper';

import {
  CityWeatherHeader,
  EmptyCitiesList,
  ErrorLoadingCitiesList,
  LoadingCitiesList,
} from './components';
import {CurrentLocationCity} from './components/CurrentLocationCity.tsx';
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
      return <CityWeatherHeader weather={item} onPress={onPressItem} />;
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

  const renderHeaderComponent = () => {
    return (
      <View>
        <Text variant="headlineMedium">Current location</Text>
        <CurrentLocationCity onPress={onPressItem} />
        <Text variant="headlineMedium">Other cities</Text>
      </View>
    );
  };

  return (
    <FlatList
      ListHeaderComponent={renderHeaderComponent}
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListEmptyComponent={renderEmptyComponent}
      ItemSeparatorComponent={Divider}
      testID="cities-list"
    />
  );
}
