exports.seed = function (knex, Promise) {
  return knex('wellington').insert([
    { id: 1, country: 'NZ', city: 'Wellington', currentTemp: 13.52, maxTemp: 15, minTemp: 12.22, humidity: 62, pressure: 1013, weatherDescription: 'scattered clouds', windSpeed: 9.3, windDirection: 360, sunrise: 1567057953, sunset: 1567057953, dateEntered: 1567057953},
  ])
}
