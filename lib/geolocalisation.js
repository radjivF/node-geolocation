var distance = require('google-distance');
var geocoderProvider = 'google';
var httpAdapter = 'http';
var geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter);


function distanceBetweenTwoAdress(originAdress, destinationAdress){
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


function adressToCoord(adress){
  var coord = geocoder.geocode(adress, function(err, result) {
    return result;
  });
  return coord;
}

function distanceBetweenTwoCoord(originCoord, destinationCoord){
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

module.exports.distanceBetweenTwoAdress = distanceBetweenTwoAdress;
module.exports.distanceBetweenTwoCoord = distanceBetweenTwoCoord;
module.exports.adressToCoord = adressToCoord;
