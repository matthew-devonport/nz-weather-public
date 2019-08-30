import {loadWeather} from './api'
import moment from 'moment'

const db = require('../server/db')

export function launchApp() {
// if time load db
// else load weather 
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

let html = `<h1>${weatherData.name} - ${weatherData.sys.country}</h1>
            <h2>Temperature</h2>
            <p>Current Temp: ${weatherData.main.temp}<p>
            <p>Max Temp: ${weatherData.main.temp_max}<p>
            <p>Min Temp: ${weatherData.main.temp_min}<p>
            <p>Humidity: ${weatherData.main.humidity}<p>
            <p>Pressure: ${weatherData.main.pressure}<p><br>
            <h2>Weather Description</h2>
            <p>Weather Description: ${weatherData.weather[0].description}<p><br>
            <h2>Sunset / Sunrise</h2>
            <p>Sunrise: ${moment.unix(weatherData.sys.sunrise)}<p>
            <p>Sunset: ${moment.unix(weatherData.sys.sunset)}<p><br>
            <h2>Wind</h2>
            <p>Wind Speed: ${weatherData.wind.speed} mps<p>
            <p>Wind Direction: ${weatherData.wind.deg}<p>

`
document.getElementById('weather-data').innerHTML = html
}

