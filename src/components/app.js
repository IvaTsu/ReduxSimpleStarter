// Modules & Dependencies IMPORTs
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

// Components IMPORTs
import SearchBar from './SearchBar/SearchBar';
import VideoList from './VideoList/VideoList';
import VideoDetails from './VideoDetails/VideoDetails';
import { YOUTUBE_API_KEY } from './../../config/config';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			videos: [],
			selectedVideo: null,
		};
	}

	videoSearch = (searchTerm) => {
		YTSearch({ key: YOUTUBE_API_KEY, term: searchTerm }, (videos) => {
			this.setState({
				videos, // equivivalent to the { videos: videos }
				selectedVideo: videos[0],
			});
		});
	}

	render() {
		const videoSearch = _.debounce((searchTerm) => { this.videoSearch(searchTerm); }, 500);

		return (
			<div>
				<SearchBar onSearchTermChange={videoSearch} />
				<VideoDetails video={this.state.selectedVideo} />
				<VideoList
  				onVideoSelected={selectedVideo => this.setState({ selectedVideo })}
  				videos={this.state.videos}
				/>
			</div>
		);
	}
}

export default App;
