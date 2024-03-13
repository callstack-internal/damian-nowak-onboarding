import React from 'react';

import {render, waitFor} from '@testing-library/react-native';

import CitiesListScreen from './CitiesListScreen.tsx';
import {GET_WEATHER_FOR_CITIES_RESPONSE_DATA} from '../../../../jest/mocks/data';
import {setupGetWeatherForCitiesSuccessHandler} from '../../../../jest/mocks/handlers.ts';
import {ProvidersWrapper} from '../../../../jest/utils.tsx';

describe('Screen: CitiesListScreen', () => {
  describe('success', () => {
    beforeEach(() => setupGetWeatherForCitiesSuccessHandler());
    it('should display cities list', async () => {
      const {findByTestId, findAllByTestId} = render(<CitiesListScreen />, {
        wrapper: ProvidersWrapper,
      });

      const citiesList = await findByTestId('cities-list');
      const cityItems = await findAllByTestId(/^city-weather-item-/);

      await waitFor(() => {
        expect(citiesList).toBeOnTheScreen();
        expect(cityItems.length).toBe(
          GET_WEATHER_FOR_CITIES_RESPONSE_DATA.list.length,
        );
      });
    });
  });
});
