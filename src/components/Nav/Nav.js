import React from 'react';
import { Link } from "react-router-dom";
import './Nav.scss';



const Nav = () => {
	return (
		<div className="Nav">
		<Link to={'/'}>Back to sets</Link>
	</div>
	)
}

export default Nav;