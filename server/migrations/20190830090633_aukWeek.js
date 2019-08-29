exports.up = (knex, Promise) => {
  return knex.schema.createTable('aukWeek', (table) => {
    table.increments('id').primary()
    table.string('country')
    table.string('city')
    table.string('currentTemp')
    table.float('maxTemp')
    table.float('minTemp')
    table.integer('humidity')
    table.integer('pressure')
    table.string('cloudDescription')
    table.float('windSpeed')
    table.integer('windDirection')
    table.integer('sunrise')
    table.integer('sunset')
    table.integer('dateEntered')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('aukWeek')
}
