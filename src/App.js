import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import mButton from './mButton';
import Footnote from './Footnote';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
        
        <Navbar name="kishan"></Navbar>
        <mButton name="hoho"></mButton>
        <Footnote></Footnote>
    </div>
  );
}

export default App;
