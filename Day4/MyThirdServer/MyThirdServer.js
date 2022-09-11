var http = require ('http');
var url = require ('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
var port = 8080;

http.createServer(function (req,res) {
    res.write('Hi For The Third Time');
    console.log(q.protocol);
    console.log(q.host);
    res.end();
}).listen(port);