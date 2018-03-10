import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class VideoListItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hover: false,
		};
	}

	toggleHover = () => {
		this.setState({
			hover: !this.state.hover,
		});
	};

	render() {
		const { video, onVideoSelected } = this.props;
		const videoSnippet = video.snippet;
		const imgURL = videoSnippet.thumbnails.default.url;
		const videoTitle = videoSnippet.title;
		let hoverStyle;

		if (this.state.hover) {
			hoverStyle = { backgroundColor: '#eee' };
		}

		return (
			<div
  			style={styles.c_video_list_item}
  			onClick={() => onVideoSelected(video)}
  			onKeyPress={() => onVideoSelected(video)}
  			role="button"
  			tabIndex="0"
			>
				<li
  				className="list-group-item"
  				style={hoverStyle}
  				onMouseEnter={this.toggleHover}
  				onMouseLeave={this.toggleHover}
				>
					<div className="video-list media">
						<div className="media-left">
							<img className="media-object" style={styles.o_video_item_thumbnail} src={imgURL} alt="Video thumbnail" />
						</div>
						<div className="media-body">
							<h2 className="media-heading">{videoTitle}</h2>
						</div>
					</div>
				</li>
			</div>
		);
	}
}

VideoListItem.propTypes = {
	video: PropTypes.objectOf(PropTypes.any).isRequired,
	onVideoSelected: PropTypes.func.isRequired,
};

export default VideoListItem;
