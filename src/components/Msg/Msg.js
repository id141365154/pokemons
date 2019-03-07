import React from 'react';
import "./Msg.scss"
const Msg = (props) => {
	return (
		<div className="Msg">
				{props.message}
			</div>
	)
}


export default Msg;