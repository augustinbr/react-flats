import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.lng, this.props.lat);
  }

  render() {
    return (
      <div className="card" style={{ backgroundImage: `url(${this.props.imageUrl})`}}
        onClick={this.handleClick} onKeyDown={this.handleClick}
      >
        <div className="card-category">{this.props.price}</div>
        <div className="card-description">
          <h2>{this.props.name}</h2>
        </div>
        <a className="card-link" href="#"></a>
      </div>
    );
  }
}

export default Flat;
