import '@testing-library/react-native/extend-expect';

import {jest} from '@jest/globals';

jest.useFakeTimers();

jest.mock('@react-native-community/netinfo', () =>
  require('@react-native-community/netinfo/jest/netinfo-mock.js'),
);

jest.mock('react-native-permissions', () =>
  require('react-native-permissions/mock'),
);

jest.mock('react-native-config', () => ({
  API_URL: 'https://api.openweathermap.org',
  API_ICON_URL: 'https://openweathermap.org/img/w',
  API_KEY: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
}));
