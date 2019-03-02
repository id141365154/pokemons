import React, { Component } from 'react';
import { connect } from 'react-redux';
//import logo from './logo.svg';
//import './App.css';
import Set from './Set/Set.js';
import { fetchCards } from './actions';
import './Sets.css';
const Sets = (props) => {
    let setList = "Loading sets...";

    let getCards = (code)=>{
      return ()=>{props.dispatch(fetchCards(code))}
    };

    if (typeof props.sets[0] !== 'undefined') { 
       setList = props.sets[0].map((val, key, arr)=>{
          return (
            <Set 
              key={key} 
              logoUrl={val.logoUrl} 
              name={val.name}
              symbolUrl={val.symbolUrl}
              updatedAt={val.updatedAt}
              standardLegal={val.standardLegal}
              expandedLegal={val.expandedLegal}
              code={val.code}
              fetchCards={getCards}
                />
              
          )
      });
    }


    return (
          <div className="App">
            <div className="sets-block">
              {setList}            
            </div>
          </div>
        );
}

const mapStateToProps = function(state) {
  return {
    sets: state.sets
  }
}

export default connect(mapStateToProps)(Sets);

//export default App;
