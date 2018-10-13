import React, {Component} from 'react';
import blank_img from './blank.png'
import pecfest_logo from './pecfest.png'
import './index.css';
import './notification.css';
import EventRegistrations from './registeredEvents'
import Notifications from "./notification";
import user from '../user';
import { api } from '../eventdb';
import { Link } from 'react-router-dom';
//RITHGD4AC

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.displayRegisteredEvents = this.displayRegisteredEvents.bind(this);
    this.displayNotifications = this.displayNotifications.bind(this);
    this.state = {
      registeredEvents: true, 
      haveNotifs: false,
      data: null,
      loading: true
    };
    //this.getData();
  }

  componentDidMount() {
    user.getRegisteredEvents({
      onSuccess: events => {
        this.setState({events: events, registeredEvents: true});
      },
      onFailed: err => {
        // console.log("Could not retrieve registered Events");
        this.setState({error: true});
      }
    }),

      user.getNotifications({
        onSuccess: notifs => {
          // console.log("Notifications");
          this.setState({notifs: notifs, haveNotifs: true});
        },
        onFailed: err => {
          // console.log("Could not retrieve Notifications");
          this.setState({error: true});
        }
      }),

      user.getUser({
        onSuccess: (user) => {
          this.setState({user, loading: false});
        },
        onFailed: (err) => {
          console.log("Could not retrieve user");
          if (err) {
            this.setState({message: err.message || 'Failed to login', showMessage: true})
          } else {
            this.setState({message: 'Failed to login', showMessage: true});
          }
        }
      });
  }

  getData() {
    let data = fetch(api.url + 'v1/user/pecfestId/registered_events').then((resp) => {
      resp.json().then((res) => {
        //this.setState({data:})
      });
    })
  }

  displayRegisteredEvents() {
    this.setState({registeredEvents: true});
  }

  displayNotifications() {
    this.setState({registeredEvents: false});
  }

  render() {
    if (this.state.showMessage) {
      return (
          <div className="request-login">
            <p>Please login to view your dashboard.</p>
            <p><Link to="/register?continue=/dashboard">Login</Link></p>
          </div>
      )
    }

    const user = !this.state.loading ? this.state.user : {"pecfestId": "NULL", "name" : "NULL"};
    const events = !this.state.loading && !this.state.error ? this.state.events : [];
    const notifs = this.state.haveNotifs ? this.state.notifs : [];
    // console.log(user.members);
    
    const registeredEvents = this.state.registeredEvents;
    let result;
    if (registeredEvents) {
      result = <div id="reg" className="registration_table">
      <h1 className="bigScreensOnly">Registered Events</h1>
          { events.length?
            events.map((event, i) => (
              <EventRegistrations
                key={i}
                _key={i}
                event={event.name}
                date={event.date}
                venue={event.venue}
                time={event.time}
                timeofreg="8:40am"
              />
            ))
            :
            <p style={{color:"tomato"}}>You have no registered events</p>
          }

        {/*Abhi testing ke liye ye h 
        <EventRegistrations _key={0}/>
        <EventRegistrations _key={1}/>
        <EventRegistrations _key={2}/>
        <EventRegistrations _key={3}/>
        <EventRegistrations _key={4}/>
        <EventRegistrations _key={5}/>
        <EventRegistrations _key={6}/>
        <EventRegistrations _key={7}/>
        <EventRegistrations _key={8}/>
        <EventRegistrations _key={9}/>
        <EventRegistrations _key={10}/>*/}
    </div>
    }
    else {
      result = <div id="notif">
        <h1 className="bigScreensOnly">Notifications</h1>
        <div className="table-wrapper">
          <table className="fl-table">
          <thead>
          <tr>
            <th>Event</th>
            <th>Title</th>
            <th>Details</th>
          </tr>
          </thead>
          <tbody>
            {/* for apis 
              notifs.map((notif, i) => (
                <Notifications
                  key={i}
                  event={notif.eventName}
                  notificationTitle={notif.notificationTitle}
                  notificationDetails={notif.notificationDetails}
                />
              ))
            */}

          {/*For testing*/}
          <Notifications key ={0} />
          <Notifications key ={1} />
          <Notifications key ={2} />
          <Notifications key ={3} />
          <Notifications key ={4} />
          <Notifications key ={5} />
          <Notifications key ={6} />
          <Notifications key ={7} />
          <Notifications key ={8} />
          <Notifications key ={9} />
          <Notifications key ={10} />
          <Notifications key ={11} />
          <Notifications key ={12} />
          <Notifications key ={13} />
          <Notifications key ={14} />
          <Notifications key ={15} />
            </tbody>
          </table>
        </div>
      </div>
    }

    var buttons_class_reg = (registeredEvents?"button_internal_reg button_internal":"button_internal");

    var buttons_class_notifs = (registeredEvents?"button_internal" : "button_internal button_internal_notif")

    /*var mobileButton = <ul className="buttons_for_mobile">
            <li className={buttons_class_reg} onClick={this.displayRegisteredEvents}
            ontouchstart={this.displayRegisteredEvents}>
              <a href="#">Registered Events</a>
            </li>
            <li className={buttons_class_notifs} onClick={this.displayNotifications}
            ontouchstart={this.displayNotifications}>
              <a href="#">Notifications</a>
            </li>
          </ul>*/

    return (
      <div id="main-div" className="flex-container">
        {/*mobileButton*/}

        <div className="flex_right">
          <div className="user_information">
            {/*<h1>PECFEST 2018</h1>*/}
            <img src={pecfest_logo} alt="User Avatar"/>

            <h2 style={{fontSize:"1.4em"}}>{user.name}</h2>
          </div>

          <div className="user_information">
            <hr style={{borderTop: '3px solid'}}/>
            <p style={{fontSize:"1.4em"}}>Participant, Pecfest 2018</p>
          </div>
          <br/><br/>
          

          {/*<ul className="buttons_list">
            <li className={buttons_class_reg} onClick={this.displayRegisteredEvents}
            ontouchstart={this.displayRegisteredEvents}>
              <a href="#">Registered Events</a>
            </li>
            <li className={buttons_class_notifs} onClick={this.displayNotifications}
            ontouchstart={this.displayNotifications}>
              <a href="#">Notifications</a>
            </li>
          </ul>*/}

            {/*<div className="grid-container-card">
                              <div className="grid-item">
                                  <div className="card">
                                      <div className="container">
                                          <h4><b>12</b></h4>
                                          Events Participated
                                      </div>
                                  </div>
                              </div>

                              <div className="grid-item">
                                  <div className="card">
                                      <div className="container">
                                          <h4><b>10</b></h4>
                                          Events Won
                                      </div>
                                  </div>
                              </div>
              </div>*/}
          
        </div>


        <div className="flex_left">        
          <div className="result">{result}</div>
        </div>
    </div>


    );
  }
}

export default Dashboard;