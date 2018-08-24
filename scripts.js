// // <script>
// var x = document.getElementById("demo");
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }
// function showPosition(position) {
//     x.innerHTML = "Latitude: " + position.coords.latitude +
//     "<br>Longitude: " + position.coords.longitude;
// }
// // </script>
//
// // This code depends on jQuery Core and Handlebars.js
//
// var api_key = '91e72cbea1ef3a6da53f840c9cde0852'; // Get your API key at developer.betterdoctor.com
//
// var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location='+latitude+','+longitude+',10&skip=2&limit=10&user_key=' + api_key;
//
//
//
// $.get(resource_url, function (data) {
//     // data: { meta: {<metadata>}, data: {<array[Practice]>} }
//     var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
//     document.getElementById('content-placeholder').innerHTML = template(data);
// });

// /////////////////////////////////////////////////////////////////////////////////////
// // This code depends on jQuery Core and Handlebars.js
var longitude=0;
var latitude=0;
var api_key = '91e72cbea1ef3a6da53f840c9cde0852'; // Get your API key at developer.betterdoctor.com
var resource_url = getLocation();


// document.write(position.coords.longitude)



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        //error
    }
}

function showPosition(position) {

  longitude=position.coords.longitude;
  latitude=position.coords.latitude;
  //document.write(position.coords.longitude) //prints -73.9859103
  var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location='+latitude+','+longitude+',10&skip=2&limit=20&user_key=' + api_key;
  console.log(resource_url)
  // console.log(data);
  $.get(resource_url, function (data) {
      // console.log(data);
      // data: { meta: {<metadata>}, data: {<array[Practice]>} }
      var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
      console.log(template);
      document.getElementById('content-placeholder').innerHTML = template(data);
      console.log(template(data));
  });
}




// //////////////////////////////////////////////////////////////////////////
//
// // This code depends on jQuery Core and Handlebars.js
// var longitude=0;
// // var latitude=0;
// var api_key = '91e72cbea1ef3a6da53f840c9cde0852'; // Get your API key at developer.betterdoctor.com
//
// var resource_url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=' + api_key;
//
//
//
// $.get(resource_url, function (data) {
//    // data: { meta: {<metadata>}, data: {<array[Practice]>} }
//    var template = Handlebars.compile(document.getElementById('docs-template').innerHTML);
//    document.getElementById('content-placeholder').innerHTML = template(data);
// });
