
var distance = require('google-distance');


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
