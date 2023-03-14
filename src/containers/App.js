import React, { Component } from 'react';
import Cardlist from '../components/Cardlist';
// import { robots } from './robots';
import Searchbox from '../components/Searchbox';
import './App.css'
import Scroll from '../components/scroll';
import ErrorBoundry from '../components/ErrorBoundary';


class App extends Component {
	constructor()  {
		super()
		this.state = {
			robots: [],
			searchfield: ''
		} 
	}


	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=> {
			// Receive url, then give this response
			// Then the responce is converted to json
		return	response.json();
		})
		.then(users => {this.setState({ robots: users})
			// this.setState robots is equal to users

			// WE ARE simply updating state after we fetch whatever
			// The users are. We get the responce, we do some
			// json magic. Get users and update the users with 
			// Set state
		})
	}

	onSearchChange = (event) => {
		// In this made up function
		// Everytime the input changes, we get an event
		this.setState({ searchfield: event.target.value })
		// This.set state is important when wanting to change state
		// You need it to change, searchfield above is an empty string
	}
	render() {
		const{ robots, searchfield } = this.state;
		// This lets us just say robots or searchfield instead of 
		// this.state
		const filteredRobots = /*this.state.*/robots.filter(robot => {
			return robot.name.toLowerCase().includes(/*this.state.*/searchfield.toLowerCase());
				// To lowercase helps because it automatically makes it lowercase
			// No comparing
			// So if robot name in lowercase includes whats in the searchfield lowercase
			// Only return the robots that are true to it
		})
		if (/*this.state.*/robots.length === 0) {
	return <h1>loading</h1>}
	else {
	return (
		<div className='tc'>
				<h1 className='f1'>Robofriends</h1>
				<Searchbox searchChange={this.onSearchChange} />
				<br />
				<Scroll>
					<ErrorBoundry>
						<Cardlist robots={filteredRobots}/>
					</ErrorBoundry>
				</Scroll>
		</div>
		);
		}
	}
}

export default App;

// TLDR:
// App component with two states, robots and searchfield
// Because app (class app extends component) owns those states
// any component that has state, uses the class syntax so it can use the
// constructor function to create this.state. and this.state is
// what changes
// The virtual dom collects the state info, and react uses this.state to
// render and pass down as props to the components.
// The apps will look the same always because they are functions
// App is the only thing that can change state but can pass stuff
// like props. We passed down onsearchchange to searchbox, and when something
// changes in that it runs the function onsearchchange, and that sets the state
// for the string in searchfield.
// Now it will go with filteredrobots which will return what is included in the
// searchfield. And the cardlist only passes the filteredrobots
