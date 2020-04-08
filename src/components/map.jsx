import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapA extends Component {

  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
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
         {props.listFlats.map( flat => <AnyReactComponent lat={flat.lat} lng={flat.lng} key={flat.lng} />)}
        </GoogleMapReact>
    );
  }
}

export default MapA;
