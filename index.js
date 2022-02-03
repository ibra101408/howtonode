var http = require('http');
var dt = require('./node_modules/module.js');
var url = require('url');
var fs = require('fs');
const {compileETag} = require("express/lib/utils");
var adr = 'http://localhost:8050/default.html?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;
console.log(qdata.month);



/*
http.createServer(function (req, res) {



        }).listen(8050);

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

