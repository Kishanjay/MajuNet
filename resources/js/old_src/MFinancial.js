import React, { Component } from 'react';

class MFinancial extends Component {
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <div>
                <form action="/calculation_page.php">
                    <input className="is-pulled-left" type="text" placeholder="Number of KGs"></input>
                    <input className="is-pulled-left" type="submit" value="Calculate"></input>
                    <b>Estimation of Order (advice)</b>
                
                <div class="field has-addons columns is-mobile is-centered">
                    <div class="control">
                        <input class="input" name="FirstName" type="text" placeholder="Mickey"/>
                    </div>
                    <div class="control">
                        <a class="button is-info">
                        Search
                        </a>
                    </div>
                    </div>
                </form>
                
                <br></br>

                <div>
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
            </div>
         );
    }
}
 
export default MFinancial;