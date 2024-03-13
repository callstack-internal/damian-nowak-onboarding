import {http, HttpResponse} from 'msw';
import Config from 'react-native-config';

import {GET_WEATHER_FOR_CITIES_RESPONSE_DATA} from './data';
import {server} from './server.ts';
import {ApiRoutes} from '../../app/services/api/apiRoutes.ts';

const API_URL = Config.API_URL;

export const setupGetWeatherForCitiesSuccessHandler = () => {
  server.use(
    http.get(`${API_URL}${ApiRoutes.weatherGroup}`, () => {
      return HttpResponse.json(GET_WEATHER_FOR_CITIES_RESPONSE_DATA, {
        status: 200,
      });
    }),
  );
};

export const setupGetWeatherForCitiesEmptyDataHandler = () => {
  server.use(
    http.get(`${API_URL}${ApiRoutes.weatherGroup}`, () => {
      return HttpResponse.json(
        {},
        {
          status: 200,
        },
      );
    }),
  );
};

export const setupGetWeatherForCitiesFailedHandler = () => {
  server.use(
    http.get(`${API_URL}${ApiRoutes.weatherGroup}`, () => {
      return HttpResponse.error();
    }),
  );
};
