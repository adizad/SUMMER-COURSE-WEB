var http = require('http');
var port = 3000;

http.createServer(
    function(req,res){
        res.write("Hello World! This is my first Node.js server");
        res.end();
    }
).listen(port);

