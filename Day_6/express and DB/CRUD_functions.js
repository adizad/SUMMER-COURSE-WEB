const sql = require('./db');
var path = require('path');

const createNewCustomer = function(req,res){
    // Validate request
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    const NewCustomer = {
        "email": req.body.CustomerEmail,
        "name": req.body.CustomerName
    };
    console.log(NewCustomer);

    sql.query("INSERT INTO customers SET ?", NewCustomer, (err, mysqlres) => {
        if (err) {
            console.log("ERROR: ", err);
            res.status(400).send({message: "error in creating an account " + err});
            return;
        }
        console.log("New customer created: ");
        //res.send({message:"YOU HAVE CREATED AN ACCOUNT"});
        res.sendfile(path.join(__dirname, "Page2.html"))
        return;
    });
};

const FindCustomer =  (req, res) => {
    if(!req.body){
        res.status(400).send({message:"search can not be empty"});
        return;
    }
    const Customer = req.query.SearchName;
    console.log(Customer);
    sql.query("SELECT * FROM customers where name like ?", Customer + "%", (err, results, fields)=>{
        if(err){
            console.log("ERROR IS:" + err);
            res.status(400).send("Somthing is wrong with query" + err);
            return;
        }
        console.log("Customer found");
        res.send(results);
        return;
    });
} ;

const Update =(req, res) => {
    if(!req.body){
        console.log("Body was empty");
        res.status(400).send("input cannot be empty");
        return;
    }
    var UpdateCustomer = {
        "email": req.body.NewEmail,
        "name": req.body.CustomerName
    };
    console.log(UpdateCustomer);
    let updateQuery = "Update Customers SET Email = ? Where Name = ?";
    let data = [UpdatedCustomer.email, UpdatedCustomer.name];

    sql.query(UpdateQuert, data, (err, results, fields)=>{
        if(err){
            console.log("error is:" + err);
            res.status(400).send({message:"error in updating customer " + err});
            return;
        };
        console.log("row affected" + results.affectedRows);
        //res.send({message:" number of rows changed" + results.affectedRows});
        res.sendfile(path.join(__dirname, "./views/Page4.html"))
        return;
    });
};


module.exports = {createNewCustomer, FindCustomer, Update};