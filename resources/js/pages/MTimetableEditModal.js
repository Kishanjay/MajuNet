import React, { Component } from 'react';
import bulmaCalendar from 'bulma-calendar/dist/js/bulma-calendar.min.js';
import EmployeeService from '../services/Employee';
const classNames = require('classnames');

class MTimetableEditModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []
        }
        EmployeeService.get().then(response => {
            console.log(response);
            this.setState({
                employees: response.data
            });
        });
    }

    componentDidMount() {
        this.initializeBulmaCalendar();
    }

    handleSubmit = () => {
        const entry = {
            start_time: document.querySelector("#time").bulmaCalendar.startTime,
            end_time: document.querySelector("#time").bulmaCalendar.endTime,
            date: document.getElementById("date").bulmaCalendar.date.start,
            employee_id: document.getElementById("employee_id").value
        }
        this.props.onSubmit(entry);
    }

    handleCancel = () => {
        this.props.onCancel();
    }

    render() {
        const modalClass = classNames('modal',
            { 'is-active': this.props.isOpen }
        );
        return (
            <div className={modalClass}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Add timetable entry</p>
                        <button className="delete" aria-label="close" onClick={this.handleCancel}></button>
                    </header>

                    <section className="modal-card-body">
                        <div className="field">
                            <label className="label">Nama Pekerja</label>
                            <div className="select is-fullwidth">
                            <select id="employee_id">
                                {this.state.employees.map(employee =>
                                    <option key={employee.id} value={employee.id}>{employee.first_name} {employee.last_name} ({employee.age})</option>
                                )}
                            </select>
                        </div>  
                        </div>    
                        
                                    
                        <div className="field">
                            <label className="label">Pilih Masa Bekerja</label>
                            <input name="start_time" type="date" id="time" />
                        </div>

                        <div className="field">
                            <label className="label">Pilih Tarikh Bekerja</label>
                            <input name="date" type="date" id="date"></input>
                        </div>
                    </section>

                    <footer className="modal-card-foot">
                        <button className="button" onClick={this.handleSubmit}>Add shift</button>
                        <button className="button" onClick={this.handleCancel}>Cancel</button>
                    </footer>
                </div>
            </div>
        );
    }

    initializeBulmaCalendar = () => {
        const timeCals = bulmaCalendar.attach('#time', {
            type: 'time',
            timeFormat: 'hh',
            minuteSteps: '60',
            displayMode: 'dialog',
            isRange: 'true',
            showHeader: 'false',
            closeOnOverlayClick: 'true',
            validateLabel: 'Set time'
        });
        const dateCals = bulmaCalendar.attach('#date', {
            type: 'date',
            displayMode: 'dialog',
            showHeader: 'false',
            closeOnSelect: 'true',
            closeOnOverlayClick: 'true'
        });

        const calendars = timeCals.concat(dateCals);

        calendars.forEach(calendar => {
            calendar.on('date:selected', date => {
                console.log(date);
            });
        });

        const startTime = new Date();
        startTime.setHours(9);
        startTime.setMinutes(0);
        startTime.setSeconds(0);
        const endTime = new Date();
        endTime.setHours(18)
        endTime.setMinutes(0);
        endTime.setSeconds(0);
        this.presetTimes(startTime, endTime);
    }

    presetTimes(startTime, endTime) {
        const element = document.querySelector('#time');
        if (element) {
            /**
             * Please note that I dont have down-syndrome, but this bug was 
             * just anoying and this is one sloppy way of fixing things.
             * 
             * I am sorry.
             */
            element.bulmaCalendar.startTime = startTime;
            element.bulmaCalendar.endTime = endTime;
            element.bulmaCalendar.refresh();
            element.bulmaCalendar.save();

            document.querySelectorAll(".timepicker-next").forEach(ele => {
                ele.click();
            });
            document.querySelectorAll(".timepicker-previous").forEach(ele => {
                ele.click();
            });
        }
    }
}

export default MTimetableEditModal;