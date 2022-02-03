var http = require('http');
var dt = require('./node_modules/module.js');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(req.url);
    res.end(txt);
 /*


    res.write("     The date and time are currently: " + dt.myDataTime());
    res.end();*/
}).listen(8050);
