var distance = require('google-distance');

var options = {
  origin: 'New York City, USA',
  destination: 'San Diego, USA'
};
 
function onDistance (err, result) {
  if (err) {
    return console.error(err);
  }
 
  console.log(result);
}
 
distance.get(options, onDistance);