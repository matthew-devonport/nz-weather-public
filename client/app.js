import {loadWeather} from './api'
import moment from 'moment'

export function launchApp() {
loadWeather()
.then(result => {
  renderData(result.body)
})
}

function renderData(weatherData) {
  console.log(weatherData)

let html = `<h1>${weatherData.name} - ${weatherData.sys.country}</h1>
            <h2>Temperature</h2>
            <p>Current Temp: ${weatherData.main.temp}<p>
            <p>Max Temp: ${weatherData.main.temp_max}<p>
            <p>Min Temp: ${weatherData.main.temp_min}<p>
            <p>Humidity: ${weatherData.main.humidity}<p>
            <h2>Other Information</h2>
            <p>Sunrise: ${moment.unix(weatherData.sys.sunrise)}<p>
            <p>Sunset: ${moment.unix(weatherData.sys.sunset)}<p>

`
document.getElementById('weather-data').innerHTML = html
}