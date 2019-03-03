import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./LoadMore.scss"
const Loadmore = (props)=>{
	let res = '';
	if (typeof props.isShowMore !== 'undefined') {
		if (props.isShowMore) {
			res = <button onClick={props.clickHandler}>Show more</button>;
		}else{
			res = "Sorry, but nothing found"
		}
	}
	return(
			<div className="Loadmore">
				{res}
			</div>
		)
}


export default Loadmore;