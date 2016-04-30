'use strict';

const version = 'v0.0.1';

var express = require('express');
var bodyParser = require('body-parser');
var multiparty = require('connect-multiparty')();
var fs = require('fs');

var config = require('./config.server');

var app = express();
app.use(bodyParser.json({limit:'4MB'}));
app.listen(config.port, function() {
	console.log('BabyMon Server: Listening at http://localhost:%s', config.port);
});

app.get('/', function(req,res) {
	res.json({version:version});
});

app.post('/snapshot', multiparty, function(req,res) {
	var file = req.files.file;
	if(!file) return res.status(400).json({error:'File empty'});
	console.log('/snapshot posted: %j, file: %j', req.body, file);
	fs.rename(file.path, 'recv.jpg', function(err) {
		res.json(true);
	});
});
