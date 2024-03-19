import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Routes} from './Navigation.routes.ts';
import {CityWeather} from '../models/CityWeather.ts';

export type WeatherStackParamList = {
  [Routes.CitiesList]: undefined;
  [Routes.CityDetails]: {
    weather: CityWeather;
  };
};

export type WeatherStackNavigationProps<T extends keyof WeatherStackParamList> =
  NativeStackScreenProps<WeatherStackParamList, T>;
