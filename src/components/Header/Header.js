import React, { Component } from 'react';
import vv from './vv.svg';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <ul className="left">
          <li>Our Work</li>
        </ul>
        <img style={{ width: 60, height: 60 }} src={vv} className="logo" alt="logo" />
        <ul className="right">
          <li>Hire Us</li>
        </ul>
      </header>
    );
  }
}

export default Header;
