import React from 'react';
import './Set.scss';
import {Link } from "react-router-dom";


const Set = (props) => {
  let mainLogoBg = 'style="background-image:url({props.logoUrl})"';

//    console.log(props);

  let formatDate = (dateStr) =>{
      let date = new Date(Date.parse(props.updatedAt));

      let addZero = (x)=>{return ( x < 10) ? ("0"+x) : x; }

      return `${addZero(date.getMonth()+1)}/${addZero(date.getDate())}/${date.getFullYear()}`
  }


  return (
    <div className="Set">
      <Link to={'/' + props.code}
          onClick={ props.fetchCards(props.code)}
          className="App-link"
        >
          <div className="main-logo" style={{ backgroundImage: `url(${props.logoUrl})` }}></div>
          <div className="realese-logo-b">
            <div className="realese-logo-img" style={{ backgroundImage: `url(${props.symbolUrl})` }}></div>
            <h3 className="relese-title">{props.name}</h3>
            <p className="relese-date">Relesed { formatDate(props.updatedAt)}</p>
          </div>

          { (props.expandedLegal || props.standardLegal) &&
            <div className="set-info-b">
              <ul>
                {props.standardLegal && <li>Standard Legal</li>}
                {props.expandedLegal && <li>Expanded Legal</li>}
              </ul>
            </div>}        
        </Link>
    </div>
  );
}


export default Set;
