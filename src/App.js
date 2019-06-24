import React, { Component } from 'react';
import './App.css';
import MFootnote from './MFootnote.js';
import MTable from './MTable.js';
import MLogin from './MLogin.js';
import MEmployee from './MEmployee';
import MEmpDetails from './MEmpDetails';
import 'bulma/css/bulma.css';
//import '~bulma/css/bulma.css';
// import '~bulma-calendar';
import MFinancial from './MFinancial.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import MAdd_Employee from './MAdd_Employee';

const Home = () => (
  <MTable></MTable>
)

const Login = () =>(
  <MLogin></MLogin>
)

const Employee = () =>(
  <MEmployee></MEmployee>
)

const Employee_Details = () =>(
  <MEmpDetails></MEmpDetails>
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
            <Route exact path="/Employee" component={Employee} />
            <Route exact path="/Employee_Details" component={Employee_Details}/>
            <Route exact path="/Add_Employee" component={MAdd_Employee}/>
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
