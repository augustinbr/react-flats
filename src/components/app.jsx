import React, { Component } from 'react';
import flats from './flats';
import ListFlats from './list-flat';
import Flat from './flat';
import MapA from './map';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      listFlats: flats,

      selectedFlat: {
        lng: 48.884211,
        lat: 2.34689
      }
    });
  }

  selectFlat = (lng, lat) => {
    this.setState({ selectedFlat: { lng: lng, lat: lat } });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <ListFlats listFlats={this.state.listFlats} selectFlat={this.selectFlat} />
        </div>
        <div className="map-container">
          <MapA selectedFlat={this.state.selectedFlat} />
        </div>
      </div>
    );
  }
}

export default App;
