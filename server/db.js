
module.exports = {
  insertDay,
  getCityInfo
}

function insertDay(dayData, db) {
  let city = dayData.city
  return db(city).update(dayData).where('id', 1)
}

function getCityInfo(city, db) {
  return db(city)
}