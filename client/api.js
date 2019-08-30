import request from 'superagent'

export function loadWeather() {
    return request.get('http://api.openweathermap.org/data/2.5/weather?q=wellington&appid=3c621f4b7b3efc1ffd3c2eba217d8e0c&units=metric')
    .catch(e => {
        console.log('oops', e)
    })
   .then((result) => {
       return request.post('/')
        .send(result)
    })
}