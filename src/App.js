import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';

class App extends Component {
	state = {
		users: [
			{
				id: 1,
				name: "Mustafa Murat Coşkun",
				salary: "5000",
				department: "Bilişim"
			},
			{
				id: 2,
				name: "Çağatay Sert",
				salary: "4000",
				department: "Bilişim"
			},
			{
				id: 3,
				name: "Tarık Sert",
				salary: "6000",
				department: "Pazarlama"
			}
		]
	}

	deleteUser = (id) => {
		this.setState({
			users: this.state.users.filter(user => user.id !== id)
		})
	}
	render() {
		return (
			<div className="container">
				<Navbar title="User App" />
				<hr />
				<Users deleteUser={this.deleteUser} users={this.state.users} />
			</div>
		);
	}
}

export default App;
