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

router.get('/v1/city-info/:city', (req, res) => {
  city = req.params.city
  db.getCityInfo(city, req.app.connection).then(result => {
    res.json(result)
  })
})


module.exports = router

function sortData(weatherData) {

  let dateEntered = new Date
  let city = weatherData.name
  let weather = weatherData.weather[0].description
  let {temp, temp_max, temp_min, humidity, pressure} = weatherData.main  
  let {country, sunrise, sunset} = weatherData.sys
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
  dayData.country = country
  dayData.windSpeed = speed
  dayData.windDirection = deg
  dayData.dateEntered = dateEntered
  
  return dayData
  
  }