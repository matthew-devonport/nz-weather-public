const request = require('supertest')
const cheerio = require('cheerio')

const knex = require('knex')
const config = require('../../knexfile').test
const testDb = knex(config)

const server = require('../server')
server.connection = testDb

beforeAll(() => testDb.migrate.latest())
beforeEach(() => testDb.seed.run())

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
})

describe('GET /v1/city-info/wellington', () => {
  test('param wellington returns wellington', () => {
    return request(server)
      .get('/v1/city-info/wellington')
      .expect(200)
      .then(result => {
        expect(result.body[0].city).toBe('Wellington')
      })
  })

  test('param wellington only returns 1 result', () => {
    return request(server)
      .get('/v1/city-info/wellington')
      .expect(200)
      .then(result => {
        expect(result.body.length).toBe(1)
      })
  })
})