import React, { Component } from 'react';
import axios from 'axios'

class MEmployee extends Component {

    state={
        employees:[]
    }
    componentDidMount() {
        axios.get('/api/employee')
            .then(response => {
                    console.log(response.data);
                    this.setState({
                        employees: response.data
                })
          })
    }

    render() {
        //console.log(this.state.employees);
        var counter = 1;
        return ( 
            <div className="container">
            <h1 className="title">Senarai Pekerja</h1>
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