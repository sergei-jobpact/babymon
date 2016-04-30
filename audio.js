'use strict';

var readAudio = require('read-audio');
var through = require('through2');
var terminalBar = require('terminal-bar');


/*
var audio = readAudio()
	.pipe(through.obj(function(arr, enc, cb) {
		var data = [].slice.call(arr.data).slice(0, 128);
		cb(null, terminalBar(data) + "\n");
	}))
	.pipe(process.stdout);
*/


var audio = readAudio();
audio.on('data', function(audio) {
// 	console.log('shape: %j', audio.shape[0]);
// 	for(var i=0;i<audio.shape[0];i++) {
		console.log(Math.abs(audio.get(0,0)));
// 	}
// 	ascope.draw(function (t) {
// 		return cbuf.get(Math.floor(t * 1024))
// 	});
});
