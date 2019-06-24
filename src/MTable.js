import React, { Component } from 'react';
import MButton from './MButton.js'
//import TimetableService from './TimetableService';
import MModal from './MModal.js';
import MEmpDetails from './MEmpDetails';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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

    Employee_Details = () => (
        <MEmpDetails></MEmpDetails>
    )

    render() { 
        return (
            <div class="container is-fluid">
                <Route exact path="/Employee_Details" component={MEmpDetails}/>
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
                <tr>
                    <td>Monday 24 June</td>
                    <td><Link to="/Employee_Details">
                        <a>Siti</a>
                        </Link><br></br>
                        Zubbeidah <br></br>
                        Asap <br></br>
                    </td>   

                    <td>Siti <br></br>
                        Zubbeidah <br></br>
                        Asap <br></br>
                    </td>

                    <td>Siti <br></br>
                        Zubbeidah <br></br>
                        Asap <br></br>
                    </td>

                    <td>Siti <br></br>
                        Zubbeidah <br></br>
                        Asap <br></br>
                    </td>

                    <td>Siti <br></br>
                        Zubbeidah <br></br>
                        Asap <br></br>
                    </td>

                    <td>Siti <br></br>
                        Zubbeidah <br></br>
                        Asap <br></br>
                    </td>

                    <td>Siti <br></br>
                        Zubbeidah <br></br>
                        Asap <br></br>
                    </td>

                    <td>
                         - 
                    </td> 

                    <td>
                        -
                    </td>
                </tr>

                <tr>
                    <td>Tuesday 25 June</td>    
                    <td>Siti<br></br>
                        Asmah<br></br>
                        Ibu Mas <br></br>
                    </td>
                </tr>   
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