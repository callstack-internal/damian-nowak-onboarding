import {CityWeather} from '../../../app/models/CityWeather.ts';
import {
  CityWeatherResponse,
  GetWeatherForCitiesResponse,
} from '../../../app/services/api/api.types.ts';

export const CITY_WEATHER_RESPONSE_DATA_1: CityWeatherResponse = {
  coord: {
    lon: 30.5167,
    lat: 50.4333,
  },
  sys: {
    country: 'UA',
    timezone: 7200,
    sunrise: 1710303342,
    sunset: 1710345548,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  ],
  main: {
    temp: 38.71,
    feels_like: 38.71,
    temp_min: 36.66,
    temp_max: 38.71,
    pressure: 1019,
    humidity: 75,
  },
  visibility: 10000,
  wind: {
    speed: 1.99,
    deg: 98,
  },
  clouds: {
    all: 99,
  },
  dt: 1710328148,
  id: 703448,
  name: 'Kyiv',
};

export const CITY_WEATHER_RESPONSE_DATA_2: CityWeatherResponse = {
  coord: {
    lon: 34.8003,
    lat: 50.9216,
  },
  sys: {
    country: 'UA',
    timezone: 7200,
    sunrise: 1710388593,
    sunset: 1710431007,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  ],
  main: {
    temp: 34.29,
    feels_like: 27.09,
    temp_min: 34.29,
    temp_max: 34.29,
    pressure: 1021,
    humidity: 72,
  },
  visibility: 10000,
  wind: {
    speed: 8.97,
    deg: 107,
  },
  clouds: {
    all: 100,
  },
  dt: 1710414548,
  id: 692194,
  name: 'Sumy',
};

export const GET_WEATHER_FOR_CITIES_RESPONSE_DATA: GetWeatherForCitiesResponse =
  {
    cnt: 2,
    list: [CITY_WEATHER_RESPONSE_DATA_1, CITY_WEATHER_RESPONSE_DATA_2],
  };

export const CITY_WEATHER_DATA: CityWeather = {
  id: 703448,
  cityName: 'Kyiv',
  weatherDescription: 'Clouds',
  weatherIconCode: '04d',
  temp: 38.71,
  humidity: 75,
  pressure: 1019,
  windSpeed: 1.99,
  cloudCover: 99,
};
