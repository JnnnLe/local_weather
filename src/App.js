import React, { Component } from 'react';

import './App.css';
import Weather from './Weather';

class App extends Component {
  constructor() {
    super();
    this.state = {
      lat: null,
      lon: null,
      isVisible: false,
      city: null, 
      tempC:null,
      icon: null,
      description: null
    }
    
    this.getLocation = this.getLocation.bind(this);
    this.showPosition = this.showPosition.bind(this);
    this.displayWeather = this.displayWeather.bind(this);

  //end of constructor
  }
  componentWillMount() {
    this.getLocation();
  };

  // componentDidMount() {
  //   this.state.lat ? this.displayWeather() : this.displayWeather();
  // }
  
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      alert('Sorry, your browser does not support Geolocation service.');
    }
  };
 
  showPosition(position) {
    this.setState({
      lat:  position.coords.latitude,
      lon: position.coords.longitude, 
      isVisible: true   
    });

    if (this.state.isVisible == true) {
      this.displayWeather();
    }
  };

  displayWeather() {
    let that = this;
    let lat = that.state.lat;
    let lon = that.state.lon;
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      console.log('This is my return:', myJson);
      this.setState ({
        city: myJson.name + ', CA',
        tempC: myJson.main.temp,
        icon: myJson.weather[0].icon,
        description: myJson.weather[0].main
      })
    });
  };
    
  render() {

    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">Weather App</h1>
        </header>

        {this.state.lat && this.state.lon ? 
          <Weather 
          state={this.state}
          /> : null}
      </div>
    );
  }
}

export default App;
