function initialize(){


   //Load Google Map
   var latlng = new google.maps.LatLng(37.39176052, -5.988072799999999);
   var myOptions = {
     zoom: 15,
     center: latlng,
     mapTypeId: google.maps.MapTypeId.ROADMAP
   };

   var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);

   var punto = new google.maps.LatLng(37.39176052, -5.988072799999999);


   var infowindow = new google.maps.InfoWindow({
       map: map,
       position: punto,
       content: 'ENCADECO  C/Francisco Carrión Mejías 10, Sevilla 41003, Sevilla'
     });
 }

google.maps.event.addDomListener(window, "load", initialize);
