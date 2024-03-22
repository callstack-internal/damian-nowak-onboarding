import {setupGetCityWeatherForLocationSuccessHandler} from './mocks/handlers.ts';
import {server} from './mocks/server.ts';
import {testQueryClient} from './utils.tsx';

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  setupGetCityWeatherForLocationSuccessHandler();
});

afterEach(() => {
  testQueryClient.clear();
});

afterAll(() => {
  server.close();
});
