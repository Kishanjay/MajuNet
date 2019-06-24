import React, { Component } from 'react';

class MEmpDetails extends Component {
    render() { 
        return ( 
            <div class="container">
                <figure class="image is-128x128">
                    <img src={require('./logo.png')}/>
                </figure>

                <table className="table is-hoverable">
                    <tr>
                        <td><p>Nama Penuh:</p></td>
                        <td><input class="input" type="text" placeholder="Text input" disabled/></td>
                    </tr>

                    <tr>
                        <td><p>Alamat rumah:</p></td>
                        <td><textarea class="textarea" type="text" placeholder="Text input"/></td>
                    </tr>

                    <tr>
                        <td><p>No IC:</p></td>
                        <td><input class="input" type="text" placeholder="Text input"/></td>
                    </tr>

                    <tr>
                        <td><p>No. Telefon:</p></td>
                        <td><input class="input" type="text" placeholder="Text input"/></td>
                    </tr>
                    
                </table>

            </div>
         );
    }
}
 
export default MEmpDetails;