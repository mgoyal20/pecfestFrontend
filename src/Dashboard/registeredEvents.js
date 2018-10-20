import React, { Component } from 'react'
import './registeredEvents.css'

class registeredEvents extends Component {
    render(){
    	var timeline_content;
    	var linkToEvent = "/events/"+this.props.eventId;
    	var eventTypes = ['','Technical', 'Cultural', 'Lectures', 'Workshops', 'Shows']
    	var length = this.props.members.length;
    	var membersArray = this.props.members;
    	for (var i = membersArray.length - 1; i >= 0; i--) {
    		membersArray[i] = membersArray[i].name;
    	}
    	// console.log("key is " + this.props._key);
    	if(this.props._key%2==0)
    	{
    		timeline_content =
    			<div className="timeline-content">
					<h2>{this.props.name}</h2>
					<p> {eventTypes[this.props.eventType]} | {this.props.category} </p>
					<p> Leader : {this.props.leader} </p>
					<p> Members : {membersArray}
					</p>
					<a href={linkToEvent} className="">Link to event</a>
				</div>
    	}
    	else
    	{
    		timeline_content = 
    			<div className="timeline-content right">
					<h2>{this.props.name}</h2>
					<p>	{eventTypes[this.props.eventType]} | {this.props.category} </p>
					<p> Leader : {this.props.leader} </p>
					<p> Members : {membersArray}
					</p>
					<a href={linkToEvent} className="">Link to event</a>
				</div>
    	}

        return(
		<div id="timeline">
			<div className="timeline-item">
				<div className="timeline-icon"></div>
				<div>
					{timeline_content}
				</div>
			</div>
		</div>
        )
    }
}
export default registeredEvents;