import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MNavbar from './MNavbar.js';
import MButton from './MButton';
import MFootnote from './MFootnote.js';
import MContainer from './MContainer.js';
import MTable from './MTable.js';
import 'bulma/css/bulma.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <MTable></MTable>
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
        <Link to="/Timetable">
          <button class="button is-info is-hovered">Timetable</button>
        </Link>

        <Link to="/FinancialOverview">
          <button class="button is-success is-hovered">Financial Overview</button>
        </Link>
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
            <Route exact path="/Timetable" component={Home} />
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
