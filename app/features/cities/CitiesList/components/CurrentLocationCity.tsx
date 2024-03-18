import React, {useEffect, useState} from 'react';

import {Button, StyleSheet, View} from 'react-native';
import {PermissionStatus, RESULTS} from 'react-native-permissions';

import {mapCityWeatherResponseToCityWeather} from '../../../../models/CityWeather.mapper.ts';
import {CityWeather} from '../../../../models/CityWeather.ts';
import {CityWeatherResponse} from '../../../../services/api/api.types.ts';
import {getCityWeatherForLocation} from '../../../../services/api/cities/getWeatherForCities.ts';
import {
  checkLocationPermission,
  getCurrentLocation,
  requestLocationPermission,
} from '../../../../services/location/locationService.ts';
import {spacing} from '../../../../theme';
import {Location} from '../../../../types/location.ts';
import {CityWeatherHeader} from '../../components/CityWeatherHeader';

interface CurrentLocationCityProps {
  onPress: (item: CityWeather) => void;
}

export const CurrentLocationCity = ({onPress}: CurrentLocationCityProps) => {
  const [permissionStatus, setPermissionStatus] =
    useState<PermissionStatus | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [cityWeather, setCityWeather] = useState<CityWeather | null>(null);

  const checkPermission = () => {
    checkLocationPermission().then(setPermissionStatus);
  };

  const requestPermission = () => {
    requestLocationPermission().then(setPermissionStatus);
  };

  const getLocation = () => {
    getCurrentLocation().then(setLocation);
  };

  const notSufficientPermissions =
    permissionStatus !== RESULTS.GRANTED &&
    permissionStatus !== RESULTS.LIMITED;

  useEffect(() => {
    checkPermission();
  }, []);

  useEffect(() => {
    if (notSufficientPermissions) {
      return;
    }
    getLocation();
  }, [notSufficientPermissions]);

  useEffect(() => {
    if (!location) {
      return;
    }
    getCityWeatherForLocation(location).then(
      (cityWeatherResponse: CityWeatherResponse) => {
        setCityWeather(
          mapCityWeatherResponseToCityWeather(cityWeatherResponse),
        );
      },
    );
  }, [location]);

  const onRefresh = async () => {
    if (notSufficientPermissions) {
      requestPermission();
      return;
    }
    getLocation();
  };

  const buttonTitle =
    permissionStatus == null
      ? 'Checking permissions...'
      : notSufficientPermissions
      ? 'Location permission needed'
      : 'Refresh';

  return (
    <>
      {cityWeather && (
        <CityWeatherHeader weather={cityWeather} onPress={onPress} />
      )}
      <View style={styles.button}>
        <Button title={buttonTitle} onPress={onRefresh} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: spacing.md,
  },
});
