// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(22.314330687523988, 72.62343569887153),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}