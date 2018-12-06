
const request = require('request');
module.exports.geocodeAddress = (address, callback) => {
  const encodedURI = encodeURIComponent(address);

  const options = {
    url: `http://www.mapquestapi.com/geocoding/v1/address?key=3xJlqyYUZFP1WdfSjQsyKzluG3JQcHGa&location=${encodedURI}`,
    json: true,
  }
  request(options, (error, response, body) => {
    if(error) {
      callback('Unable to connect to google service')
    } 
    else {
      callback(undefined, {
        address: body.results[0].providedLocation.location,
        latitude: body.results[0].locations[0].latLng.lat,
        longtitude: body.results[0].locations[0].latLng.lng,
      })
    }
  })
}
// 0d6a4681cf49c7cfcd66523997c1e2dc