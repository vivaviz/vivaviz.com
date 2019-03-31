import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import AutoWidth from '../AutoWidth/AutoWidth';
import Header from '../Header/Header';
import BigText from '../BigText/BigText';
import BannerChart from '../BannerChart/BannerChart';
import Projects from '../Projects/Projects';
import Footer from '../Footer/Footer';
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
          <Row>
            <Col>
              <h2>Give Your Data Life!</h2>
              <p>
                Have a great dataset, but need more out of it? Have a application in need of some
                informative visualizations? Have data, but need help analyzing it?
              </p>
              <p>
                <strong>VivaViz Can Help!</strong>
              </p>
              <p>
                VivaViz offers boutique data consulting services, specializing in data
                visualization, data analysis, and education.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 id="our-work">Our Work</h2>
              <p>Selected Projects:</p>
              <Projects />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 id="contact">Hire Us</h2>
              <Button>Get In Touch</Button>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
