function GetLocation() {
    console.log(navigator.geolocation);
    if (navigator.geolocation) {
        console.log("in get location");
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("p").innerHTML = "GeoLocation is not supported";
    }
};

function showPosition(position) {
    var x = document.getElementById('p');
    var y = document.getElementById("BTN");
    x.innerHTML = `Latitude: ${position.coords.latitude}Longtitide: ${position.coords.longitude}`;
}