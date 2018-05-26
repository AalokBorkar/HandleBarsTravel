/*
 * Write your routing code in this file.  Make sure to add your name and
 * @oregonstate.edu email address below.
 *
 * Name: Aalok Borkar
 * Email: borkaraa@oregonstate.edu
 */

	var path = require('path');
	var express = require('express');
	var exphbs = require('express-handlebars');
	var fs = require('fs');
	var app = express();

	app.engine('handlebars', exphbs());
	app.set('view engine', 'handlebars');

	var port = process.env.PORT || 3000;

	var rawData = fs.readFileSync('./twitData.json');
	var twitData = JSON.parse(rawData); //get the tweet data (text/authors)


	app.get('/', function (req, res) {
	  res.status(200).render('newView', {data: twitData});

	});

	app.use(express.static('public'));

	app.get('*', function (req, res) {
	  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
	});

	app.listen(port, function () {
	  console.log("== Server is listening on port", port);
	});
