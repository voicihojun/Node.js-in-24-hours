var http = require('http');

var options = {
	host : "shapeshed.com",
	// host : "www.google.com", 
	// when i use www.google.com instead of shapeshed.com. the result of res.statusCode below is 200.
	port: 80,
	path: '/'
};

http.get(options, function(res) {
	console.log(res.statusCode);  // the result is 301. In the book, the result need to be 200.
	// i wanted to fix it.
	// in the dev tool of the Chrome
	// https://shapeshed.com  --  200
	// http://shapeshed.com  -- 301
	// so, i put the options's host : "https://shapeshed.com". 
	// but error message occured.

	if(res.statusCode == 200) {
		console.log('The site is up!');
	} else {
		console.log('The site is down!');
	}
}).on('error', function(e) {
	console.log('There was an error: ' + e.message);
})