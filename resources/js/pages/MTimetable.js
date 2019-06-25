import React, { Component } from 'react';
import MButton from '../components/MButton.js';
import MTimetableEditModal from './MTimetableEditModal.js';
import MTimetableEntry from '../components/MTimetableEntry';
import TimetableService from '../services/Timetable';

class MTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
            timetables: [] // more like timeslots in the timetable
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
        console.log(entry);
        this.closeEditModal();
        TimetableService.add(entry).then(response => {
            console.log(response);
            this.loadTimetables();
        });
    }

    loadTimetables() {
        TimetableService.get().then(response => {
            console.log(response);
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
        return (
            <main className="container">
                <h1 className="title">Senarai Pekerja</h1>

                <div className="table-wrapper">
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
                            {this.state.timetables.map(timetable =>
                                <MTimetableEntry key={timetable.id} entry={timetable} />
                            )}
                        </tbody>
                    </table>
                </div>

                <MButton
                    className="button"
                    buttonText="Add New Entry"
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