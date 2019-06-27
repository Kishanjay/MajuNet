// resources/assets/js/components/App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MHeader from './MHeader'
import MFootnote from './MFootnote.js'
import MFinancial from '../pages/MFinancial'
import MTimetable from '../pages/MTimetable.js'
import MEmployee from '../pages/MEmployee.js'
import MEmployee_add from '../pages/MEmployee_add.js'
import MEmployee_detail from '../pages/MEmployee_detail.js'
import MHome from '../pages/Mhome.js'
import MLogin from '../pages/MLogin.js'
import MEmpDetails from '../pages/MEmpDetails.js'
import 'bulma/css/bulma.css'
import 'bulma-calendar/dist/css/bulma-calendar.min.css'
import './app.css';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <MHeader />
          <Switch>
            <Route exact path='/' component={MHome} />
            <Route exact path='/Timetable' component={MTimetable} />
            <Route exact path='/FinancialOverview' component={MFinancial} />
            <Route exact path='/Employee' component={MEmployee} />
            <Route exact path='/Employee_add' component={MEmployee_add} />
            {/* <Route exact path='/Employee_detail/:id' component={MEmployee_detail} /> */}
            <Route exact path='/Login' component={MLogin} />
            <Route exact path='/Employee_details' component={MEmpDetails} />
          </Switch>
          <MFootnote/>
        </div>
      </BrowserRouter>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))