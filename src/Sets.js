import React, { Component } from 'react';
import { connect } from 'react-redux';
import Set from './Set/Set.js';
import { fetchCards } from './actions';
import { clearCards } from './actions'
import './Sets.css';

import { fetchSets } from './actions'

import Loadmore from './LoadMore'


class Sets extends React.Component {

  constructor(props) {
    super(props);
    
  }

  componentDidMount(){
      this.props.dispatch(clearCards());
  }

  render() {
    let setList = "Loading sets...";

    console.log(this.props)

    if (typeof this.props.sets.posts !== 'undefined') { 
       setList = this.props.sets.posts.map((val, key, arr)=>{
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
           
              <Loadmore isShowMore={this.props.sets.showMore} clickHandler={()=>{
                  this.props.dispatch(fetchSets({
                    pageSize:this.props.sets.pageSize,
                    page:this.props.sets.page+1
                  }));
              }}/>
             
          </div>
        );
  }
}


const mapStateToProps = function(state) {
  return {
    sets: state.sets,
    pageSize: state.pageSize,
    page: state.page
  }
}

export default connect(mapStateToProps)(Sets);