import React, { Component } from 'react';

class MEmployee extends Component {
    render() { 
        return ( 
            <div>
            <h1 class="title">Senarai Pekerja</h1>
            <table className="table is-bordered is-striped is-narrow is-hoverable is-fullwidth">
                <thead>
                    <tr>
                    <th>
                        <td>No.</td>
                        <td>Nama Penuh</td>
                        <td># Telefon</td>
                        <td>Alamat</td>
                        <td># IC</td>
                    </th>
                    </tr>
                </thead>
            </table>
            </div>
         );
    }
}
 
export default MEmployee;