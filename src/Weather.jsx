import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super();
  }
  
  render() {
    return (
      <div>
        
        <h1><h1 id="city">{this.props.state.city}</h1></h1>
        <h2>{this.props.state.tempC} •C</h2>
        <img src={this.props.state.icon} alt={this.props.state.description}></img>
        <h2>{this.props.state.description}</h2>

        <footer>
          Created by Jnnnle &copy; 2018
        </footer>
      </div>
    )
  }
}

export default Weather;