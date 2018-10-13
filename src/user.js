import { api } from './eventdb';

window._user = {
  currentUser: {
    name: 'pecfest_id',
    pecfestId: 'pecfest_id',
  },

  loggedIn: false,
  haveDetails: false,

  preferences: {},
  preferencesCollected: false,

  getPreference(name) {
    if (window.localStorage) {
      if (!this.preferencesCollected) {
        if (window.localStorage.getItem('preferences'))
          this.preferences = JSON.parse(window.localStorage.getItem('preferences'))
      }
      return this.preferences[name];
    } else {
      return null
    }
  },

  savePreference(name, value) {
    this.preferences[name] = value;

    if (window.localStorage) {
      window.localStorage.setItem('preferences', JSON.stringify(this.preferences))
    }
  },

  isLoggedIn() {
    if (window.localStorage) {
      if (window.localStorage.getItem('pecfestId')) {
        const pecfestId = window.localStorage.getItem('pecfestId')
        if (pecfestId.length > 1) {
          this.currentUser.pecfestId = pecfestId
          this.loggedIn = true;
          return true
        }
      }
    }
    return false;
  },

  logout(userId, callback) {
    if (window.localStorage) {
      if (window.localStorage.getItem('pecfestId')) {
        window.localStorage.setItem('pecfestId', '')
        this.loggedIn = false;
        setTimeout(callback);
      }
    }
  },

  loginLocal(user) {
    console.log("login local");
    this.currentUser = user;
    this.loggedIn = true;
    if (typeof window.localStorage !== 'undefined') {
      window.localStorage.setItem('pecfestId', user.pecfestId);
    }
  },

  getUser(config) {
    // console.log("Getting user details");
    if (this.haveDetails) {
      // console.log("haveDetails");
      return setTimeout(() => config.onSuccess(this.currentUser));
    }
    if (this.loggedIn) {
      // console.log(user.loggedIn + " : logged In");
      this.login(this.currentUser.pecfestId, {onSuccess: () => {
        config.onSuccess(this.currentUser);
        this.haveDetails = true;
      }, onFailed: config.onFailed });

    } else {
      // console.log("err in getUser");
      setTimeout(() => config.onFailed({ message: 'Could not login the user.'}));
    }
  },

  getRegisteredEvents(config) {
    fetch(api.url + '/user/'+user.currentUser.pecfestId+'/registered_events')
      .then(data => data.json())
      .then(events => {
        /*console.log(user.currentUser.pecfestId + " is the pecfestId");
        console.log(user.pecfestId + " is the pecfestId");*/
        config.onSuccess(events);
      })
      .catch(err => {
        console.log("This should not happened. If you are dev, then please report this immediately");
        config.onFailed(err);
      });
  },

  getNotifications(config) {
    fetch(api.url + 'user/notifications?id=ADITCYP5ID')
      .then(data => data.json())
      .then(notifs => {
        config.onSuccess(notifs);
      })
      .catch(err => {
        console.log("This should not happened. If you are dev, then please report this immediately");
        config.onFailed(err);
      });
  },

  login(userId, config) {
    fetch(api.url + 'user/' + userId.toUpperCase())
      .then(data => data.json())
      .then(user => {
        if (user.ACK !== 'SUCCESS') {
          config.onFailed(user);
          return;
        }

        this.loginLocal(user);
        config.onSuccess(user.pecfestId);
      })
      .catch(err => {
        console.log("This should not happen");
        config.onFailed(err);
      })
  },

  signUp(data, config) {
    fetch(api.url + 'user/create', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(data => data.json())
      .then(res => {
        if (res.ACK !== 'SUCCESS') {
          config.onFailed(res);
          return;
        }

        config.onSuccess(res);
      })
      .catch(err => {
        console.log("This should not happen");
        config.onFailed(err);
      })
  },

  verifyOtp(otp, email, config) {
    fetch(api.url + 'user/verify', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ otp, email }),
    })
      .then(data => data.json())
      .then(res => {
        if (res.ACK !== 'SUCCESS') {
          config.onFailed(res);
          return;
        }

        this.loginLocal(res);
        config.onSuccess(res.pecfestId);
      })
      .catch(err => {
        console.log("This should not happen");
        config.onFailed(err);
      })
  },

  checkVerified(mobile, config) {
    fetch(api.url + 'user/is_verified/' + mobile)
      .then(data => data.json())
      .then(json => {
        if (json.ACK !== 'SUCCESS') {
          config.onFailed()
          return
        }

        config.onSuccess(json.verified)
      })
      .catch(config.onFailed)
  },

  sendIDToEmail(email, config) {
    fetch(api.url + 'user/forgot_pecfestid', {
      body: JSON.stringify({ email }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(data => data.json())
      .then(res => {
        if (res.ACK === 'SUCCESS') {
          config.onSuccess(res);
        } else {
          config.onFailed(res);
        }
      })
      .catch(config.onFailed);
  },

  changeDetails(email, accomo, config) {
    fetch(api.url + 'user/update_info', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, accomodation: accomo, pecfestId: this.currentUser.pecfestId })
    }).then(data => data.json())
      .then(res => {
        if (res.ACK != 'FAILED') {
          config.onSuccess();
        } else {
          config.onFailed(res);
        }
      })
      .catch(config.onFailed);
  },

  registerEvent(event, users, leader, config) {
    fetch(api.url + 'event/register', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ eventId: event.id, team: users, leader })
    })
      .then(data => data.json())
      .then(res => {
        if (res.ACK === 'SUCCESS') {
          config.onSuccess(res)
        } else {
          config.onFailed(res)
        }
      }).catch(res => {
        config.onFailed(res);
      })
  },

  isRegistered(eventId) {
    return false;
  },
}

let user = window._user;

export default user;
