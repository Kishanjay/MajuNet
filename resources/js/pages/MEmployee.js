import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EmployeeService from '../services/Employee'

class MEmployee extends Component {

    componentDidMount() {
        EmployeeService.get().then(response => {
            console.log(response);
            this.setState({
                employees: response.data
            });
        });
    }

    render() { 
        return ( 
            <div className="container">
            <nav className="level">
                <div className="level-left">
                    <div className="level-item">
                        <h1 className="title">Senarai Pekerja</h1>
                    </div>
                </div>
                <div className="level-right">
                    <Link to="/employee_add"><button className="button">Add employee</button></Link>
                </div>
            </nav>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>                   
                        <th>No</th>
                        <th>Nama Penuh</th>
                        <th># Telefon</th>
                        <th>Alamat</th>
                        <th># IC</th>
                    </tr> 
                </thead>
                <tbody>
                        <tr>
                        </tr>    
                </tbody>
                </table>
            </div>


         );
    }
}
 
export default MEmployee;