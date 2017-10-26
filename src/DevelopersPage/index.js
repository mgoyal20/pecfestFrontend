import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import ReactDOM from 'react-dom';
import anime from 'animejs';

import './index.css';
import App from './App';

export default class Team extends Component {
	componentWillUnmount() {
        document.body.style.overflow = this.restore;
	}

	componentDidMount() {
		const timeline = anime.timeline();
		timeline.add({
			targets: '.Header, .Divider, .Divider small, .ProfileCard, .ProfileCard-photo, .ProfileCard-details',
			translateY: [100, 0],
			opacity: [ 0, 1],
			duration: 1000,
			easing: 'easeOutExpo',
			delay: (el, i, l) => i * 200
		});
	    this.restore = document.body.style.overflow;
        document.body.style.overflow = 'auto';

	}

	render() {
		return (
			<div className="Team">
		    	<div className="Header">
		        	<h1>Team behind <Link to="/">PECFEST</Link> website</h1>
		        	<div className="DevDivider" />
		    	</div>
		    	<App />
	        </div>
		)
	}
}
