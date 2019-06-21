import React, { Component } from 'react';

class MModal extends Component {
    render() { 
        if(!this.props.show){
            return null;
        }
        return ( 
            <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                <p class="modal-card-title">Add New Entry</p>
                <button class="delete" aria-label="close" onClick={this.props.onClose}></button>
                </header>
                <section class="modal-card-body">
                <div class="field">
                <label class="label">Search Name</label>
                <div class="control">
                    <input class="input" type="text" placeholder="Text input"/>
                </div>
                </div>

                <div class="field">
                <label class="label">Select Time</label>
                <div class="label">
                    <div class="select">
                    <select>
                        <option>Start time</option>
                        <option>8:00 - 9:00</option>
                        <option>9:00 - 10:00</option>
                        <option>10:00 - 11:00</option>
                        <option>11:00 - 12:00</option>
                        <option>12:00 - 1:00</option>
                        <option>1:00 - 2:00</option>
                        <option>2:00 - 3:00</option>
                        <option>3:00 - 4:00</option>
                        <option>4:00 - 5:00</option>
                    </select>
                    </div>

                    <div class="select">
                    <select>
                        <option>End time</option>
                        <option>8:00 - 9:00</option>
                        <option>9:00 - 10:00</option>
                        <option>10:00 - 11:00</option>
                        <option>11:00 - 12:00</option>
                        <option>12:00 - 1:00</option>
                        <option>1:00 - 2:00</option>
                        <option>2:00 - 3:00</option>
                        <option>3:00 - 4:00</option>
                        <option>4:00 - 5:00</option>
                    </select>
                    </div>
                </div>
                </div>
                </section>
                <footer class="modal-card-foot">
                {/*<button class="button is-success">Save changes</button>*/}
                <button class="button is-success" onClick={this.props.onSave}>Save</button>
                <button class="button is-danger" onClick={this.props.onClose}>Cancel</button>
                </footer>
            </div>
            </div>
         );
    }
}
 
export default MModal;