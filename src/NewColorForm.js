import React, { Component } from 'react';

class NewColorForm extends Component {
  constructor(props) {
    super(props);
    this.state = { color: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    console.log('inside handleChange', evt.target.value);
    this.setState({ color: evt.target.value });
  }

  handleSubmit(evt) {
    console.log('inside handleSubmit');
    evt.preventDefault();
    this.props.addColor(this.state);
    this.setState({ value: '' });
  }

  render() {
    console.log('New Color Form state is', this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="color"
            id="color"
            name="color"
            placeholder="#000000"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <label for="head">Enter Color</label>
          <button> Add A Color</button>
        </form>
        Testing NewColorForm
      </div>
    );
  }
}
export default NewColorForm;
