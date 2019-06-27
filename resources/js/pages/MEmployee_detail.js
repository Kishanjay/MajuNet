import React, { Component } from 'react';

class MEmployee_detail extends Component {
    constructor(props) {
        super(props);

        console.log(props.params.id);
    }
    render() {
        return (
            <h1>Test moniqa</h1>
        );
    }
}

export default MEmployee_detail;