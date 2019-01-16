import React, { Component } from 'react';
import logo from './logo.svg';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import ColorList from './ColorList.js';
import ColorDetails from './ColorDetails.js';
import NewColorForm from './NewColorForm.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ['red', 'blue', 'black']
    };
    this.addColor = this.addColor.bind(this);
  }

  addColor(color) {
    // addColor
    console.log('inside addColor', color);
    let newColor = color.color;
    console.log('newcolor', newColor);
    this.setState(state => ({
      colors: [...state.colors, newColor]
    }));
    //redirect to the home page
  }

  render() {
    console.log('In app.js', this.state.colors);
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/colors/new"
            render={() => <NewColorForm addColor={this.addColor} />}
          />
          <Route
            exact
            path="/colors"
            render={() => <ColorList colorData={this.state.colors} />}
          />
          <Route
            exact
            path="/colors/:color"
            render={colorStates => (
              <ColorDetails {...colorStates} colorData={this.state.colors} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
