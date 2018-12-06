
const yargs = require('yargs');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/weather.js');
const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'address to fetch weather for',
    string: true
  }
})
.help()
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
  if (errorMessage) console.log(errorMessage)
  else {
    console.log(results.address);
    weather.getWeather(results, (errorMessage, results) => {
      if (errorMessage) console.log(errorMessage)
      else {
        console.log( `it's currently ${results.temperature}. it feels like ${results.apparentTemperature}`);
      }
    });
  }
})
