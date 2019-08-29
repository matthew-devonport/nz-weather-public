exports.seed = function (knex, Promise) {
  return knex('wgtn').insert([
    { id: 1, country: 'NZ', city: 'Wellington', currentTemp: 13.52, maxTemp: 15, minTemp: 12.22, humidity: 62, pressure: 1013, cloudDescription: 'scattered clouds', windSpeed: 9.3, windDirection: 360, sunrise: 1567057953, sunset: 1567057953},
  ])
}
