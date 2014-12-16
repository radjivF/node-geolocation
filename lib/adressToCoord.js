var geocoderProvider = 'google';
var httpAdapter = 'http';


var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter);

// Using callback
geocoder.geocode('29 champs elysée paris', function(err, res) {
    console.log(res);
});
