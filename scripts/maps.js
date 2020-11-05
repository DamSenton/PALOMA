function initMap() {
  var map = new google.maps.Map(document.getElementById("bar-map"), {
    zoom: 3,
    center: {
      lat: 53.891313,
      lng: -1.828576,
    },
  });
  

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    { lat: 51.513739, lng: -0.134188 }];

    var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });

  } 