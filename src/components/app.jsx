import React, { Component } from 'react';
import flats from './flats';
import ListFlats from './list-flat';
import Flat from './flat';
import MapA from './map';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      listFlats: flats
    });
  }

  render() {
    return (
      <div>
        <div className="flat-list">
          <ListFlats listFlats={this.state.listFlats} />
        </div>
        <div className="map-container">
          <MapA listFlats={this.state.listFlats}/>
        </div>
      </div>
    );
  }
}

export default App;
