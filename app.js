const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=03ed1cd929834798f4a12e26bf467261&query=37.8267,-122.4233'

request({ url: url }, (error, response) => {
    const data = JSON.parse(response.body)
    console.log(data.current)
})
