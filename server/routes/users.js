const express = require('express')

const db = require('../db')

const router = express.Router()


router.get('/', (req, res) => {
  res.render('index')
})


router.post('/', (req, res) => {
  let data = req.body.body
  let dayData = sortData(data) 
db.insertDay(dayData, req.app.connection)
.then(result => {
  sortData(result)
  return result
  .catch(e => {
    res.status(500).send(e.message)
  })
})
})

module.exports = router

function sortData(weatherData) {
  
  let city = weatherData.name
  let weather = weatherData.weather[0].description
  let {temp, temp_max, temp_min, humidity, pressure} = weatherData.main  
  let {sunrise, sunset} = weatherData.sys
  let {speed, deg} = weatherData.wind
  
  let dayData = {}
  dayData.city = city
  dayData.currentTemp = temp
  dayData.maxTemp = temp_max
  dayData.minTemp = temp_min
  dayData.humidity = humidity
  dayData.pressure = pressure
  dayData.weatherDescription = weather
  dayData.sunrise = sunrise
  dayData.sunset = sunset
  dayData.windSpeed = speed
  dayData.windDirection = deg
  
  return dayData
  
  }