// Modules & Dependencies IMPORTs
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// - RELATIVE INPUTs
import styles from './styles';

class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchRequest: '',
		};
	}

	_onInputChange = (searchRequest) => {
		this.setState({
			searchRequest,
		});
		this.props.onSearchTermChange(searchRequest);
	};

	render() {
		return (
			<div style={styles.c_search_bar}>
				<input
  				style={styles.o_search_bar}
  				type="text"
  				placeholder="Search ..."
  				value={this.state.searchRequest}
  				onChange={event => this._onInputChange(event.target.value)}
				/>
			</div>
		);
	}
}

SearchBar.propTypes = {
	onSearchTermChange: PropTypes.func.isRequired,
};

export default SearchBar;
