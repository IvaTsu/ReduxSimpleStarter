// Modules & Dependencies IMPORTs
import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

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

		YTSearch({ key: YOUTUBE_API_KEY, term: 'surfboards' }, (videos) => {
			this.setState({
				videos, // equivivalent to the { videos: videos }
				selectedVideo: videos[0],
			});
			console.log(this.state.videos);
		});
	}

	render() {
		return (
			<div>
				<h1>React simple starter</h1>
				<SearchBar />
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
