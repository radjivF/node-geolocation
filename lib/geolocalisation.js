
var distance = require('google-distance');
var geocoderProvider = 'google';
var httpAdapter = 'http';
var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter);

var me = module.exports

me.distanceBetweenTwoAdress = function(originAdress, destinationAdress){
  var options = {
    origin: originAdress,
    destination: destinationAdress
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


me.distanceBetweenTwoAdress = function(adress){
  var coord = geocoder.geocode(adress, function(err, result) {
    return result;
  });
  return coord;
}

me.distanceBetweenTwoAdress = function(originCoord, destinationCoord){
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

