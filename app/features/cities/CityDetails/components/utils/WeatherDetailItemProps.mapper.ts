import {CityWeather} from '../../../../../models/CityWeather.ts';
import {WeatherDetailItemProps} from '../WeatherDetailItem.tsx';

export function mapCityWeatherToWeatherDetailItemProps(
  cityWeather: CityWeather,
): WeatherDetailItemProps[] {
  return [
    {
      name: 'Humidity',
      value: `${cityWeather.humidity}%`,
    },
    {
      name: 'Pressure',
      value: `${cityWeather.pressure} hPa`,
    },
    {
      name: 'Wind Speed',
      value: `${cityWeather.windSpeed} mph`,
    },
    {
      name: 'Cloud cover',
      value: `${cityWeather.cloudCover}%`,
    },
  ];
}
