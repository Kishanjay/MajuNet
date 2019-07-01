import React, { Component } from 'react';
import EmployeeService from '../services/Employee';
import TimetableService from '../services/Timetable';

class MDashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            numberOfEmployees: null,
            today: new Date(),
            numberOfWorkingHoursToday: null,
            numberOfWorkersToday: null,
        }
    }

    componentDidMount() {
        EmployeeService.get().then(response => {
            this.setState({
                numberOfEmployees: response.data.length
            });
        });

        TimetableService.get().then(response => {
            var numberOfWorkingHoursToday = 0;
            var employeesWorkingToday = [];

            response.data.forEach(entry => {
                var entryDate = new Date(entry.date);
                var startTime = new Date(entry.start_time);
                var endTime = new Date(entry.end_time);
                if (entryDate.toDateString() == this.state.today.toDateString()) {
                    numberOfWorkingHoursToday += endTime.getHours() - startTime.getHours();

                    if (!employeesWorkingToday.includes(entry.employee_id)) {
                        employeesWorkingToday.push(entry.employee_id);  
                    }
                }
            });

            this.setState({
                numberOfWorkingHoursToday: numberOfWorkingHoursToday,
                numberOfWorkersToday: employeesWorkingToday.length
            });
        });
    }

    render() { 
        return ( 
            <div class="tile is-ancestor">
                {/* {this.state.today.getDate()}-{this.state.today.getMonth()}-{this.state.today.getFullYear()} */}
                <div class="tile is-vertical is-8">
                    <div class="tile">
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-primary">
                                <p class="title">Jumlah Pekerja</p> {/* Number of employee */}
                        <p class="subtitle">{this.state.numberOfEmployees}</p>
                        </article>
                    </div>

                    <div class="tile is-parent">
                        <article class="tile is-child notification is-info">
                                <p class="title">Jangka Masa Kerja Hari Ini</p> {/**Total working hour for today */}
                                <p class="subtitle">{this.state.numberOfWorkingHoursToday}</p>
                        </article>
                    </div>
                    </div>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child notification is-success">
                    <div class="content">
                        <p class="title">Jumlah Pekerja Hari Ini</p> {/** Number of workers for today */}
                            <p class="subtitle"> {this.state.numberOfWorkersToday} {/** Insert number of workers for today */} </p>
                        <div class="content">
                        </div>
                    </div>
                    </article>
                </div>
                </div>
         );
    }
}
 
export default MDashboard;