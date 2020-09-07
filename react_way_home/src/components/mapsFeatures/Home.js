import React, { Component } from 'react';
import Map from './Map';

class Home extends Component {

	render() {
		return(
			<div style={{ margin: '10px' }}>
				<Map
					google={this.props.google}
					center={{lat: 49.282730, lng: -123.120735}}
					height='300px'
					zoom={14}
				/>
			</div>
		);
	}
}

export default Home;