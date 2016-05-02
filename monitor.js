'use strict';

var fs = require('fs');
var request = require('request');
var config = require('./config.monitor');

console.log('BabyMon Monitor');

fs.watchFile(config.path, {interval:1000}, function(curr,prev) {
	console.log('File changed');
	uploadSnapshot(config.path);
});



function uploadSnapshot(path) {
	var formData = {
		time: Date.now(),
		file: fs.createReadStream(path)
	};
	request.post({url:config.server+'/snapshot', formData:formData}, function(err,res,body) {
		if(err) return console.error('request error: %j', err);
		console.log('body: %j', body);
	});
}

// uploadSnapshot('send.jpg');
