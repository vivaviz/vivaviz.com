import React, { Component } from 'react';
import './BigText.scss';

class BigText extends Component {
  render() {
    return (
      <div className="BigText">
        <div className="words">
          <span className="word viva">
            V<span className="little">I</span>V<span className="a">A</span>
          </span>
          <span className="word viz">
            V<span className="little">I</span>Z
          </span>
        </div>
      </div>
    );
  }
}

export default BigText;
