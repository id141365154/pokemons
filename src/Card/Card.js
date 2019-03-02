import React from 'react';
import './Card.scss';
import {Link } from "react-router-dom";

const Card = (props) => {

  return (
    <div className="Card">
          <div className="main-pic" style={{ backgroundImage: `url(${props.data.imageUrl})` }}></div>
          <div className="realese-logo-b">
            <h3 className="relese-title">{props.data.name}</h3>
          </div>     
    </div>
  );
}


export default Card;
