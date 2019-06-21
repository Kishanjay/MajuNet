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
                    <p>
                        I LOVE MAJUNET!!!
                    </p>
                </section>
                <footer class="modal-card-foot">
                {/*<button class="button is-success">Save changes</button>*/}
                <button class="button is-danger" onClick={this.props.onClose}>Cancel</button>
                </footer>
            </div>
            </div>
         );
    }
}
 
export default MModal;