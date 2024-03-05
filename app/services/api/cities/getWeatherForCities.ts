import Config from 'react-native-config';

import {GetWeatherForCitiesResponse} from '../api.types.ts';
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
