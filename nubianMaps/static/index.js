var GoogleMapsLoader = require('google-maps');
var keys = require('../../keys')
var mapsKey = keys.googleMaps
GoogleMapsLoader.KEY = mapsKey
GoogleMapsLoader.LIBRARIES = ['places']



class BlackMap extends React.Component {

    componentDidMount() {
        fetch('/api/all').then(function(response){
            response.json().then(function(data){
                console.log(data)
         
        
        var obsidian = {
            lat: 43.663791, lng: -79.343618
        }

        var request = {
            placeId: data,
            fields: ['name']
        }
        GoogleMapsLoader.load(function(google)  {
            console.log('inside function')
            var map = new google.maps.Map(document.getElementById('map'), {
                center: obsidian,
                zoom: 17
            });
            var marker = new google.maps.Marker({
                position: obsidian,
                map: map
            });
            var service = new google.maps.places.PlacesService(map);
            service.getDetails(request, callback);

            function callback(place, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    var infowindow = new google.maps.InfoWindow({
                        content: place.name
                    });
                    marker.addListener('click', function(){
                        console.log('click')
                        infowindow.open(map, marker)
                    })
                }
            }
    

        })
    })
       })
    }

    render() {
        var mapStyle ={
            width: "100%",
            height: "400px"
        }
        return (
            <div id="map" style={mapStyle}></div>
        )
    }
}





ReactDOM.render(
    <BlackMap />,
    document.getElementById('root')

);

// browserify -t reactify index.js -o App.js