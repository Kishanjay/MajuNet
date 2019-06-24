// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MHeader from './MHeader'
import MFinancial from './MFinancial'
import MTable from './MTable.js'
import MEmployee from './MEmployee.js'
import MHome from '../pages/Mhome.js'
import 'bulma/css/bulma.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <MHeader />
          <Switch>
            <Route exact path='/' component={MHome} />
            <Route exact path='/Timetable' component={MTable} />
            <Route exact path='/FinancialOverview' component={MFinancial} />
            <Route exact path='/Employee' component={MEmployee} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))