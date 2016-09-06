// import React into all components that use JSX
import React, { Component } from 'react';
// ES6 syntax to import React.Component class

// Class-based component (using ES6 class - a JS object with properties and methods)
// define a new class called SearchBar and the give it access to all the functionality of React.Component class

class SearchBar extends Component {
	// how to initialize state in class-based components
	constructor(props) {
		super(props);

		// 'term' is the property that will be updated, which we want to record (the current value of the input)
		// only in the constructor function do you manipulate state like this
		this.state = { term: 'Starting Value' };
	}
	// every class-based component needs a render method defined
	render() {
		// must return some JSX to avoid errors
		// onChange lets you get access to the standard Change event
		// return <input onChange={this.onInputChange} />;
		// ES6 arrow function syntax alternative to event handler below
		// parentheseses around (event) aren't necessary if you have a single argument

		// how to manipulate state: use this.setState
		// if not modifying value of term, just referencing it; this makes it okay to use this.state.term
		// whenever we change the value/update a component, the event handler runs, we set the state with the new value of the input. it re-renders and pushes the new data into the DOM every time it's updated
		// when you tell the input that the value is determined by this.state.term, you turn input into a controlled element. its value only changes when state changes
		// when it re-renders due to this.setState(), the value is set to the new value of this.state.term
		// when the onChange handler runs, the value of the input hasn't actually changed yet (until it re-renders)
		// when a user types something, they didn't change the input value; they only triggered the event. the value of the input changes only because this.State changed the state
		return (
			<div>
				<input
				value={this.state.term} 
				onChange={(event) => this.setState({ term: event.target.value })} />
			</div>
		);
	}
	// the event handler
	// onInputChange(event) {
	// 	// console.log the text entered in the input
	// 	console.log(event.target.value);
	// }
}

// any file in our application that imports SearchBar will get the SearchBar component
export default SearchBar;