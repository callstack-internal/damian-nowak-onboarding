import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Routes} from './Navigation.routes.ts';

export type WeatherStackParamList = {
  [Routes.CitiesList]: undefined;
  [Routes.CityDetails]: {
    name: string;
  };
};

export type WeatherStackNavigationProps<T extends keyof WeatherStackParamList> =
  NativeStackScreenProps<WeatherStackParamList, T>;
