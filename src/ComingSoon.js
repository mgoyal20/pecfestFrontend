import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ComingSoon extends Component {
	handleClick = () => {
		this.props.history.goBack();
	}

	render() {
		return (
			<div className="ComingSoon" style={{ padding: '2em', textAlign: 'center', verticalAlign: 'middle', color: 'white', fontSize: '2rem' }}>
				<p style={{backgroundColor: '#000032'}}>Coming Soon.</p>
				<a onClick={this.handleClick} href="#" style={{backgroundColor: '#000032'}}>Return to previous page</a>
			</div>
		)
	}
}

export default withRouter(ComingSoon);
