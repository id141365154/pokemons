import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Set from './Set/Set.js';


class App extends Component {
  render() {  
    return (
      <div className="App">
        <div className="sets-block">
          <Set/>
          <Set/>
          <Set/>
          <Set/>
        </div>
      </div>
    );
  }
}

export default App;
