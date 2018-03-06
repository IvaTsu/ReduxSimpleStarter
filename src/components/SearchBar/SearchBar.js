import React, { Component } from 'react';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchRequest: '',
		};
	}

	render() {
		return (
			<div>
				<input
  				type="text"
  				placeholder="Search ..."
  				onChange={event => this.setState({ searchRequest: event.target.value })}
				/>
				Input value: {this.state.searchRequest}
			</div>
		);
	}
}

export default SearchBar;
