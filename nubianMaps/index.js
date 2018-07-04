var GoogleMapsLoader = require('google-maps');
var keys = require('../keys')
var mapsKey = keys.googleMaps
GoogleMapsLoader.KEY = mapsKey


class BlackMap extends React.Component {

    componentDidMount() {
        var obsidian = {
            lat: 43.663791, lng: -79.343618
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
            })
        })
    }

    render() {
        var mapStyle ={
            width: "300px",
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