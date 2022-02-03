var http = require('http');
var dt = require('./node_modules/module.js');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDataTime());
    res.end();
}).listen(8050);
