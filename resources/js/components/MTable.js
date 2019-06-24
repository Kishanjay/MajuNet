import React, { Component } from 'react';
import MButton from './MButton.js'
//import TimetableService from './TimetableService';
import MModal from './MModal.js';

class MTable extends Component {

    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }

    toggleModal = () => {
        this.setState({
          isOpen: !this.state.isOpen
        });
    }

    saveEntry = () => {
        // post to server!
        this.setState({
            isOpen: !this.state.isOpen
          });
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
                <th>11:00 - 12:00 </th>
                <th>12:00 - 1:00 </th>
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
                <MButton 
                    buttonClass="button is-success is-warning"
                    buttonText="Add New Entry"
                    onClick={this.toggleModal}>
                </MButton>
            </div>

            <MModal 
                show={this.state.isOpen}
                onSave={this.saveEntry}
                onClose={this.toggleModal}
            ></MModal>
            </div>
            

            
         );
    }
}
 
export default MTable;