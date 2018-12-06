const axios = require('axios');
const yargs = require('yargs');
require('dotenv').config();

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

const encodedURI = encodeURIComponent(argv.address);
const options = {
  url: `http://www.mapquestapi.com/geocoding/v1/address?key=3xJlqyYUZFP1WdfSjQsyKzluG3JQcHGa&location=${encodedURI}`,
  json: true,
}
axios.get(options.url)
.then(response => {
  const key = process.env.SECRET_KEY;
  address = {
    latitude: response.data.results[0].locations[0].latLng.lat,
    longtitude: response.data.results[0].locations[0].latLng.lng,
  }
  const weatherUrl = `https://api.darksky.net/forecast/${key}/${address.latitude},${address.longtitude}`;
  return axios.get(weatherUrl)
  .then(response => {
    const results = {
      temperature: Math.round((response.data.currently.temperature-32)*5/9),
      apparentTemperature: (Math.round(response.data.currently.apparentTemperature-32)*5/9),
    }
    console.log( `it's currently ${results.temperature}. it feels like ${results.apparentTemperature}`);
  });
})
.catch(error => {
    console.log('unable to connect')
})