import React from 'react';

import {render, waitFor, within} from '@testing-library/react-native';

import CityDetailsScreen from './CityDetailsScreen.tsx';
import {CITY_WEATHER_DATA} from '../../../../jest/mocks/data';
import {ProvidersWrapper} from '../../../../jest/utils.tsx';

const mockUseRoute = jest.fn(() => ({params: {weather: CITY_WEATHER_DATA}}));

jest.mock('@react-navigation/native', () => ({
  __esModule: true,
  useRoute: () => mockUseRoute(),
}));

describe('Screen: CityDetailsScreen', () => {
  const weatherDetailsItemsIds = [
    {
      testId: 'weather-detail-humidity-value',
      value: `${CITY_WEATHER_DATA.humidity}%`,
    },
    {
      testId: 'weather-detail-pressure-value',
      value: `${CITY_WEATHER_DATA.pressure} hPa`,
    },
    {
      testId: 'weather-detail-wind-speed-value',
      value: `${CITY_WEATHER_DATA.windSpeed} mph`,
    },
    {
      testId: 'weather-detail-cloud-cover-value',
      value: `${CITY_WEATHER_DATA.cloudCover}%`,
    },
  ];

  it('should display city weather details', async () => {
    const {findByTestId} = render(<CityDetailsScreen />, {
      wrapper: ProvidersWrapper,
    });

    const weatherHeader = await findByTestId(
      `city-weather-item-${CITY_WEATHER_DATA.id}`,
    );

    await waitFor(async () => {
      expect(weatherHeader).toBeOnTheScreen();
      for (const {testId, value} of weatherDetailsItemsIds) {
        const weatherDetail = await findByTestId(testId);
        expect(within(weatherDetail).getByText(value)).toBeOnTheScreen();
      }
    });
  });
});
