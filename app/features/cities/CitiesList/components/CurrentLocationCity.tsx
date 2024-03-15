import React from 'react';

import {Button} from 'react-native';

import LocationModule from '../../../../services/location/locationModule.ts';

export const CurrentLocationCity = () => {
  const onRefresh = () => {
    fetchCurrentLocation();
  };

  const fetchCurrentLocation = async () => {
    const {latitude, longitude} = await LocationModule.getCurrentLocation();
    console.log(
      `Current location latitude: ${latitude}, longitude: ${longitude}`,
    );
  };

  return (
    <>
      <Button title={'Refresh'} onPress={onRefresh} />
    </>
  );
};
