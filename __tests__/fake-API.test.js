/**
 * @jest-environment node
 */

const server = require('../server/server');
const fetch  = require('isomorphic-fetch');
const config = require('../config');
const urlJoin = require('url-join');

beforeAll(async () => {
  return await server.launch();
}, 10000);

afterAll(async () => {
  return await server.stop();
});


describe('Testing the fake-API middleware', () => {

  test('Get a 200 response when fetching the server', () => {
    return fetch(config.api.url)
      .then(res => {
        expect(res.status).toBe(200);
      })
  }, 10000);

  test('Get content from the API ', () => {
    return fetch(config.api.url)
      .then(res => res.json())
      .then(res => {
        expect(typeof res).toBe('object');
      });

  }, 10000);

  test('Get a 404 when content do not exists', () => {
    return fetch(urlJoin(config.api.url, 'content-that-do-not-exists'))
      .catch(res => {
        expect(res.status).toBe(404);
      })
  }, 10000);
});
