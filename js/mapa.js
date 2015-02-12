function initialize(){

  var latitud = 37.3974953;
  var longitud = -5.978495400000001;
   //Load Google Map
   var latlng = new google.maps.LatLng(latitud, longitud);
   var myOptions = {
     zoom: 15,
     center: latlng,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   };

   var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

   var infowindow = new google.maps.InfoWindow({
       map: map,
       position: latlng,
       content: 'ENCADECO Inc. C/Jabugo 4, Sevilla 41008, Sevilla'
     });
 }

google.maps.event.addDomListener(window, "load", initialize);
