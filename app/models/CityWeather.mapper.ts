import {CityWeather} from './CityWeather.ts';
import {
  CityWeatherResponse,
  GetWeatherForCitiesResponse,
} from '../services/api/api.types.ts';

export function mapGetWeatherForCitiesResponseToCityWeather(
  response: GetWeatherForCitiesResponse,
): CityWeather[] {
  return response.list.map(mapCityWeatherResponseToCityWeather);
}

export function mapCityWeatherResponseToCityWeather(
  cityWeatherResponse: CityWeatherResponse,
): CityWeather {
  return {
    id: cityWeatherResponse.id,
    cityName: cityWeatherResponse.name,
    weatherDescription: cityWeatherResponse.weather[0]?.main,
    weatherIconCode: cityWeatherResponse.weather[0]?.icon,
    temp: cityWeatherResponse.main.temp,
    humidity: cityWeatherResponse.main.humidity,
    pressure: cityWeatherResponse.main.pressure,
    windSpeed: cityWeatherResponse.wind.speed,
    cloudCover: cityWeatherResponse.clouds.all,
  };
}
