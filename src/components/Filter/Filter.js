import React from 'react';
import './Filter.scss';

const Filter = (props) => {

	let list = "Loading filter..."

	if (Array.isArray(props.list)) {
		list = props.list.map((value, key) => {
			let isActive = '';

			if (props.active.indexOf(value) >= 0) {
				isActive = 'active';
			}
			return (
				<li className={isActive} key={key} onClick={()=>{props.onClick(value)}} >{value}</li>
			);
		});
	}

	return (
		<div className="Filter">
			<div className="scrolable-content">
				<ul>
					{list}
				</ul>
			</div>
		</div>
	);
}


export default Filter;