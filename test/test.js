var geolocation = require('../lib/geolocation.js');



var distance = geolocation.distanceBetweenTwoCoord('-1,-2','3,4');
console.log (distance);

var coord =  geolocation.adressToCoord('Paris, France');
console.log (coord);

var distance = geolocation.distanceBetweenTwoAdress('Paris, France','New-York city');
console.log (coord);
