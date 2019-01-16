import React, { Component } from 'react';
//this.props.match.params.color
class ColorDetails extends Component {
  render() {
    return <div>{this.props.match.params.color}</div>;
  }
}

export default ColorDetails;
