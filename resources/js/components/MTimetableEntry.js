import React, { Component } from 'react';

class MTimetableEntry extends Component {
    FIRST_TIME_SLOT = 8;

    constructor(props) {
        super(props);
    }

    render() { 
        const startTime = new Date(this.props.entry.start_time);
        const endTime = new Date(this.props.entry.end_time);

        const colSpan = endTime.getHours() - startTime.getHours();
        const colOffset = startTime.getHours() - this.FIRST_TIME_SLOT;

        const style = {
            backgroundColor: '#9bd8ab',
            padding: '1px 12px',
            borderRadius: '8px'
        }
        return ( 
            <tr>
                {colOffset && <td colSpan={colOffset}></td>}
                <td colSpan={colSpan}>
                    <p style={style}>{this.props.entry.employee.first_name} {this.props.entry.employee.last_name}</p>
                </td>
            </tr>
         )
    }
}
 
export default MTimetableEntry;