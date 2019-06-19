var http = require('http');
http.createServer(function(req, res) {
	res.writeHead(301, {
		'Location' : 'http://www.opentutorials.org/'
		//301 : the address is permanently changed.
		
		// 1xx server received some request and wait for the rest of the request.
		// 2xx success
		// 3xx redirection
		// 4xx error

	});
	res.end();
}).listen(5000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:5000');