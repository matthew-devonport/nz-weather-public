
module.exports = {
  insertDay,
  getCityInfo
}

function insertDay(dayData, city, db) {
  return db(city).insert(dayData)
}

function getCityInfo(city, db) {
  return db(city)
}