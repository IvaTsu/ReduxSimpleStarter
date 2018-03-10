import React from 'react';
import PropTypes from 'prop-types';

import VideoListItem from './../VideoListItem/VideoListItem';

const VideoList = ({ videos, onVideoSelected }) => {
	const videoItems = videos.map(video =>
			(<VideoListItem
  			onVideoSelected={onVideoSelected}
  			key={video.etag}
  			video={video}
			/>));

	return (
		<ul className="col-md-4 list-group">{videoItems}</ul>
	);
};

VideoList.propTypes = {
	videos: PropTypes.arrayOf(PropTypes.object).isRequired,
	onVideoSelected: PropTypes.func.isRequired,
};

export default VideoList;

