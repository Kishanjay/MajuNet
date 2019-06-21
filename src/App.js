import React, { Component } from 'react';
import './App.css';
import MFootnote from './MFootnote.js';
import MTable from './MTable.js';
import MLogin from './MLogin.js';
import 'bulma/css/bulma.css';
//import '~bulma/css/bulma.css';
//import '~bulma-calendar';
import MFinancial from './MFinancial.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <MTable></MTable>
)

const Login = () =>(
  <MLogin></MLogin>
)

const FinancialOverview = () => (
  <MFinancial></MFinancial>
)

class MainMenu extends Component {
  render() {
    return (
      <div className="notification">
        <div>
        <nav className="navbar is-transparent">
        <div className="navbar-brand">
        <a className="navbar-item">
          <img src={require('./logo.png')}/>
        </a>
          <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div className="navbar-start">

            <Link to="/Timetable">
              <a className="navbar-item">
                Timetable
              </a>
            </Link>

            <Link to="/FinancialOverview">
              <a className="navbar-item">
                Financial Overview
              </a>
            </Link>
        </div>
        </div>

      </nav>
      </div>


      </div>

      
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <MainMenu/>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/FinancialOverview" component={MFinancial} />
            <Route exact path="/Timetable" component={Home} />
            <Route exact path="/Login" component={Login} />
          </div>

          <div>
            <MFootnote></MFootnote>
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
