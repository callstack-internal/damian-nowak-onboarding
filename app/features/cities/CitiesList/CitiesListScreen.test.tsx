import React from 'react';

import {
  render,
  userEvent,
  waitFor,
  within,
} from '@testing-library/react-native';

import CitiesListScreen from './CitiesListScreen.tsx';
import {GET_WEATHER_FOR_CITIES_RESPONSE_DATA} from '../../../../jest/mocks/data';
import {
  setupGetWeatherForCitiesEmptyDataHandler,
  setupGetWeatherForCitiesFailedHandler,
  setupGetWeatherForCitiesSuccessHandler,
} from '../../../../jest/mocks/handlers.ts';
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

    const testCityItemsFromApi = GET_WEATHER_FOR_CITIES_RESPONSE_DATA.list.map(
      item => ({
        id: item.id,
        name: item.name,
        conditions: item.weather[0].main,
        temp: item.main.temp,
      }),
    );
    it.each(testCityItemsFromApi)(
      'should display correct weather data for city id: $id',
      async ({id, name, conditions, temp}) => {
        const {findByTestId} = render(<CitiesListScreen />, {
          wrapper: ProvidersWrapper,
        });

        const cityWeatherItem = await findByTestId(`city-weather-item-${id}`);
        [name, conditions].forEach(text => {
          expect(within(cityWeatherItem).getByText(text)).toBeOnTheScreen();
        });

        expect(
          within(cityWeatherItem).getByText(`${temp} °F`),
        ).toBeOnTheScreen();
      },
    );
  });

  describe('empty', () => {
    beforeEach(() => setupGetWeatherForCitiesEmptyDataHandler());

    it('should display empty cities list message', async () => {
      const {findByText} = render(<CitiesListScreen />, {
        wrapper: ProvidersWrapper,
      });

      const emptyCitiesListMessage = await findByText('Nothing to show');

      await waitFor(() => {
        expect(emptyCitiesListMessage).toBeOnTheScreen();
      });
    });

    it('should refresh data after pressing refresh button', async () => {
      const {findByTestId, findAllByTestId} = render(<CitiesListScreen />, {
        wrapper: ProvidersWrapper,
      });

      const refreshButton = await findByTestId('refresh-cities-button');
      expect(refreshButton).toBeOnTheScreen();

      setupGetWeatherForCitiesSuccessHandler();

      const user = userEvent.setup();
      await user.press(refreshButton);

      const cityItems = await findAllByTestId(/^city-weather-item-/);

      expect(cityItems.length).toBe(
        GET_WEATHER_FOR_CITIES_RESPONSE_DATA.list.length,
      );
    });
  });

  describe('failed', () => {
    beforeEach(() => setupGetWeatherForCitiesFailedHandler());

    it('should display failed to fetch cities list error message', async () => {
      const {findByText} = render(<CitiesListScreen />, {
        wrapper: ProvidersWrapper,
      });

      const errorLoadingCitiesMessage = await findByText(
        /^Error: something went wrong/,
      );

      await waitFor(() => {
        expect(errorLoadingCitiesMessage).toBeOnTheScreen();
      });
    });

    it('should refresh data after pressing refresh button', async () => {
      const {findByTestId, findAllByTestId} = render(<CitiesListScreen />, {
        wrapper: ProvidersWrapper,
      });

      const refreshButton = await findByTestId('refresh-cities-button');
      expect(refreshButton).toBeOnTheScreen();

      setupGetWeatherForCitiesSuccessHandler();

      const user = userEvent.setup();
      await user.press(refreshButton);

      const cityItems = await findAllByTestId(/^city-weather-item-/);

      expect(cityItems.length).toBe(
        GET_WEATHER_FOR_CITIES_RESPONSE_DATA.list.length,
      );
    });
  });
});
