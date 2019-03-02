import React, { Component } from 'react';
import { connect } from 'react-redux';
//import logo from './logo.svg';
//import './App.css';
import Card from './Card/Card.js';
import { fetchCards } from './actions';


const Cards = (props) => {
    let cardList = "Loading cards...";

    if (typeof props.cards[0] !== 'undefined') { 
       cardList = props.cards[0].map((val, key, arr)=>{
          return (
            <Card 
              key={key} 
              name={val.name}
                />
          )
      });
    }

    return (
          <div className="App">
            <div className="sets-block">
              {cardList}            
            </div>
          </div>
        );
}

const mapStateToProps = function(state) {
  return {
    cards: state.cards
  }
}

export default connect(mapStateToProps)(Cards);

//export default App;
