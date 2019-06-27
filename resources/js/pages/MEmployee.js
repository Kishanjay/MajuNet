import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import EmployeeService from '../services/Employee'
import MButton from '../components/MButton';

class MEmployee extends Component {

    constructor(props) {
        super(props);

        this.state = {
            employees: [],
            isOpen:false,
        }
    }

    componentDidMount() {
        EmployeeService.get().then(response => {
            //console.log(response);
            this.setState({
                employees: response.data,
                isOpen:false
            });
        });
    }

    render() {
        return (
            <main className="container">
                <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <h1 className="title">Senarai Pekerja</h1>
                        </div>
                    </div>
                    <div className="level-right">
                        <Link to="/employee_add">
                            <MButton className="button is-warning" buttonText="Add Employee"></MButton>
                        </Link>
                    </div>
                </nav>
                <div className="table-wrapper">
                    <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                        <thead>
                            <tr>
                                <th>No</th>
                                <td>Nama Penuh</td>
                                <td># Telefon</td>
                                <td>Alamat</td>
                                <td>City</td>
                            </tr>
                        </thead>

                        <tbody>
                            {this.state.employees.map(employee =>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                     <td>
                                        <Link to={{
                                            pathname: '/Employee_details',
                                            state: {
                                                empId: employee.id
                                            }
                                            }}>{employee.first_name}
                                        </Link>
                                    </td>
                                    <td>{employee.phone}</td>
                                    <td>{employee.address}</td>
                                    <td>{employee.city}</td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </main>


        );
    }
}

export default MEmployee;