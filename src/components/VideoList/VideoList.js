// Modules & Dependencies IMPORTs
import React from 'react';
import PropTypes from 'prop-types';

const VideoList = props => (
	<ul className="col-md-4 list-group">
		<li>{props.videos.length}</li>
	</ul>
);

VideoList.propTypes = {
	videos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default VideoList;

