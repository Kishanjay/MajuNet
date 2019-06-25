// resources/assets/js/components/Header.js

import React from 'react'
import { Link } from 'react-router-dom'

const MHeader = () => (
  <div>
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <div className="loading">
            <div className="loader-wavy"></div>
            MajuNet
          </div>
        </Link>
        <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
          <span></span>
          <span></span>
          <span></span>
        </div>


      </div>

      <div id="navbarExampleTransparentExample" className="navbar-menu">
        <div className="navbar-start">

          <Link to="/Timetable" className="navbar-item">
            Timetable
      </Link>

          <Link to="/FinancialOverview" className="navbar-item">
            Financial Overview
      </Link>

          <Link to="/employee" className="navbar-item">
            Employees
      </Link>
        </div>
      </div>

    </nav>
  </div>
)

export default MHeader