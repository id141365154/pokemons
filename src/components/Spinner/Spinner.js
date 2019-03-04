import React from 'react';
import "./Spinner.scss"
import anim from "./anim.svg"
const Spinner = (props) => {
	if (props.isVisible) {
		return (
			<div className="Spinner">
				<img alt="loading indicator" src={anim} />
			</div>
		)
	} else {
		return null
	}
}


export default Spinner;