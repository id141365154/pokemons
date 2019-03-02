import React from 'react';
import './Card.scss';
import {Link } from "react-router-dom";

const Card = (props) => {
  let mainLogoBg = 'style="background-image:url({props.logoUrl})"';


  return (
    <div className="Set">
    card
      <Link to={'/sets/' + props.code}
          className="App-link"
        >
          <div className="main-logo" style={{ backgroundImage: `url(${props.logoUrl})` }}></div>
          <div className="realese-logo-b">
            <h3 className="relese-title">{props.name}</h3>
          </div>     
        </Link>
    </div>
  );
}


export default Card;
