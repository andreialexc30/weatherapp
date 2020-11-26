const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude + '&lon=' + longitude + '&units=metric&exclude=&appid=aa77d9cde24d1d4544789390ef354868';

    request( { url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather network!', undefined);
        }else if(body.error){
            callback('Unable to find location', undefined);
        }else {
            callback(undefined, `${body.current.weather[0].description} , it is currently ${body.current.temp} degrees out. But it feels more like ${body.current.feels_like} degrees. Daily temperature high of ${body.daily[0].temp.max} and a low of ${body.daily[0].temp.min}`);
        }
    })
}

module.exports = forecast;


//https://api.openweathermap.org/data/2.5/onecall?lat=46.770439&lon=23.591423&units=metric&exclude=hourly,daily&appid=aa77d9cde24d1d4544789390ef354868