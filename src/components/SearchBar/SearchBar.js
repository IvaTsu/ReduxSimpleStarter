import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchRequest: '',
		};
	}

	_handleSearchBarInputChange = (event) => {
		const x = event.target.value;
		console.log(x);
		this.setState({ searchRequest: x });
		console.log(this.state.searchRequest);
	}

	render() {
		return (
			<input
  type="text"
  placeholder="Search ..."
  onChange={event => this._handleSearchBarInputChange(event)}
			/>
		);
	}
}

export default SearchBar;
