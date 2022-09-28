const express = require('express');
const { join } = require('path');
const app = express();
const path = require('path');
const port = 3000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug')

/*app.get('/', (req, res)=>{
    res.send('hello PUG')
});
*/

app.get('/',(req,res) =>{
    res.render('index', {
        var1: "Hi all",
        var2: "This is Pug"
    });
});

app.listen(port, ()=>{
console.log("server is running on port " + port)
});

