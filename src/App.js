import React, { Component } from 'react';
import Navbar from './components/Navbar';
import User from './components/User';
class App extends Component {
	render() {
		return (
			<div className="container">
				<Navbar title="User App" />
				<hr />
				<User name="Çağatay Sert" salary="5000" department="Bilişim" />
				<User name="Tarık Sert" salary="6000" department="Bilişim" />
			</div>
		);
	}
}

export default App;
