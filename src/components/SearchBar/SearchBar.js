import React, { Component } from 'react';

// - RELATIVE INPUTs
import styles from './styles';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchRequest: '',
		};
	}

	render() {
		return (
			<div style={styles.c_search_bar}>
				<input
  				style={styles.o_search_bar}
  				type="text"
  				placeholder="Search ..."
  				value={this.state.searchRequest}
  				onChange={event => this.setState({ searchRequest: event.target.value })}
				/>
			</div>
		);
	}
}

export default SearchBar;
