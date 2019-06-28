import React, { Component } from 'react';
import MButton from '../components/MButton.js';
import MTimetableEditModal from './MTimetableEditModal.js';
import MTimetableEntry from '../components/MTimetableEntry';
import TimetableService from '../services/Timetable';

class MTable extends Component {

    constructor(props) {
        super(props);


        const firstDayDate = new Date();
        const secondDayDate = new Date();
        secondDayDate.setDate(secondDayDate.getDate() + 1);
        const thirdDayDate = new Date();
        thirdDayDate.setDate(thirdDayDate.getDate() + 2);
        const fourthDayDate = new Date();
        fourthDayDate.setDate(fourthDayDate.getDate() + 3);

        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

        this.state = {
            isOpen: false,
            timetables: [], // more like timeslots in the timetable
            week: {
                firstDay: [],
                secondDay: [],
                thirdDay: [],
                fourthDay: []
            },
            firstDayDate,
            secondDayDate,
            thirdDayDate,
            fourthDayDate,
            weekdays
        };




        this.loadTimetables();
    }

    toggleEditModal = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    openEditModal = () => {
        this.setState({
            isOpen: true
        });
    }
    closeEditModal = () => {
        this.setState({
            isOpen: false
        });
    }

    /**
     * Adds a timetable entry
     */
    onAdd = (entry) => {
        this.closeEditModal();
        TimetableService.add(entry).then(response => {
            console.log(response);
            this.loadTimetables();
        });
    }

    loadTimetables() {
        TimetableService.get().then(response => {
            const week = {
                firstDay: [],
                secondDay: [],
                thirdDay: [],
                fourthDay: []
            }
            response.data.forEach(entry => {
                const entryDate = new Date(entry.date);
                if (entryDate.getDate() == this.state.firstDayDate.getDate()) {
                    week.firstDay.push(entry);
                }
                if (entryDate.getDate() == this.state.secondDayDate.getDate()) {
                    week.secondDay.push(entry);
                }
                if (entryDate.getDate() == this.state.thirdDayDate.getDate()) {
                    week.thirdDay.push(entry);
                }
                if (entryDate.getDate() == this.state.fourthDayDate.getDate()) {
                    week.fourthDay.push(entry);
                }
            });
            this.setState({
                week: week
            });
            console.log("logging week now");
            console.log(this.state.week);

            this.setState({
                timetables: response.data
            });
        });
    }

    render() {
        const tableStyle = {
            tableLayout: 'fixed',
            width: '100%',
            padding: '12px',
            margin: '0px'
        }
        const tdStyle = {
            width: '7%%',
        }
        
        const addButtonStyle = {
            position: 'fixed',
            right: '100px',
            bottom: '100px',
            borderRadius: '100%',
            width: '80px',
            height: '80px',
            fontWeight: 'bold',
            boxShadow: '0px 0px 14px -4px black'
        }
        return (
            <main className="container">
                <h1 className="title">Jadual Waktu Bekerja</h1> {/* Timetable */}

                <div className="table-wrapper">
                    <div className="level">
                        <div className="level-left">
                            <h2 className="title is-5">Hari Ini</h2> {/* Today */}
                        </div>
                        <div className="level-left">
                            <h3 className="subtitle is-6">
                                {this.state.firstDayDate.getDate()}-{this.state.firstDayDate.getMonth()}-{this.state.firstDayDate.getFullYear()}
                            </h3>
                        </div>
                    </div>

                    <table className="table is-bordered is-narrow is-fullwidth bg-opaque" style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={tdStyle}>06:00</th>
                                <th style={tdStyle}>07:00</th>
                                <th style={tdStyle}>08:00</th>
                                <th style={tdStyle}>09:00</th>
                                <th style={tdStyle}>10:00</th>
                                <th style={tdStyle}>11:00</th>
                                <th style={tdStyle}>12:00</th>
                                <th style={tdStyle}>13:00</th>
                                <th style={tdStyle}>14:00</th>
                                <th style={tdStyle}>15:00</th>
                                <th style={tdStyle}>16:00</th>
                                <th style={tdStyle}>17:00</th>
                                <th style={tdStyle}>18:00</th>
                                <th style={tdStyle}>19:00</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.week.firstDay.map(timetable =>
                                <MTimetableEntry key={timetable.id} entry={timetable} />
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="table-wrapper">
                    <div className="level">
                        <div className="level-left">
                            <h2 className="title is-5">Esok</h2> {/* Tomorrow */}
                        </div>
                        <div className="level-right">
                            <h3 className="subtitle is-6">
                                {this.state.secondDayDate.getDate()}-{this.state.secondDayDate.getMonth()}-{this.state.secondDayDate.getFullYear()}
                            </h3>
                        </div>
                    </div>


                    <table className="table is-bordered is-narrow is-fullwidth bg-opaque" style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={tdStyle}>06:00</th>
                                <th style={tdStyle}>07:00</th>
                                <th style={tdStyle}>08:00</th>
                                <th style={tdStyle}>09:00</th>
                                <th style={tdStyle}>10:00</th>
                                <th style={tdStyle}>11:00</th>
                                <th style={tdStyle}>12:00</th>
                                <th style={tdStyle}>13:00</th>
                                <th style={tdStyle}>14:00</th>
                                <th style={tdStyle}>15:00</th>
                                <th style={tdStyle}>16:00</th>
                                <th style={tdStyle}>17:00</th>
                                <th style={tdStyle}>18:00</th>
                                <th style={tdStyle}>19:00</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.week.secondDay.map(timetable =>
                                <MTimetableEntry key={timetable.id} entry={timetable} />
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="table-wrapper">
                    <div className="level">
                        <div className="level-left">
                            <h2 className="title is-5">{this.state.weekdays[this.state.thirdDayDate.getDay()]}</h2>
                        </div>
                        <div className="level-right">
                            <h3 className="subtitle is-6">
                                {this.state.thirdDayDate.getDate()}-{this.state.thirdDayDate.getMonth()}-{this.state.thirdDayDate.getFullYear()}
                            </h3>
                        </div>
                    </div>

                    <table className="table is-bordered is-narrow is-fullwidth bg-opaque" style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={tdStyle}>06:00</th>
                                <th style={tdStyle}>07:00</th>
                                <th style={tdStyle}>08:00</th>
                                <th style={tdStyle}>09:00</th>
                                <th style={tdStyle}>10:00</th>
                                <th style={tdStyle}>11:00</th>
                                <th style={tdStyle}>12:00</th>
                                <th style={tdStyle}>13:00</th>
                                <th style={tdStyle}>14:00</th>
                                <th style={tdStyle}>15:00</th>
                                <th style={tdStyle}>16:00</th>
                                <th style={tdStyle}>17:00</th>
                                <th style={tdStyle}>18:00</th>
                                <th style={tdStyle}>19:00</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.week.thirdDay.map(timetable =>
                                <MTimetableEntry key={timetable.id} entry={timetable} />
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="table-wrapper">
                    <div className="level">
                        <div className="level-left" >
                            <h2 className="title is-5">{this.state.weekdays[this.state.fourthDayDate.getDay()]}</h2>
                        </div>
                        <div className="level-right">
                            <h3 className="subtitle is-6">
                                {this.state.fourthDayDate.getDate()}-{this.state.fourthDayDate.getMonth()}-{this.state.fourthDayDate.getFullYear()}
                            </h3>
                        </div>
                    </div>

                    <table className="table is-bordered is-narrow is-fullwidth bg-opaque" style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={tdStyle}>06:00</th>
                                <th style={tdStyle}>07:00</th>
                                <th style={tdStyle}>08:00</th>
                                <th style={tdStyle}>09:00</th>
                                <th style={tdStyle}>10:00</th>
                                <th style={tdStyle}>11:00</th>
                                <th style={tdStyle}>12:00</th>
                                <th style={tdStyle}>13:00</th>
                                <th style={tdStyle}>14:00</th>
                                <th style={tdStyle}>15:00</th>
                                <th style={tdStyle}>16:00</th>
                                <th style={tdStyle}>17:00</th>
                                <th style={tdStyle}>18:00</th>
                                <th style={tdStyle}>19:00</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.week.fourthDay.map(timetable =>
                                <MTimetableEntry key={timetable.id} entry={timetable} />
                            )}
                        </tbody>
                    </table>
                </div>

                <MButton
                    style={addButtonStyle}
                    className="button is-warning"
                    buttonText="Add +"
                    onClick={this.openEditModal}>
                </MButton>

                <MTimetableEditModal
                    isOpen={this.state.isOpen}
                    onSubmit={this.onAdd}
                    onCancel={this.closeEditModal}
                ></MTimetableEditModal>
            </main>
        );
    }
}

export default MTable;