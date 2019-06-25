import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EmployeeService from '../services/Employee'

class MEmployee extends Component {

    state={
        employees:[]
    }
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
                        <td>Nama Penuh</td>
                        <td># Telefon</td>
                        <td>Alamat</td>
                        <td># IC</td>
                        </tr>
                </thead>

                <tbody>
                        {this.state.employees.map(emp_name =>
                        <tr>
                            <td>{counter++}</td>
                            <td>{emp_name.first_name}</td>
                            <td>{emp_name.phone}</td>
                            <td>{emp_name.address}</td>
                            <td>{emp_name.id}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>


         );
    }
}
 
export default MEmployee;