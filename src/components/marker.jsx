import React from 'react';
import './Marker.css';

const Marker = (prop) => {
  return (
      <div className="marker">
        {props}
      </div>
  );
};

export default Marker;

const AnyReactComponent = ({ text }) => <div className="marker">{text}</div>;
