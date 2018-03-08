// Modules & Dependencies IMPORTs
import React from 'react';
import PropTypes from 'prop-types';

// RELATIVE IMPORTs
import VideoListItem from './../VideoListItem/VideoListItem';

const VideoList = ({ videos }) => {
	const videoItems = videos.map(video =>
			<VideoListItem key={video.etag} video={video} />);

	return (
		<ul className="col-md-4 list-group">{videoItems}</ul>
	);
};

VideoList.propTypes = {
	videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideoList;

