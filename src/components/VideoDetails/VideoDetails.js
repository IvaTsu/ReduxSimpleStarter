import React from 'react';
import PropTypes from 'prop-types';

const VideoDetails = ({ video }) => {
	if (!video) {
		return <div>Loading ...</div>;
	}

	const videoSnippet = video.snippet;
	const videoTitle = videoSnippet.title;
	const videoDescription = videoSnippet.description;
	const videoID = video.id.videoId;
	const videoURL = `https://www.youtube.com/embed/${videoID}`;

	return (
		<div className="video-details col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={videoURL} title={videoTitle} />
			</div>
			<div className="details">
				<div>{videoTitle}</div>
				<div>{videoDescription}</div>
			</div>
		</div>
	);
};

VideoDetails.propTypes = {
	video: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default VideoDetails;
