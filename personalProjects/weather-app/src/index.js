import React from 'react';
import ReactDOM from 'react-dom';

class WeatherApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: null,
            latitude: null,
            longitude: null
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
    }

    handleSubmit (event) {
        event.preventDefault();
        fetch('/api/check', {method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'},
                    body: JSON.stringify(this.state)}).then(response => (response.json())).then(data => 
                        (this.setState({
                            temperature: data
                        })))
    }

    handleChange(event) {
        if (event.target.name === 'latitude')   {
        this.setState({latitude: event.target.value}, function(){
            console.log(this.state.latitude);
        });      
    } else {this.setState({longitude: event.target.value}, function(){
        console.log(this.state.longitude)
        }); 
    }}
    render() {
        if (this.state.temperature) {
        return <h1>The temperature is {this.state.temperature}</h1>} else {
                return (
                <div>
                <h2>Awaiting Postal Code...</h2>
                <form action='' onSubmit={this.handleSubmit}>
            Latitude:<br/>
            <input type="text" name="latitude" onChange={this.handleChange}/><br/>
            Longitude:<br/>
            <input type="text" name="longitude" onChange={this.handleChange} /><br/>
            <input type="submit" value="Submit"/>

        </form>
                </div>)
            }
        }
    }

ReactDOM.render(<WeatherApp />, document.getElementById('root'));
