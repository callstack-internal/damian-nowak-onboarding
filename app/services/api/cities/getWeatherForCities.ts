import Config from 'react-native-config';

import {Location} from '../../../types/location.ts';
import {
  CityWeatherResponse,
  GetWeatherForCitiesResponse,
} from '../api.types.ts';
import {apiClient} from '../apiClient.ts';
import {ApiRoutes} from '../apiRoutes.ts';

export const getWeatherForCities = async (
  ids: number[],
): Promise<GetWeatherForCitiesResponse> => {
  const response = await apiClient.get(ApiRoutes.weatherGroup, {
    params: {
      id: ids.join(','),
      appid: Config.API_KEY,
    },
  });
  return response.data;
};

export const getCityWeatherForLocation = async (
  location: Location,
): Promise<CityWeatherResponse> => {
  const response = await apiClient.get(ApiRoutes.weather, {
    params: {
      lat: location.latitude,
      lon: location.longitude,
      appid: Config.API_KEY,
    },
  });
  return response.data;
};
