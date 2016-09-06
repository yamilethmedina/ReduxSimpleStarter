// doesn't need state (doesn't rerender itself or require user input)

import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	// const videos = props.videos;
	// passing the prop from App into VideoListItem
	const videoItems = props.videos.map((video) => {
		return <VideoListItem
		onVideoClick={props.onVideoSelect} 
		key={video.etag}
		video={video} />
	});
	return (
		// in React, use className instead of class in JSX html
		<ul className="col-md-12 list-group">
			{videoItems}
		</ul>

	);
}

export default VideoList

// built-in iterators like map are better than JavaScript for loops