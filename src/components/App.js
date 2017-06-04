import React, { Component } from 'react';
import { Button, Container, Header } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Home from './Home';

class App extends Component {
  render() {
    return (
      <Container>
        <Header as='h1'>Live Count</Header>
        <Home />
      </Container>
    );
  }
}

export default App;
