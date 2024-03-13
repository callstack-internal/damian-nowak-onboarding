import '@testing-library/react-native/extend-expect';

import {jest} from '@jest/globals';

jest.useFakeTimers();

jest.mock('@react-native-community/netinfo', () =>
  require('@react-native-community/netinfo/jest/netinfo-mock.js'),
);

jest.mock('react-native-config', () => ({
  OPEN_WEATHER_API_BASE_URL: 'https://api.openweathermap.org',
  OPEN_WEATHER_API_ICON_URL: 'https://openweathermap.org/img/w',
  OPEN_WEATHER_API_KEY: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
}));
