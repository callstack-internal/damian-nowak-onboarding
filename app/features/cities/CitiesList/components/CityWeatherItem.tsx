import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Chip, List} from 'react-native-paper';

import {CityWeather} from '../../../../models/CityWeather.ts';
import {useTheme} from '../../../../theme';
import {getWeatherIconUrl} from '../../../../utils/getWeatherIconUrl.ts';

interface CityWeatherItemProps {
  weather: CityWeather;
  onPress: (item: CityWeather) => void;
}

export const CityWeatherItem = ({weather, onPress}: CityWeatherItemProps) => {
  const onPressItem = () => {
    onPress(weather);
  };

  const theme = useTheme();

  return (
    <List.Item
      title={weather.cityName}
      description={weather.weatherDescription}
      onPress={onPressItem}
      left={() => (
        <List.Image
          source={{
            uri: getWeatherIconUrl(weather.weatherIconCode),
          }}
        />
      )}
      right={() => (
        <View style={WeatherItemStyles.right}>
          <Chip
            style={{
              backgroundColor: theme.colors.primary,
            }}
            selectedColor={theme.colors.onPrimary}>
            {weather.temp} °F
          </Chip>
          <List.Icon icon="chevron-right" color={theme.colors.textSecondary} />
        </View>
      )}
    />
  );
};

const WeatherItemStyles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
});
