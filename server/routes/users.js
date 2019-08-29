const express = require('express')

const db = require('../db')

const router = express.Router()


router.get('/', (req, res) => {
  res.render('index')
})

router.get('/v1/city-info/:city', (req, res) => {
  city = req.params.city
  db.getCityInfo(city, req.app.connection).then(result => {
    res.json(result)
  })
})

module.exports = router
