var http = require('http');

http.createServer(function(req, res) {
	res.writeHead(200,  {
		'Content-Type' : 'text/plain'
		// 'jules' : 'hwang' // ex) you can write down here your name or something 
	});
	res.end('hello world\n');
}).listen(5000, '127.0.0.1');
console.log("Server runnning at http://localhost:5000/");



