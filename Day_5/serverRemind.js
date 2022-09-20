var http = require ('http');
var fs = require ('fs');
var url = require('url');
var port = 8080;

http.createServer(
    function (req, res) {
        //console.log("in server");
        var q = url.parse(req.url, true);
        //console.log("After q");
        var filename = "." +q.pathname;
        //console.log("File Name");
        console.log(q.pathname);
        fs.readFile(filename,function(err,data){
            if(err){
                res.write("Somthing Went Wrong");
                return res.end("404 Not Found")
            }
            res.write(data);
            return res.end();
        })
    }
).listen(port);

