function initialize() {
  var mapOptions = {
    zoom: 16,
    center: new google.maps.LatLng(59.9386216,30.3228365,20.49)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
                                mapOptions);
//  var image = "http://i.neoseeker.com/mgv/499846/846/33/15847_179440563793_179437393793_2772323_4548598_n_icon.jpg";
	var image ="img/icons/marker-map.png";
  var myLatLng = new google.maps.LatLng(59.9386216,30.3228365,20.49);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);