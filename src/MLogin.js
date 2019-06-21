import React, { Component } from 'react';
import MButton from './MButton.js';

class MLogin extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

                <div className="field">
                <label className="label">Password</label>
                <div className="control has-icons-left has-icons-right">
                    <input className="input is-danger" type="email" placeholder="Email input" value="hello@"/>
                    <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                    </span>
                    <span className="icon is-small is-right">
                    <i className="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p className="help is-danger">This email is invalid</p>
                </div>

                <div className="field is-grouped">
                <div className="control">
                    <MButton buttonClass="button is-link" buttonText="Login"></MButton>
                </div>
                </div>
            </div>
         );
    }
}
 
export default MLogin;