import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MButton from '../components/MButton.js';

class MLogin extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <section class="section">      
       <div class="columns">
       <div class="column is-4 is-offset-4">
		  <div class="field">
		  <p class="control has-icons-left has-icons-right">
		    <input class="input" type="email" placeholder="Email"/>
		    <span class="icon is-small is-left">
		      <i class="fa fa-envelope"></i>
		    </span>
		    <span class="icon is-small is-right">
		      <i class="fa fa-check"></i>
		    </span>
		  </p>
		</div>
		<div class="field">
		  <p class="control has-icons-left">
		    <input class="input" type="password" placeholder="Password"/>
		    <span class="icon is-small is-left">
		      <i class="fa fa-lock"></i>
		    </span>
		  </p>
		</div>
		<div class="field">
		  <p class="control">
            <Link to="/Home" className="button is-success">
                    Login
            </Link>
		  </p>
		</div>
      </div>         
       </div>
      </section>
            </div>
         );
    }
}
 
export default MLogin;