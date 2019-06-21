import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MNavbar from './MNavbar.js';
import MButton from './MButton';
import MFootnote from './MFootnote.js';
import MContainer from './MContainer.js';
import MTable from './MTable.js';
import MLogin from './MLogin.js';
import 'bulma/css/bulma.css';
import MFinancial from './MFinancial.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <MTable></MTable>
)

const Login = () =>(
  <MLogin></MLogin>
)

const FinancialOverview = () => (
  <div>
    FinancialOverview
  </div>
)

class MainMenu extends Component {
  render() {
    return (
      <div class="notification">
        <div>
        <nav class="navbar is-transparent">
        <div class="navbar-brand">
        <a class="navbar-item">
          <img src={require('./logo.png')}/>
        </a>
          <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navbarExampleTransparentExample" class="navbar-menu">
          <div class="navbar-start">

            <Link to="/Timetable">
              <a class="navbar-item">
                Timetable
              </a>
            </Link>

            <Link to="/FinancialOverview">
              <a class="navbar-item">
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
            <Route exact path="/financial" component={MFinancial} />
            <Route exact path="/Timetable" component={Home} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/FinancialOverview" component={FinancialOverview} />
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
