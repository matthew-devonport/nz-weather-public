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
