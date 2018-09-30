import React, {Component} from 'react';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';
import LoginFormDesktop from './LoginFormDesktop';
import SignUpFormDesktop from './SignUpFormDesktop';
import {withRouter} from 'react-router-dom';
import user from './user';
import './SignUpOrLoginForm.css';
import NavigationPanel from "./components/NavigationPanel";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Modal from "./components/Modal";

class SignUpOrLoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            module: 'SignUp',
            mounted: false,
            btnClass: 'btn',
            hover: false,
            form: 'signup'
        };
    }

    handleClick = (formType) => {
        this.setState({form: formType});
    };

    componentDidMount() {
        this.overflow = document.body.style.overflow;
        document.body.style.overflow = 'auto'
        this.setState({mounted: true});
    }

    componentWillUnmount() {
        document.body.style.overflow = this.overflow;
        this.setState({mounted: false});
    }

    handleCancel = () => {

        let continueUrl = '/';
        let search = this.props.location.search.slice('?continue='.length);
        if (search.length > 0) {
            continueUrl = search;
        }
        this.props.history.push(continueUrl);
    };

    handleLogin = (pecfestId) => {
        this.setState({loggedIn: true, pecfestId: pecfestId})
        setTimeout(this.handleCancel, 1000);
    };

    handleSignup = (pecfestId) => {
        this.setState({loggedIn: true, pecfestId: pecfestId})
        user.login(pecfestId, {
            onSuccess: this.handleCancel,
            onFailed: this.handleCancel,
        })
    };

    handleModuleSignUp = (e) => {
        this.setState({module: 'SignUp'});
        e.preventDefault();
    };

    handleModuleLogin = (e) => {
        this.setState({module: 'Login'});
        e.preventDefault();
    };

    handleSubmit = (e) => {
        this.setState({mounted: false});
        e.preventDefault();
    };
    render() {
        const {mounted} = this.state;
        let child;
        if (mounted) {
            child = (
                <div className="App_test">
                    <NavigationPanel></NavigationPanel>
                    <Modal onSubmit={this.handleSubmit}/>
                </div>
            );
        }
        if(window.checkIfMobile()) {
            return (
                <div className="SignUpOrLoginForm">
                    <div className="SignUpOrLoginForm-options">
                        <button className={"SignUpButton" + (this.state.form === 'signup' ? ' highlight' : '')}
                                onClick={this.handleClick.bind(this, 'signup')}>Sign Up
                        </button>
                        <span className="light">&nbsp;or&nbsp;</span>
                        <button className={"SignUpButton" + (this.state.form === 'login' ? ' highlight' : '')}
                                onClick={this.handleClick.bind(this, 'login')}>Login
                        </button>
                        <span className="light">&nbsp;or&nbsp;</span>
                        <button className={"SignUpButton"}
                                onClick={window.location.pathname.startsWith('/register') ? this.handleCancel : this.props.onCancel}>Cancel
                        </button>
                    </div>
                    <div className="Divider"/>
                    {
                        this.state.loggedIn ?
                            <h1 style={{color: 'white'}}>You are logged in as <strong>{this.state.pecfestId}</strong>
                            </h1> :
                            <div className="SignUpOrLoginForm-form">
                                {
                                    this.state.form == 'signup' ?
                                        <SignUpForm onSignUp={this.handleSignup}
                                                    onContinueToLogin={this.handleClick.bind(this, 'login')}/> :
                                        <LoginForm onLogin={this.handleLogin}/>
                                }
                            </div>
                    }
                </div>
            );
        }
        else {
            return (
                <div className="App">
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {child}
                    </ReactCSSTransitionGroup>
                </div>
            );
        }
    }
}


export default withRouter(SignUpOrLoginForm)
