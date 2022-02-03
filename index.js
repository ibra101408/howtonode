var http = require('http');
//var dt = require('./node_modules/module.js');
var url = require('url');
var fs = require('fs');
//const {compileETag} = require("express/lib/utils");
//var adr = 'http://localhost:8050/default.html?year=2017&month=february';

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function (err, data){
        if (err){
            res.writeHead(404,{'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8050);

/*


console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);



 fs.rename('mynewfile1.txt', 'myrenamedfile.txt',function (err){
            if (err) throw err;
            console.log("file renamed!");
        })


  fs.readFile('demofile1.html', function (err, data){
 res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();

 var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(req.url);
    res.write("     The date and time are currently: " + dt.myDataTime());
    res.end();
    res.end(txt);*/

