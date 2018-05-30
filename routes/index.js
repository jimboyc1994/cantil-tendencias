var express = require('express');
var router = express.Router();
var axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/srilanka', function(req, res, next) {
  res.render('srilanka');
});


router.get('/northkorea', function(req, res, next) {
  res.render('northkorea');
});
router.get('/detail1', function(req, res, next) {
  	const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/video';
	axios.get(SEARCH_URL, {
		params: {
			
			kind: 'youtube#video',
			etag: 'DuHzAJ-eQIiCIp7p4ldoVcVAOeY/2X6R5QxiiEkVWMnlC1911gOD2Wg'
			id: 'IzU4WA_mFFw'
		}
	})
	.then(function (response) {
		//console.log(response);
		console.log(response.data);
		res.render('daa', {daa: response.data});
	})
	.catch(function (error) {
		console.log(error);
	});
  
});


router.get('/weather', function(req, res, next) {
  	const SEARCH_URL = 'https://api.openweathermap.org/data/2.5/weather';
	axios.get(SEARCH_URL, {
		params: {
			q: 'Davao',
			units: 'metric',
			appid: '299dafbd93e95452304f176a39de2b2e'
		}
	})
	.then(function (response) {
		//console.log(response);
		console.log(response.data);
		res.render('weather', {weather: response.data});
	})
	.catch(function (error) {
		console.log(error);
	});
  
});

module.exports = router;
