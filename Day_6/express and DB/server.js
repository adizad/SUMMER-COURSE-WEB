const express = require ('express');
const BodyParser = require ('body-parser');
const app = express();
const port = 8080;
var sql = require('./db');
const connection = require('./db');
const path = require('path');
const CRUD = require("./CRUD_functions"); 

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended:true}));

app.get('/',(req, res)=>{
    res.sendFile(path.join(__dirname, 'Page1.html'))
    //res.json({message:'good morning day6'});
});

app.listen(port,()=>{
    console.log("server is running on port" + port);
});

app.get('/Update', (req, res)=>{
    res.sendFile(path.join(__dirname, "Page3.html"))
});
app.post('/createNewCustomer', CRUD.createNewCustomer);
app.get('/find', CRUD.FindCustomer);
app.post('/update', CRUD.Update)

// Create a route for getting all customers
app.get('/customers', function(req, res){
    sql.query("SELECT * FROM customers", (err, mysqlres) => {
        if (err) {
            console.log("ERRORRRRRRRRR: ", err);
            res.status(404).send({message: "error in getting all customers: " + err});
            return;
        }
        console.log("got all customers");
        res.send(mysqlres);
        return;
    });
});

