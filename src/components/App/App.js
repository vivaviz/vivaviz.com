import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../Header/Header';
import BigText from '../BigText/BigText';
import BannerChart from '../BannerChart/BannerChart';
import AutoWidth from '../AutoWidth/AutoWidth';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <Header />
          <Row>
            <Col>
              <div className="banner">
                <div className="banner-item">
                  <AutoWidth>
                    <BannerChart />
                  </AutoWidth>
                </div>
                <div className="banner-item">
                  <BigText />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
