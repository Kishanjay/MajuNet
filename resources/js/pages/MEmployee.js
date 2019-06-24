import React, { Component } from 'react';
import axios from 'axios'

class MEmployee extends Component {

    componentDidMount() {
        axios.get('/api/employee').then(response => {
            console.log(response);
            this.setState({
              employees: response.data
            })
          })
    }

    addEmployee = function () {
        console.log("adding employee");
        // should add an employee through the API

        axios.post('/api/employee', {
            first_name: 'Kishan',
            last_name: 'Kishan',
            phone: '0229292',
            age: '18',
            address: 'contejeisfjes',
            city: 'Amsterdam'
        }).then(response => {
            console.log(response);
        });
    }

    render() { 
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
                </table>
            </div>


         );
    }
}
 
export default MEmployee;