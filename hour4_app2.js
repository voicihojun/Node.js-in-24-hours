var fs = require('fs'),
	http = require('http');

http.get({host : 'www.google.com'}, function(res) {
	console.log("Got a response from www.google.com");
}).on('error', function(e) {
	console.log('There was an error from www.google.com');
});


http.get({host : 'www.opentutorials.org'}, function(res) {
	console.log("Got a response from www.opentutorials.org");
}).on('error', function(e) {
	console.log('There was an error from www.opentutorials.org');
});

fs.readFile('file1.txt', 'utf8', function(err, data) {
	if(err) throw err;
	console.log('File 1 read!');
});


http.get({host : 'www.bbc.co.uk'}, function(res) {
	console.log("Got a response from www.bbc.co.uk");
}).on('error', function(e) {
	console.log('There was an error from www.bbc.co.uk');
});

fs.readFile('file2.txt', 'utf8', function(err, data) {
	if(err) throw err;
	console.log('File 2 read!');
});