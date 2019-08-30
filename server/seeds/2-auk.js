exports.seed = function (knex, Promise) {
  return knex('auckland').insert([
    { id: 1, country: 'NZ', city: 'Auckland', currentTemp: 15.52, maxTemp: 17, minTemp: 14.47, humidity: 87, pressure: 1017, weatherDescription: 'no clouds', windSpeed: 5.4, windDirection: 45, sunrise: 1567057953, sunset: 1567057953},
  ])
}