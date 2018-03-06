// Modules & Dependencies IMPORTs
import React from 'react';
import YTSearch from 'youtube-api-search';

// Components IMPORTs
import SearchBar from './SearchBar/SearchBar';
import { YOUTUBE_API_KEY } from './../../config/config';

YTSearch({ key: YOUTUBE_API_KEY, term: 'surfboards' }, (data) => {
	console.log(data);
});

export default () => (
  <div>
  	<h1>React simple starter</h1>
  	<SearchBar />
  </div>
);
