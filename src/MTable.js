import React, { Component } from 'react';
import MButton from './MButton.js'



function test(){
    console.log("test");
}


class MTable extends Component {
    
    test2(){
        alert("Button clicked!");
    }

    constructor(props) {
        super(props);
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
                <button className="button" onClick={this.test2}>Add New Entry</button>
            </div>

            </div>

            
         );
    }
}
 
export default MTable;