import React, { Component } from 'react';
import { connect } from 'react-redux';
//import logo from './logo.svg';
//import './App.css';
import Set from './Set/Set.js';
import { fetchCards } from './actions';
import { clearCards } from './actions'
import './Sets.css';


class Sets extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
      this.props.dispatch(clearCards());
  }

  render() {
    let setList = "Loading sets...";

    if (typeof this.props.sets[0] !== 'undefined') { 
       setList = this.props.sets[0].map((val, key, arr)=>{
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
                />
              
          )
      });
    }
    return  (
          <div className="App">
            <div className="sets-block">
              {setList}            
            </div>
          </div>
        );
  }
}


const mapStateToProps = function(state) {
  return {
    sets: state.sets
  }
}

export default connect(mapStateToProps)(Sets);