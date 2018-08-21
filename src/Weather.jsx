import React, { Component } from 'react';

class Weather extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h1>BE HAPPY.</h1>


        {this.props.lat}
        {this.props.lon}
      </div>
    )
  }
}

export default Weather;