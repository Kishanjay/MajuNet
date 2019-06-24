import React, { Component } from 'react';

class MFinancial extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <form action="/calculation_page.php">
                    <div className="columns">
                        <div className="column is-one-third">
                            <input type="text" placeholder="Number of KGs" />
                            <button>Calculate</button>
                        </div>
                        <div className="column is-one-third has-text-centered has-text-weight-bold is-size-4-desktop">Estimation of Order (advice)
                        </div>
                        <div className="column is-one-third">
                        </div>
                    </div>
                </form>

                <div>
                    <table className="table is-bordered is-fullwidth">
                        <thead>
                            <tr>
                                <th>Estimated Requirement</th>
                                <th>Cost</th>
                                <th>Total Cost</th>
                                <th>Estimated Time of Delivery</th>
                            </tr>   
                        </thead>

                        <tbody>
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