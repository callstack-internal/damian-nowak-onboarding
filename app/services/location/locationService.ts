import {Platform} from 'react-native';
import {
  check,
  PERMISSIONS,
  PermissionStatus,
  request,
  RESULTS,
} from 'react-native-permissions';

import LocationModule from './locationModule.ts';
import {Location} from '../../types/location.ts';

const locationPermission = Platform.select({
  ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
  android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
})!;

export const checkLocationPermission = async (): Promise<PermissionStatus> => {
  return await check(locationPermission);
};

export const requestLocationPermission =
  async (): Promise<PermissionStatus> => {
    return await request(locationPermission);
  };

export const getCurrentLocation = async (): Promise<Location | null> => {
  const permissionStatus = await checkLocationPermission();
  if (
    permissionStatus !== RESULTS.GRANTED &&
    permissionStatus !== RESULTS.LIMITED
  ) {
    return null;
  }

  return await LocationModule.getCurrentLocation();
};
