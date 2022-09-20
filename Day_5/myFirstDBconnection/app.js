const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mysql = require("mysql2");
const dbConfig = require("./dbconfig.js");

// Create a connection to the database
const connection = mysql.createConnection({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
});

// parse requests of contenttype: application/json
app.use(bodyParser.json());
// parse requests of contenttype: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));
// simple route
app.get("/", (req, res) => {
    res.json({ message: "Lets Try This DB Connection." });
});
// set port, listen for requests
app.listen(3000, () => {
    console.log("Server Is Running On Port 3000.");
});