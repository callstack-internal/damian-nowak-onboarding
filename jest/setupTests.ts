import {server} from './mocks/server.ts';
import {testQueryClient} from './utils.tsx';

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
  testQueryClient.clear();
});

afterAll(() => {
  server.close();
});
