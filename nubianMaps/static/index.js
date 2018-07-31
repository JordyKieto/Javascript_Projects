var GoogleMapsLoader = require('google-maps');
GoogleMapsLoader.KEY = require('../../keys').googleMaps
GoogleMapsLoader.LIBRARIES = ['geometry', 'places']
var BrowserRouter = require('react-router-dom').BrowserRouter
var Route = require('react-router-dom').Route
var Link = require('react-router-dom').Link
var Router = require('react-router-dom').Router

function PlaceSearchBar() {
    return(
        <input id="pac-input" class="controls" type="text"
        placeholder="Enter a location"/>
    )
}

class AdminMap extends React.Component {
    componentDidMount() {
        GoogleMapsLoader.load(function(google)  {
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: 43.642567, lng: -79.387054},
                zoom: 13
            });
            var input = document.getElementById('pac-input');

            var autocomplete = new google.maps.places.Autocomplete(input);
            autocomplete.bindTo('bounds', map);

            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            var infowindow = new google.maps.InfoWindow();
            var infowindowContent = document.getElementById('infowindow-content');
            infowindow.setContent(infowindowContent);
            var marker = new google.maps.Marker({
                map: map
            });
            marker.addListener('click', function(){
                infowindow.open(map, marker);
            })

            autocomplete.addListener('place_changed', function(){
                infowindow.close();
                var place = autocomplete.getPlace();
                if (!place.geometry){
                    return;
                }

                if (place.geometry.viewport) {
                    map.fitBounds(place.geometry.viewport);
                } else {
                    map.setCenter(place.geometry.location);
                    map.setZoom(17);
                }

                marker.setPlace({
                    placeId: place.place_id,
                    location: place.geometry.location
                });
                marker.setVisible(true);

                infowindowContent.children['place-name'].textContent = place.name;
                infowindowContent.children['place-id'].textContent = place.place_id;
                infowindowContent.children['place-address'].textContent =
                    place.formatted_address;
                infowindow.open(map, marker)
            });
        });
    }

    render() {
        var mapStyle ={
            width: "100%",
            height: "400px"
        }
        return (
        <div>
        <div id="map" style={mapStyle}></div>
        <input id="pac-input" class="controls" type="text"
        placeholder="Enter a location"/>
        </div>
         //   React.createElement("div", {id: "map", style: mapStyle},
         //   React.createElement("input", {id: "pac-input", type: "text", placeholder: "Enter a location"})
          //  )
        )
    }
}

class MainMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
		var map;
		var markers = {}
        var infowindows = {}
        fetch('/api/businesses/' + this.props.category).then(function(response){
            response.json().then(function(allBusinesses){

                allBusinesses.forEach(function(business, index, array) {

                    var request = {
                        placeId: business.placeID,
                        fields: ['name', 'geometry']
                    };
                    // creates a map
                    if (!map){
                        GoogleMapsLoader.load(function(google)  {
                            map = new google.maps.Map(document.getElementById('map'), {
                            });
                        })
                        }

                    GoogleMapsLoader.load(function(google)  {
                    
                    var bounds = new google.maps.LatLngBounds();
					// places library
					var service = new google.maps.places.PlacesService(map);
					service.getDetails(request, callback);
					
                    function callback(place, status) {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {

								// creates a marker & adds info box

								var lat = place.geometry.location.lat()
								var lng = place.geometry.location.lng()

								var name = place.name
    
                        		markers[name] = new google.maps.Marker({
                            	position: place.geometry.location,
                            	map: map
								});
					
                            	infowindows[name] = new google.maps.InfoWindow({
                                content: place.name
                                });

                                markers[name].addListener('click', function(){
                                infowindows[name].open(map, markers[name])
								});
								bounds.extend(new google.maps.LatLng(lat, lng));

						}
							map.fitBounds(bounds)
							map.setZoom(13)
					}

				});
			});
		})
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

const App = () => (
 
    <div>
    <h1 style={styles.header}>Nubian Maps </h1>
    <ul style={styles.nav}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/entertainment">Entertainment</NavLink>
        <NavLink to="/networking">Networking</NavLink>
        <NavLink to="/food">Food</NavLink>
        <NavLink to="/cosmetics">Cosmetics</NavLink>
        <NavLink to="/admin">Admin</NavLink>
    </ul>
    <Route exact path="/" render={(props) => <MainMap {...props} category={'all'}/>} />
    <Route exact path="/entertainment" render={(props) => <MainMap {...props} category={'entertainment'}/>} />
    <Route exact path="/networking" render={(props) => <MainMap {...props} category={'networking'}/>} />
    <Route path="/admin" component={AdminMap}/>
    </div>

)
const NavLink = props => (
    <li style={styles.navItem}>
      <Link {...props} style={{ color: "inherit" }} />
    </li>
  );

const styles = {};

styles.nav = {
    padding: 0,
    margin: 0,
    position: "relative",
    top: 0,
    height: "40px",
    width: "100%",
    display: "flex"
  };

  styles.navItem = {
    textAlign: "center",
    flex: 1,
    listStyleType: "none",
    // change to padding everywhere except top
    padding: "5px",
    backgroundColor: "#e6e6e6",
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  };

  styles.header = {
      textAlign: "center",
      width: "100%",
      height: "50px",
      padding: 0,
      margin: 0,
      backgroundColor: "#737373"

  }

ReactDOM.render(
   React.createElement(BrowserRouter, null,
            React.createElement(App, null)),
            document.getElementById('root')
);

// watchify -t reactify index.js -o App.js -v