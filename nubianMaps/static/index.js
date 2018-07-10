var GoogleMapsLoader = require('google-maps');
var keys = require('../../keys')
var mapsKey = keys.googleMaps
GoogleMapsLoader.KEY = mapsKey
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']

class BlackMap extends React.Component {

    componentDidMount() {
		var map;
		var markers = {}
		var infowindows = {}
        fetch('/api/all').then(function(response){
            response.json().then(function(allBusinesses){

                allBusinesses.forEach(function(business) {

                    var request = {
                        placeId: business.placeID,
                        fields: ['name', 'geometry']
                    };
                    // creates a map if none exists, centering it at index 0
                    if (!map){
                        GoogleMapsLoader.load(function(google)  {
                            map = new google.maps.Map(document.getElementById('map'), {
                                center: {
									lat: 43.663791, lng: -79.343618
								},
                                zoom: 17
                            });
                        })
                    }

                    GoogleMapsLoader.load(function(google)  {
					// places library
					var service = new google.maps.places.PlacesService(map);
					service.getDetails(request, callback);
					
                    function callback(place, status) {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {

								// creates a marker & adds info box

								var name = place.name
								console.log(name)
    
                        		markers[name] = new google.maps.Marker({
                            	position: place.geometry.location,
                            	map: map
								});
					
                            	infowindows[name] = new google.maps.InfoWindow({
                                content: place.name
                            });
                            markers[name].addListener('click', function(){
                                console.log('click')
                                infowindows[name].open(map, markers[name])
							})
							
                        }
					}
				});
            }); })
        })
    }

    render() {
        var mapStyle ={
            width: "100%",
            height: "400px"
        }
        return (
            React.createElement("div", {id: "map", style: mapStyle})
        )
    }
}




ReactDOM.render(
    React.createElement(BlackMap, null),
    document.getElementById('root')

);

// browserify -t reactify index.js -o App.js