import React, { Component } from 'react';
import { Container } from 'reactstrap';
import logo from './logo.png';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Container>
          <img src={logo} className="logo" alt="logo" />
        </Container>
      </div>
    );
  }
}

export default App;
