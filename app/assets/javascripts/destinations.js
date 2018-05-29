$(document).ready(function(){

		var myCoords = new google.maps.LatLng(latitude,longitude);

    function initialize() {
      var mapOptions = {
      center: myCoords,
      zoom: 15,
      scrollwheel: false

      };
        
      var map = new google.maps.Map(document.getElementById('destination-map'),
                mapOptions);    
  		
  		// var image = ({
  		// 	url: "<%= asset_path 'sbw.png' %>",
  		// 	size: new google.maps.Size(71, 71),
  		// });

    	var marker = new google.maps.Marker({
    		position: myCoords,
    		map: map,
    		title: address,
    		// icon: image,
    		animation: google.maps.Animation.DROP
    	});

   

    	var contentString = '<h2>' + address + '</h2>' + '<p>' + description + '</p>';

    	var infoWindow = new google.maps.InfoWindow({
    		content: contentString
    	});


    	google.maps.event.addListener(marker, 'click', function(){infoWindow.open(map,marker) 
    		
    	});

    }  
    google.maps.event.addDomListener(window, 'load', initialize);
});