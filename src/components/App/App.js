import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import logo from './logo.png';
import Header from '../Header/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <Row>
            <Col>
              <img style={{ maxWidth: '100%' }} src={logo} className="logo" alt="logo" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
