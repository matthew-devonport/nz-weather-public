import {loadWeather} from './api'
import moment from 'moment'
import request from 'superagent'

const db = require('../server/db')

export function launchApp() {
// if time load db
// else load weather 
onclicks()
loadWeather()
// .then(result => {
//   sortData(result.body)
//   return result
// })
// .then(result => {
//   renderData(result.body)
// })
}

function renderData(weatherData) {

let html = `<h1>${weatherData.city} - ${weatherData.country}</h1>
            <h2>Temperature</h2>
            <p>Current Temp: ${weatherData.currentTemp}<p>
            <p>Max Temp: ${weatherData.maxTemp}<p>
            <p>Min Temp: ${weatherData.minTemp}<p>
            <p>Humidity: ${weatherData.humidity}<p>
            <p>Pressure: ${weatherData.pressure}<p><br>
            <h2>Weather Description</h2>
            <p>Weather Description: ${weatherData.weatherDescription}<p><br>
            <h2>Sunset / Sunrise</h2>
            <p>Sunrise: ${moment.unix(weatherData.sunrise)}<p>
            <p>Sunset: ${moment.unix(weatherData.sunset)}<p><br>
            <h2>Wind</h2>
            <p>Wind Speed: ${weatherData.windSpeed} mps<p>
            <p>Wind Direction: ${weatherData.windDirection}<p>

            `
            document.getElementById('info').innerHTML = html
}

function sortData(weatherData) {
  console.log(weatherData)
  
let city = weatherData.name // city = 'wgtn' / 'auk' / 'chch'
 console.log(city)
let dayData = {}
dayData.city = weatherData.name


}

function onclicks() {
  document.getElementById('submit').addEventListener('click', (e) => {
    e.preventDefault()
    var city = document.getElementById('city').value
    request.get('/v1/city-info/' + city)
    .then(result => {
      renderData(result.body[0])
    })
  })
}

