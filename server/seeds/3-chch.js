exports.seed = function (knex, Promise) {
  return knex('christchurch').insert([
    { id: 1, country: 'NZ', city: 'Christchurch', currentTemp: 12.25, maxTemp: 13, minTemp: 11.11, humidity: 53, pressure: 1013, weatherDescription: 'so many clouds clouds', windSpeed: 1.3, windDirection: 2650, sunrise: 1567057953, sunset: 1567057953},
  ])
}