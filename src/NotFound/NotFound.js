import React from 'react';
import ReactDOM from 'react-dom';
import {Link } from "react-router-dom";
import './NotFound.scss';



const notFound =()=>{
  return(
  	<div className="not-found">
      <h1>Ooops, this is 404 error</h1>
      <Link to={'/'}>Try this link</Link>
  	</div>
    )
}

export default notFound;
