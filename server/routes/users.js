const express = require('express')

const db = require('../db')

const router = express.Router()


router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  db.insertDay(city, req.app.connetion)
  .then(() => {
    res.status(201).send('created')
  })
  .catch(e => {
    res.status(500).send(e.message)
  })
})

module.exports = router
