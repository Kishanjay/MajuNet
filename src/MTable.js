import React, { Component } from 'react';
import MButton from './MButton.js'
import TimetableService from './TimetableService';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const entry = () => (
    <div>
      Add New Entry
    </div>
  )

class MTable extends Component {
    
    test2(){
        alert("Button clicked!");
    }

    constructor(props) {
        super(props);
        this.TimetableService = new TimetableService();
    }

    render() { 
        return ( 
            <div>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
            <thead>
                <tr>
                <th></th>
                <th>8:00 - 9:00</th>
                <th>9:00 - 10:00</th>
                <th>10:00 - 11:00</th>
                <th> Rehat </th>
                <th>1:00 - 2:00</th>
                <th>2:00 - 3:00</th>
                <th>3:00 - 4:00</th>
                <th>4:00 - 5:00</th>
                </tr>
            </thead>
            
            <tbody>
                                
            </tbody>

            </table>

            <div>
                <button className="button" onClick={this.TimetableService.addNewEntry}>Add New Entry</button>
            </div>

            </div>

            
         );
    }
}
 
export default MTable;