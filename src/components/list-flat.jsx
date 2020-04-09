import React from 'react';
import Flat from './flat';

const ListFlats = (props) => {
  return (

    <div className="flat-list">
      {props.listFlats.map(flat => (<Flat price={flat.price} key={flat.price}
        name={flat.name} imageUrl={flat.imageUrl} lng={flat.lng} lat={flat.lat} />
      ))}
    </div>
  );
};

export default ListFlats;
