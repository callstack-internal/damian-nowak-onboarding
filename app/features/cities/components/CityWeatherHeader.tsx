import React from 'react';

import {StyleSheet, View} from 'react-native';
import {Chip, List} from 'react-native-paper';

import {CityWeather} from '../../../models/CityWeather.ts';
import {useTheme} from '../../../theme';
import {getWeatherIconUrl} from '../../../utils/getWeatherIconUrl.ts';

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
          {onPress && (
            <List.Icon
              icon="chevron-right"
              color={theme.colors.textSecondary}
            />
          )}
        </View>
      )}
      testID={testID}
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
