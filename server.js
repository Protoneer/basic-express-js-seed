var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('views', __dirname + '/views'); 	// Views file folder
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.static('static')); 			// Static folder




// Routes
app.get('/', function (req, res) {
	res.send('Home!');
});

app.get('/text', function (req, res) {
	res.send('Hello World!');
});

app.get('/redirect', function (req, res) {
	res.redirect('/');
});

app.get('/json', function (req, res) {
	var results = {"Name":"Name"};	
	res.json(results);		
});

app.get('/index.html', function (req, res) {
	res.render('pages/index');
});





// Main Server Process
app.listen(80, function () {
  console.log('Server listening on port 127.0.0.1');
});