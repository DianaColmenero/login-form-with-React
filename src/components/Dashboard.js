import React, { Component } from 'react';
import Navbar from './Navbar.js'
import './css/Dashboard.css';
import Button from './button/Button';
// import Input from './Input'

class Dashboard extends Component {
	render() {
		return (
			<div>
				<Navbar />
				<h2>Dashboard</h2>
				<Button />
				{/* <Input /> */}

			</div>
		);
	}
}

export default Dashboard;