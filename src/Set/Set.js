import React, { Component } from 'react';
import logo from '../logo.svg';
import './Set.scss';
console.log(logo)
class Set extends Component {
  render() {
    return (
      <div className="Set">
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={logo} className="main-logo" alt="" />
            <div className="realese-logo-b">
              <img src={logo} className="realese-logo-img" alt="" />
              <h3 className="relese-title">Team Up</h3>
              <p className="relese-date">Relesed 11.02.18</p>
            </div>

            <div className="set-info-b">
              <ul>
                <li>sdsdsd</li>
                <li>sdsdsd</li>
              </ul>
            </div>
          
          </a>
      </div>
    );
  }
}

export default Set;
