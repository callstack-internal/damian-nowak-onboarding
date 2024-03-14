import {CityWeather} from '../../../../../models/CityWeather.ts';
import {WeatherDetailItemProps} from '../WeatherDetailItem.tsx';

export function mapCityWeatherToWeatherDetailItemProps(
  cityWeather: CityWeather,
): WeatherDetailItemProps[] {
  return [
    {
      id: 'humidity',
      name: 'Humidity',
      value: `${cityWeather.humidity}%`,
    },
    {
      id: 'pressure',
      name: 'Pressure',
      value: `${cityWeather.pressure} hPa`,
    },
    {
      id: 'wind-speed',
      name: 'Wind Speed',
      value: `${cityWeather.windSpeed} mph`,
    },
    {
      id: 'cloud-cover',
      name: 'Cloud Cover',
      value: `${cityWeather.cloudCover}%`,
    },
  ];
}
