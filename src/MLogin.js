import React, { Component } from 'react';
import MButton from './MButton.js';

class MLogin extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

                <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left has-icons-right">
                    <input class="input is-danger" type="email" placeholder="Email input" value="hello@"/>
                    <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                    </span>
                </div>
                <p class="help is-danger">This email is invalid</p>
                </div>

                <div class="field is-grouped">
                <div class="control">
                    <MButton buttonClass="button is-link" buttonText="Login"></MButton>
                </div>
                </div>
            </div>
         );
    }
}
 
export default MLogin;