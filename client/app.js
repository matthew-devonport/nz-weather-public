import {loadWeather} from './api'
import moment from 'moment'
import request from 'superagent'

export function launchApp() {
// if time load db
// else load weather 
onclicks()
loadWeather()
.then(result => {
  sortData(result.body)
  return result
})
.then(result => {
  renderData(result.body)
})
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
      console.log(result.body)
    })
  })
}