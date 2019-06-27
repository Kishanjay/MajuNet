import React, { Component } from 'react';

import EmployeeService from '../services/Employee';

class MEmpDetails extends Component {
    constructor(props) {
        super(props);



        this.state = {
            employee: {
                first_name: null,
                last_name: null,
                city: null,
                timetables: []
            }
        }

    }

    addZero(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    componentDidMount() {
        EmployeeService.getById(this.props.match.params.id).then(response => {
            console.log(response);
            fixDateObjects(response.data);
            this.setState({ employee: response.data });
        })
    }

    render() {
        return (
            
            <main className="container">
                <div className="card">
                    <div className="card-image">
                    </div>
                    <div className="card-content">
                    <div className="media"><div className="media-left"><h4><b>Butiran Pekerja</b></h4></div></div>
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{this.state.employee.first_name} {this.state.employee.last_name}</p>
                                <p className="subtitle is-6">@{this.state.employee.city}</p>
                            </div>
                        </div>

                        <div className="content">
                            <table className="table is-striped">
                                <thead>
                                    <tr>
                                        <th>Tarikh bekerja</th>
                                        <th>Masa mula kerja</th>
                                        <th>Masa turun kerja</th>
                                        <th>Jangka masa (Jam)</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {this.state.employee.timetables.map(timetable =>
                                        <tr key={timetable.id}>
                                            <td>
                                                {timetable.date.getDate()}-{timetable.date.getMonth()}-{timetable.date.getFullYear()}
                                            </td>
                                            <td>{this.addZero(timetable.start_time.getHours())}:{this.addZero(timetable.start_time.getMinutes())}</td>
                                            <td>{this.addZero(timetable.end_time.getHours())}:{this.addZero(timetable.end_time.getMinutes())}</td>
                                            <td>{timetable.end_time.getHours() - timetable.start_time.getHours()}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default MEmpDetails;

// Nama Penuh:
// Alamat rumah:
// No IC:
// No. Telefon:


function fixDateObjects(employee) {
    employee.timetables.forEach(timetable => {
        timetable.date = new Date(timetable.date);
        timetable.start_time = new Date(timetable.start_time);
        timetable.end_time = new Date(timetable.end_time);
    });

    employee.timetables.sort(function (a, b) { 
        return a.date < b.date;
    });
}