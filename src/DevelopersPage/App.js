import React, { Component } from 'react';
import anime from 'animejs';
import members from './members';

import './App.css';

class ProfileCard extends Component {
  render() {
    const style = {
      backgroundImage: 'url("' + this.props.member.photo + '")',
      borderRadius: '5px',
      height: '350px',
    }

    if (this.props.member.color) {
      style.boxShadow = `0 10px 30px ${this.props.member.color}`;
    } else {
      style.boxShadow = `0 10px 30px rgba(0, 0, 0, 0.2)`
    }

    return (
      <div className="ProfileCard">
        <div className="ProfileCard-photo" style={style} />
        <div className="ProfileCard-details">
          <div className="Name">
            {this.props.member.name}
          </div>
          <div className="Desc">
            <small>{this.props.member.work}</small>
          </div>
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="DevApp">
      {
        members.map(member => <ProfileCard member={member} key={member.id} />)
      }
      </div>
    );
  }
}

export default App;
