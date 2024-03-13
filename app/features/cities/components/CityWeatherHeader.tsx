import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Chip, List} from 'react-native-paper';

import {CityWeather} from '../../../models/CityWeather.ts';
import {useTheme} from '../../../theme';
import {getWeatherIconUrl} from '../../../utils/getWeatherIconUrl.ts';

interface CityWeatherHeaderProps {
  weather: CityWeather;
  onPress?: (item: CityWeather) => void;
}

export const CityWeatherHeader = ({
  weather,
  onPress,
}: CityWeatherHeaderProps) => {
  const onPressItem = () => {
    onPress && onPress(weather);
  };

  const theme = useTheme();

  return (
    <View testID={`city-weather-item-${weather.id}`}>
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
            {onPress && (
              <List.Icon
                icon="chevron-right"
                color={theme.colors.textSecondary}
              />
            )}
          </View>
        )}
      />
    </View>
  );
};

const WeatherItemStyles = StyleSheet.create({
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
});