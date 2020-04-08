import React, { Component } from 'react';
import flats from './flats';
import ListFlats from './list-flat';
import Flat from './flat';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = ({
      listFlats: flats
    });
  }

  render() {
    return (
      <div className="flat-list">
        <ListFlats listFlats={this.state.listFlats} />
      </div>
    );
  }
}

export default App;
