$('#collapseNav').collapse({
  toggle: false
})
function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -12.1193539, lng: -77.0345899},
    scrollwheel: false,
    zoom: 3
  });

  var infoWindow = new google.maps.Marker({map: map});


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          zoom:10
        };

        infoWindow.setPosition(pos);
        map.setCenter(pos);
        map.setZoom(15);
      }, function() {
        errorBrowser(true, Marker, map.getCenter());

      });
    } else {
      // En caso no encuentre
      errorBrowser(false, infoWindow, map.getCenter());
    }
  }

  function errorBrowser(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'El Navegador no puede ubicarlo' :
                          'Tu navegador no tinee soporte para ubicarte');


  var Partida = document.getElementById("partida");
  var Destino = document.getElementById("destino");
  new google.maps.places.Autocomplete(Partida);
  new google.maps.places.Autocomplete(Destino);



}
