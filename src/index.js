// Please retrieve React from the installed dependency and give me access. Get the react library and import it under the name React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// YouTube API key
const API_KEY = "AIzaSyBJzVD6kyHxHyP8eOtrZbwbXpBElT_6Rus"


// Create a new component, which should produce some HTML

// const is an ES6/ES2016 concept. when you declare a variable with const, it will be a final constant that will never be reassigned/changed
// this creates a type of component. it's a class, not an instance. it's a factory that produces instances that get added to the DOM

// Downwards data flow: the highest parent component should fetch and recieve API data 


// refactored to class-based syntax
class App extends Component {
	constructor(props) {
		// constructor function runs when app first runs
		super(props);

		this.state = { 
			videos: [],
			selectedVideo: null
			};

		// selectedVideo, will get passed to VideoDetail. 

		// search for a video immediately when app boots
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
				// update results with videos from new search term by changing state
				this.setState({ videos: videos,
					selectedVideo: videos[0]
				 });
				// when key and value are the same string/variable name, can condense to { string } in ES6
			});

	}
	render() {
		// it renders, even if the constructor isn't done retrieving data. in that case, you might get an error

	return (
		<div>
			<SearchBar />
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList 
				onVideoSelect{selectedVideo => this.setState({selectedVideo}) } 
				videos={this.state.videos} />
			</div>
		);
	}
}

// onVideoSelect function updates App state with new video called from VideoList

// pass data from parent component App to child component VideoList
// passing the prop called videos to VideoList

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