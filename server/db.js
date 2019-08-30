
module.exports = {
  insertDay,
  getCityInfo
}

function insertDay(dayData, db) {
  let city = dayData.city
  return db(city).insert(dayData)
}

function getCityInfo(city, db) {
  return db(city)
}