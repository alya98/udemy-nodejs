const request = require('request');

const geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    const encodedURI = encodeURIComponent(address);
    const key = process.env.SECRET_KEY;
    const options = {
      url: `http://www.mapquestapi.com/geocoding/v1/address?key=3xJlqyYUZFP1WdfSjQsyKzluG3JQcHGa&location=${encodedURI}`,
      json: true,
    }
    request(options, (error, response, body) => {
      if(error) {
        reject('Unable to connect to google service')
      } 
      else {
        resolve({
          address: body.results[0].providedLocation.location,
          latitude: body.results[0].locations[0].latLng.lat,
          longtitude: body.results[0].locations[0].latLng.lng,
        })
      }
    })
    
  })
}

geocodeAddress('19146').then(location => {
  console.log(JSON.stringify(location,undefined,2))
}).catch(error => console.log(error))