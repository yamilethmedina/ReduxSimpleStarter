// import React into all components that use JSX
import React, { Component } from 'react';
// ES6 syntax to import React.Component class

// Class-based component (using ES6 class - a JS object with properties and methods)
// define a new class called SearchBar and the give it access to all the functionality of React.Component class
class SearchBar extends Component {
	// every class-based component needs a render method defined
	render() {
		// must return some JSX to avoid errors
		return <input />;
	}
}

// any file in our application that imports SearchBar will get the SearchBar component
export default SearchBar;