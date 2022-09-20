const express = require('express');
const app = express();
const port = 8200;
var mysql = require('mysql2');

//conaction to mysql
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 's3kreee7',
    database: 'my_db'
  }) 
connection.connect()
connection.query('Select 1 + 1 As Solution', (err, rows, fields) => {
    if (err) throw err;
    console.log('The Solution Is: ', rows[0].solution);
}) 
connection.end()


express.static('.' , []);
express.static('__dirname' , []);


app.get('/',(req, res, next) => {
    //res.send("Hallo Express");
    //res.send(req.params);
    console.log("Here Are Req Params" + req.params);
    next();
}, function (req, res) {
    res.send("This Is A Handler With Two Callback Function");
})

app.listen(port, () => {
    console.log('App Listening At Port http://localhost:8200');
});

