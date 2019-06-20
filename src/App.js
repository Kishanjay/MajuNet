import React from 'react';
import logo from './logo.svg';
import './App.css';
import MFootnote from './MFootnote.js';
import MNavbar from './MNavbar.js';
import MContainer from './MContainer.js';
import MTable from './MTable.js';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
        {/*<MNavbar></MNavbar>*/}
          <MTable></MTable>
  {/*<MFootnote></MFootnote>*/}
    </div>
  );
}

export default App;
