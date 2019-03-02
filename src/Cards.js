import React, { Component } from 'react';
import { connect } from 'react-redux';
//import logo from './logo.svg';
//import './App.css';
import Card from './Card/Card.js';
import { fetchCards } from './actions';



const Cards = (props) => {
    let cardList = "Loading cards...";

    if (typeof props.cards.isFetched == 'undefined') {
      props.dispatch(fetchCards(props.match.params.code));
    }else if(!props.cards.isFetched){
      props.dispatch(fetchCards(props.match.params.code));
    }

    if (typeof props.cards.posts !== 'undefined') { 
      if (props.cards.posts.length>0) {
         cardList = props.cards.posts.map((val, key, arr)=>{
            return (
              <Card 
                key={key} 
                name={val.name}
                  />
            )
        });
      }
      else{
        cardList = "Sorry, cards not found!";
      }
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
