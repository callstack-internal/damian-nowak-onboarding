import React from 'react';

import {Button, StyleSheet, View} from 'react-native';

import {CityWeather} from '../../../../models/CityWeather.ts';

interface CityWeatherItemProps {
  weather: CityWeather;
  onPress: (item: CityWeather) => void;
}

export const CityWeatherItem = ({weather, onPress}: CityWeatherItemProps) => {
  const onPressItem = () => {
    onPress(weather);
  };

  return (
    <View style={styles.content}>
      <Button title={weather.cityName} onPress={onPressItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
