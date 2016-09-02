// import React into all components that use JSX
import React from 'react';

const SearchBar = () => {
	return <input />; // React.createElement
};

// any file in our application that imports SearchBar will get the SearchBar component
export default SearchBar;