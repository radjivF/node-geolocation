
var distance = require('google-distance');
var geocoderProvider = 'google';
var httpAdapter = 'http';
var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter);

var me = module.exports;


/*
    get distance between two Addresses
    exemple: var distance = distanceBetweenTwoAdress('paris','San francisco');
*/
me.distanceBetweenTwoAdress = function(originAdress, destinationAdress){
  var options = {
    origin: originAdress,
    destination: destinationAdress
  };

  function onDistance (err, result) {
    if (err) {
      return console.error(err);
    }
    result= distance.get(options, onDistance);
    return result;
  }
};


/*
    convert an adress to Gps coord 
    exemple: var coord = adressToCoord('rue aboukir paris');
*/
me.adressToCoord = function(adress){
  var coord = geocoder.geocode(adress, function(err, result) {
    return result;
  });
  return coord;
}

/*
    convert Gps coord to an adress 
    exemple: var coord = coordToAdress('-1,-2','3,4');
*/
me.coordToAdress = function(lat, long){
  var adress = geocoder.reverse(lat, long, function(err, result) {
    return result;
  });
  return adress;
};


/*
    get distance between two Addresses
    exemple: var distance = distanceBetweenTwoCoord('-1,-2','3,4');
*/
me.distanceBetweenTwoCoord = function(originCoord, destinationCoord){
  var options = {
    origin: originCoord,
    destination: destinationCoord
  };

  function onDistance (err, result) {
    if (err) {
      return console.error(err);
    }
    return result;
  }

  result= distance.get(options, onDistance);
  return result;
}
