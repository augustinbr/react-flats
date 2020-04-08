import React from 'react';
import Flat from './flat';

const ListFlats = (props) => {
  return (
    <div className="card">
      {props.listFlats.map(flat => <Flat price={flat.price} key={flat.price} name={flat.name} />)}
    </div>
  );
};

export default ListFlats;
