import React from 'react';
import ReactDOM from 'react-dom';
import './NotFound.scss';



const notFound =()=>{
  return(
  	<div className="not-found">
      <h1>Ooops, this is 404 error</h1>
      <a href='/'>Try this link</a>
  	</div>
    )
}

export default notFound;
