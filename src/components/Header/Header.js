import React, { Component } from 'react';
import scrollToElement from 'scroll-to-element';
import { Button } from 'reactstrap';
import vv from './vv.svg';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <ul className="left">
          <li>
            <Button color="link" onClick={() => scrollToElement('#our-work')}>
              Our Work
            </Button>
          </li>
        </ul>
        <img style={{ width: 60, height: 60 }} src={vv} className="logo" alt="logo" />
        <ul className="right">
          <li>
            <Button color="link" onClick={() => scrollToElement('#contact')}>
              Hire Us
            </Button>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
