// Please retrieve React from the installed dependency and give me access. Get the react library and import it under the name React
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// YouTube API key
const API_KEY = "AIzaSyBJzVD6kyHxHyP8eOtrZbwbXpBElT_6Rus"


// Create a new component, which should produce some HTML

// const is an ES6/ES2016 concept. when you declare a variable with const, it will be a final constant that will never be reassigned/changed
// this creates a type of component. it's a class, not an instance. it's a factory that produces instances that get added to the DOM

// ES6 function declaration syntax with fat arrow
const App = () => {
	// the HTML-looking stuff is JSX
	// parentheses for multi-line JSX is optional
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// App: is a class
// <App />: is an instance
// Instanstiate (create an instance) of a component before you pass it to the DOM
// <App></App>
// self-closing tag:
// <App />


// Take this component's generated HTML and put it on the page (make sure that the component is added to the DOM)
// you need to pass an instance of the component, not a class
// Specify where you want to render it (2nd argument is reference to an existing DOM node)
ReactDOM.render(<App />, document.querySelector('.container'));