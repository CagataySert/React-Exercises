import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import AddUser from './components/AddUser';
// import Test from './components/Test'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
const Home = () => {
	return <h3>Home Page</h3>
}

const About = () => {
	return <h3>About Page</h3>
}


class App extends Component {

	render() {
		return (
			<Router>
				<div className="coıntainer">
					{/* <Test test="deneme" /> */}
					<Navbar title="User App" />
					<hr />
					<Switch>
						<Route exact path='/' component={Users} />
						<Route exact path='/add' component={AddUser} />
						<Route component={NotFound} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
