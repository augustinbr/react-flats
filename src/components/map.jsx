import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;

class MapA extends Component {

  static defaultProps = {
    center: {
      lat: 48.866667,
      lng: 2.333333
    },
    zoom: 11
  };

  render() {
    return (
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCl4IJiCfdHzP1ix3aeHGLY9SnY34YW3MQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
    );
  }
}

export default MapA;
