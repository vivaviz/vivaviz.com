import React, { Component } from 'react';
import vv from './vv.png';
import './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <ul className="left">
          <li>Work</li>
        </ul>
        <img style={{ width: 60, height: 60 }} src={vv} className="logo" alt="logo" />
        <ul className="right">
          <li>Hire</li>
        </ul>
      </header>
    );
  }
}

export default Header;
