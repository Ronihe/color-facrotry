import React, { Component } from 'react';
//this.props.match.params.color
class ColorDetails extends Component {
  render() {
    // we need to make sure the color is exsitng in parens't state
    return <div>{this.props.match.params.color}</div>;
  }
}

export default ColorDetails;
