import React from 'react';

const VideoDetail = ({video}) => {
	// check to see if video has been provided in the props before trying to render

	if (!video) {
		return <div>Loading...</div>;
	}
	
	const videoId = video.id.videoId;
	// const url = 'https://www.youtube.com/embed/' + videoId;
	// String interpolation:
	const url = `https://www.youtube.com/embed/${videoId}`;

	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>
			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
		);
};

export default VideoDetail;