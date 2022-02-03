var http = require('http');
var dt = require('./node_modules/module.js');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {

        fs.rename('mynewfile1.txt', 'myrenamedfile.txt',function (err){
            if (err) throw err;
            console.log("file renamed!");
        })

        }).listen(8050);





/*




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

