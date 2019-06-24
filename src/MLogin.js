import React, { Component } from 'react';
import MButton from './MButton.js';

class MLogin extends Component {
    state = {  }
    render() { 
        return ( 
            <div>

                <div className="field">
                    <label className="label">Username</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="text" placeholder="Masukkan nama pengguna anda"/>
                    </div>

                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input" type="password" placeholder="Masukkan kata laluan anda"/>
                    </div>
                </div>

                <div className="field is-grouped">
                <div className="control">
                    <MButton buttonClass="button is-link" buttonText="Log Masuk"></MButton>
                </div>
                </div>
            </div>
         );
    }
}
 
export default MLogin;