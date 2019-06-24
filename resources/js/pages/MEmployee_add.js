import React, { Component } from 'react';
import MButton from '../components/MButton'

// const addEmployee = () =>function () {
//     console.log("adding employee");
//     // should add an employee through the API

//     axios.post('/api/employee', {
//         first_name: 'Kishan',
//         last_name: 'Kishan',
//         phone: '0229292',
//         age: '18',
//         address: 'contejeisfjes',
//         city: 'Amsterdam'
//     }).then(response => {
//         console.log(response);
//     });
// }


class MEmployee_add extends Component {
    addEmployee (){
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
                <table className="table is-hoverable">
                    <tbody>
                    <tr>
                        <td><p>Nama Penuh:</p></td>
                        <td><input className="input" type="text" placeholder="Sila isikan nama penuh"/></td>
                    </tr>

                    <tr>
                        <td><p>Alamat rumah:</p></td>
                        <td><textarea className="textarea" type="text" placeholder="Sila isikan alamat rumah"/></td>
                    </tr>

                    <tr>
                        <td><p>No IC:</p></td>
                        <td><input className="input" type="text" placeholder="Sila isikan no. IC"/></td>
                    </tr>

                    <tr>
                        <td><p>No. Telefon:</p></td>
                        <td><input className="input" type="text" placeholder="Sila isikan no. telefon"/></td>
                        </tr>
                        </tbody>
                </table>

                <MButton 
                    buttonText="Add New Employee"
                    buttonClass="button is-success is-warning"
                    onClick={this.addEmployee}
                    ></MButton>
            </div>
         );
    }
}
 
export default MEmployee_add;