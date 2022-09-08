//var t;
//t = 13.2;
function MyGreeting() {
    console.log("im in my greeting");
    var d = new Date;
    var t = d.getUTCHours();


    if ( t < 12 ){
        document.getElementById("demo").innerHTML = "good morning";
    } else if ( t < 18 ) {
        document.getElementById("demo").innerHTML = "good afternoon";
    } else {
        document.getElementById("demo").innerHTML = "good evening"
    };
};
/*
var d = new Date;
console.log(d);
console.log(d.getHours())
var t = d.getHours
*/


for(i=0; i<3; i++){
    console.log("the number is " + i)
};

myFunction= () => {
    console.log("Hi");
};