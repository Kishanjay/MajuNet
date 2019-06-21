import React, { Component } from 'react';

class MFinancial extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div>
                <form action="/calculation_page.php">
                    <input type="text" name="FirstName" value="Mickey"></input>
                    <input type="submit" value="Submit"></input>
                </form>
                <b>Estimation of Order (advice)</b>
                <table className="table is-bordered is-fullwidth">
                    <thead>
                    </thead>
                    
                    <tbody>
                        <tr>
                            <th>Estimated Requirement</th>
                            <th>Cost</th>
                            <th>Total Cost</th>
                            <th>Estimated Time of Delivery</th>
                        </tr>
                        <tr>
                            <td>Number of package needed</td>
                            <td></td>
                            <td rowSpan="5"></td>
                            <td rowSpan="5"></td>
                        </tr>
                        <tr>
                            <td>Number of total equipment needed</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Other material</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Number of hours</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Number of employees</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            
         );
    }
}
 
export default MFinancial;