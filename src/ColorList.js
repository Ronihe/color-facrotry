import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ColorList extends Component {
  render() {
    const divStyle = {
      margin: '40px',
      border: '5px solid pink'
    };
    console.log('in colorlist', this.props.colorData);
    return (
      <div>
        <h1>Welcome to color factory</h1>
        <Link to="/colors/new"> Add a new color</Link>
        {this.props.colorData.map(color => (
          <div>
            <Link to={`/colors/${color}`}> {color}</Link>
          </div>
        ))}
      </div>
    );
  }
}

export default ColorList;
