import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { RaisedButton } from 'material-ui';
import './App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <RaisedButton label="Default" />
        </MuiThemeProvider>
        <Home />
      </div>
    );
  }
}

export default App;
