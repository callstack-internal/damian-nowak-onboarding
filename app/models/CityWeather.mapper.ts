import {CityWeather} from './CityWeather.ts';
import {GetWeatherForCitiesResponse} from '../services/api/api.types.ts';

export function mapGetWeatherForCitiesResponseToCityWeather(
  response: GetWeatherForCitiesResponse,
): CityWeather[] {
  return response.list.map(item => {
    return {
      id: item.id,
      cityName: item.name,
      weatherDescription: item.weather[0]?.main,
      weatherIconCode: item.weather[0]?.icon,
      temp: item.main.temp,
      humidity: item.main.humidity,
      pressure: item.main.pressure,
      windSpeed: item.wind.speed,
      cloudCover: item.clouds.all,
    };
  });
}
