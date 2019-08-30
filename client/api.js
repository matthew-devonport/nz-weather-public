import request from 'superagent'
import { renderData } from './app'


export function checkEntry() {
    let currentDate = new Date
    request.get('/v1/city-info/wellington').then(result => {
        let resultJSON = JSON.parse(result.text)
        let dateEntered = resultJSON[0].dateEntered

        if ((dateEntered + 60000) < currentDate) {
            loadWeather()
        }
    })
}

function loadWeather() {

    // needs to check all cities
    return request.get('http://api.openweathermap.org/data/2.5/weather?q=wellington&appid=3c621f4b7b3efc1ffd3c2eba217d8e0c&units=metric')
        .catch(e => {
            console.log('oops', e)
        })
        .then((result) => {
            return request.post('/')
                .send(result)
        })
}