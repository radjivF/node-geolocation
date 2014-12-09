var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	geocoderProvider = ('google'),
	httpAdapter = ('http'),
	geocoder = require('node-geocoder').getGeocoder(geocoderProvider, httpAdapter),
	fs = require('fs'),
	distance = require('google-distance')

	;

app.get('/', function(req, res){
	//res.writeHead('content-type','text/html');
	res.render('index.twig');
	//res.end('slt');
});
	
	var bikersAdresses = JSON.parse(fs.readFileSync('Resources/adresses.json'));

	var bikers = bikersAdresses.bikers;

	var lieu = null,
		country = null,
		city = null,
		nom = null,
		coordonnees = [],
		adressStore = null,
		adressCustomer = null,
		depart = null,
		distanceBiker = []
		;


	for(var i = 0; i < bikers.length; i++)
	{

		coordonnees[i] = bikers[i];
		nom = bikers[i].nom ;
		var c = 0 ;
		var d = 0;
		
		distanceBiker[0] = null;
		geocoder.reverse(bikers[i].latitude, bikers[i].longitude)
			.then(function(res){
				
				lieu = res[0];
				name = bikers[c].nom;
				country = lieu.country;
				city = lieu.city;
				depart = city + ',' + country;
				
				distance.get(
				  {
				    origin: depart,
				    destination: 'Paris, France'
				  },
				  function(err, data) {
				  	var prec = null;

				    if (err) {
				    	return console.log(err);
				    }

				    if(distanceBiker[0] == null)
				    {
				    	distanceBiker[d] = {"nom biker" : bikers[d].nom, "distance" : data.distance, "temps" : data.duration };
				    }

				    else
				    {

				    	prec = distanceBiker[d-1];

				    	if(distanceBiker[d-1].distance < data.distance ){
				    		distanceBiker[d] = {"nom biker" : bikers[d].nom, "distance" : data.distance, "temps" : data.duration };
				    	}

				    	else {
				    		if(distanceBiker[d-1].distance > data.distance )
					    	{
					    		distanceBiker[d-1] = {"nom biker" : bikers[d].nom, "distance" : data.distance, "temps" : data.duration };
					    		distanceBiker[d] = prec;
					    	}
					    	else{
					    		distanceBiker[d] = {"nom biker" : bikers[d].nom, "distance" : data.distance, "temps" : data.duration };
					    	}
					    }
				    	 console.log('prec : ' + distanceBiker[d-1].distance + ' svt : ' + distanceBiker[d].distance);
				    }
				   
				    console.log(distanceBiker[d]);
				    d++;
				   
				});

				c++;
			})
			.catch(function(err) {
		        console.log(err);
		    });
	}


server.listen(1337);