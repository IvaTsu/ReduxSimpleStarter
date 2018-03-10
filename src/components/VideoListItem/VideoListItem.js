import React from 'react';
import PropTypes from 'prop-types';

const VideoListItem = ({ video, onVideoSelected }) => {
	const videoSnippet = video.snippet;
	const imgURL = videoSnippet.thumbnails.default.url;
	const videoTitle = videoSnippet.title;

	return (
		<li className="list-group-item" onClick={() => onVideoSelected(video)}>
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
	onVideoSelected: PropTypes.func.isRequired,
};

export default VideoListItem;
