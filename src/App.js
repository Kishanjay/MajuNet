import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
import Button from './Button';
import Footnote from './Footnote';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
        
        <Navbar name="kishan"></Navbar>
        <Button name="hoho"></Button>
        <Footnote></Footnote>
    </div>
  );
}

export default App;
