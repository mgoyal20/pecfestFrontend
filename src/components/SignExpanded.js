import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../SignUpOrLoginForm.css';
import {Motion, spring} from 'react-motion';
import '../user.js';
import LoginFormDesktop from '../LoginFormDesktop.js';
import SignUpFormDesktop from '../SignUpFormDesktop';
import 'md5';
import '../SignUpForm.css';

class SignExpanded extends Component {

    InputSignIn() {
        var SignInInput;
        if (this.props.type === 'signIn') {
            SignInInput = <div>
                <LoginFormDesktop/>
            </div>
        }
        else {
            SignInInput = <div>
                <SignUpFormDesktop/>
            </div>
        }
        return SignInInput;
    }


    constructor(props) {
        super(props);
        this.state = {
            flexState: false,
            animIsFinished: false,

        };
    }

    componentDidMount() {
        this.setState({flexState: !this.state.flexState});
    }


    isFinished = () => {
        this.setState({animIsFinished: true});
    };


    render() {

        return (
            <Motion style={{
                flexVal: spring(this.state.flexState ? 8 : 1)
            }} onRest={this.isFinished}>
                {({flexVal}) =>
                    <div className={this.props.type === 'signIn' ? 'signInExpanded' : 'signUpExpanded'} style={{
                        flexGrow: `${flexVal}`
                    }}>
                        <Motion style={{
                            opacity: spring(this.state.flexState ? 1 : 0, {stiffness: 300, damping: 17}),
                            y: spring(this.state.flexState ? 0 : 50, {stiffness: 100, damping: 17})
                        }}>
                            {({opacity, y}) =>
                                <div className='logForm' style={{
                                    WebkitTransform: `translate3d(0, ${y}px, 0)`,
                                    transform: `translate3d(0, ${y}px, 0)`,
                                    opacity: `${opacity}`
                                }} name="formData">
                                    {this.InputSignIn()}

                                </div>
                            }
                        </Motion>
                    </div>
                }
            </Motion>
        );
    }

}


SignExpanded.PropTypes = {
    type: PropTypes.string
};

export default SignExpanded;
