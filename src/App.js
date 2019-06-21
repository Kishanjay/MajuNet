import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MNavbar from './MNavbar.js';
import MButton from './MButton';
import MFootnote from './MFootnote.js';
import MContainer from './MContainer.js';
import MTable from './MTable.js';
import 'bulma/css/bulma.css';
import MFinancial from './MFinancial.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Home = () => (
  <MTable></MTable>
)

const About = () => (
  <div>
    About
  </div>
)

const Code = () => (
  <div>
    Code
  </div>
)

const Contact = () => (
  <div>
    Contact
  </div>
)

const info = () => (
  <div>
    info
  </div>
)

class MainMenu extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          <button>home</button>
        </Link>
        <Link to="/about">
          <button>About</button>
        </Link>
        <Link to="/code">
          <button>code</button>
        </Link>
        <Link to="/code">
          <button>contact</button>
        </Link>
        <Link to="/info">
          <button>info</button>
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
            <MNavbar></MNavbar>
            <MainMenu/>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/info" component={info} />
            <Route exact path="/timetable" component={MTable} />
            <Route exact path="/financial" component={MFinancial} />
          </div>
        </div>
      </Router>
    );
  }

}

export default App;
