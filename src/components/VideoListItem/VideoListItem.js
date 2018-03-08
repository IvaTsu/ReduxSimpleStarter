import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video }) => {
	const videoSnippet = video.snippet;
	const imgURL = videoSnippet.thumbnails.default.url;
	const videoTitle = videoSnippet.title;

	return (
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imgURL} alt="Video thumbnail" />
				</div>
				<div className="media-body">
					<h2 className="media-heading">{videoTitle}</h2>
				</div>
			</div>
		</li>
	);
};

VideoListItem.propTypes = {
	video: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default VideoListItem;
