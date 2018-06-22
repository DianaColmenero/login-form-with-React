import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className="Navbar">
				<li><Link to="/login">Login</Link>
				</li>
			</div>
		);
	}
}

export default Navbar;