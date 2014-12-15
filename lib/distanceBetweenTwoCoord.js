
var distance = require('google-distance');
 
var options = {
  origin: '40.759011,-73.984472',
  destination: '37.810848,-122.267448'
};
 
function onDistance (err, result) {
  if (err) {
    return console.error(err);
  }
 
  console.log(result);
}
 
distance.get(options, onDistance);