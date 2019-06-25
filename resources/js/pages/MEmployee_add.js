import React, { Component } from 'react';
import MButton from '../components/MButton'
import EmployeeService from '../services/Employee'
import MMessage from '../components/MMessage'

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
    constructor(props) {
        super(props);

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            first_name: "",
            last_name: "",
            age: "",
            city: "",
            address: "",
            phone: "",

            response: null
        };
    }

    clearInput() {
        this.setState({
            first_name: "",
            last_name: "",
            age: "",
            city: "",
            address: "",
            phone: ""
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(event) {
        const newEmployee = {};
        if (this.state.first_name) newEmployee.first_name = this.state.first_name;
        if (this.state.last_name) newEmployee.last_name = this.state.last_name;
        if (this.state.age) newEmployee.age = this.state.age;
        if (this.state.city) newEmployee.city = this.state.city;
        if (this.state.address) newEmployee.address = this.state.address;
        if (this.state.phone) newEmployee.phone = this.state.phone;

        EmployeeService.add(newEmployee).then(response => {
            this.setState({
                response: response
            });

            this.clearInput();
            window.scrollTo(0, 0);
        });
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h1 className="title">Register employee</h1>

                <MMessage response={this.state.response} onSuccess="Employee added successfully" onError="Couldn't add employee" />

                <div className="field">
                    <label className="label">Nama Penuh:</label>
                    <div className="control">
                        <input name="first_name" className="input" type="text" placeholder="Sila isikan nama penuh" value={this.state.first_name} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Nama terakhir:</label>
                    <div className="control">
                        <input name="last_name" className="input" type="text" placeholder="Sila isikan nama terakhir" value={this.state.last_name} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Umur:</label>
                    <div className="control">
                        <input name="age" className="input" type="text" placeholder="Sila isikan umur" value={this.state.age} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Bandar:</label>
                    <div className="control">
                        <input name="city" className="input" placeholder="Sila isikan bandar" value={this.state.city} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Alamat rumah:</label>
                    <div className="control">
                        <textarea name="address" className="textarea" placeholder="Sila isikan alamat rumah" value={this.state.address} onChange={this.handleInputChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">No. Telefon:</label>
                    <div className="control">
                        <input name="phone" className="input" type="text" placeholder="Sila isikan no. telefon" value={this.state.phone} onChange={this.handleInputChange} />
                    </div>
                </div>

                <MButton
                    buttonText="Register New Employee"
                    className="button is-primary"
                    onClick={this.handleSubmit}
                ></MButton>
            </div>
        );
    }
}

export default MEmployee_add;