const request = require('request');
require('dotenv').config();

module.exports.getWeather = (data, callback) => {
  const key = process.env.SECRET_KEY;
  request ({
    uri: `https://api.darksky.net/forecast/${key}/${data.latitude},${data.longtitude}`,
    json: true,
  }, (error, response, body) => {
    if(error || response.statusCode !== 200) {
      callback('Unable to fetch weather')
    }
    else {
      callback(undefined, {
        temperature: (body.currently.temperature-32)*5/9,
        apparentTemperature: (body.currently.apparentTemperature-32)*5/9,
      })
    }
  }
  );
}