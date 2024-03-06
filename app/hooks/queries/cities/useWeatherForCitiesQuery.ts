import {useQuery} from '@tanstack/react-query';

import {mapGetWeatherForCitiesResponseToCityWeather} from '../../../models/CityWeather.mapper.ts';
import {getWeatherForCities} from '../../../services/api/cities/getWeatherForCities.ts';
import {QueriesKeys} from '../queries.keys.ts';

export function useWeatherForCitiesQuery(cityIds: number[]) {
  return useQuery({
    queryKey: [QueriesKeys.weatherGroup, cityIds],
    queryFn: () => getWeatherForCities(cityIds),
    select: mapGetWeatherForCitiesResponseToCityWeather,
  });
}
