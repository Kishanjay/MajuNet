import React, { Component } from 'react';
import MButton from '../components/MButton';

class MFinancial extends Component {
    constructor(props) {
        super(props);

        this.doCalculations = this.doCalculations.bind(this);
    }

    doCalculations(ev) {
        var amountOrder = document.getElementById("amountOrder").value;
        var noOfEmployee = amountOrder * 0.01;
        
        if(noOfEmployee < 1){
            noOfEmployee = 1;
        }

        ev.preventDefault();
        document.getElementById('Package name').innerHTML = (amountOrder * 1.1).toFixed(2);
        document.getElementById('Equipment name').innerHTML = (amountOrder * 0.4).toFixed(2);
        document.getElementById('Material name').innerHTML = (amountOrder * 0.35).toFixed(2);
        document.getElementById('Employee hours').innerHTML = (amountOrder * 0.6).toFixed(2);
        document.getElementById('Employees').innerHTML = noOfEmployee;
        
    }

    render() {
        const tdStyle = {
            verticalAlign: 'middle',
            textAlign: 'center'
        };
        
        return (
            <main className="container">


                <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <h1 className="title">Estimation of Order (advice)</h1>
                        </div>
                    </div>
                    <div className="level-right">
                    <input id="amountOrder" className="input" type="text" placeholder="Number of products"/>
                        <MButton className="button is-info" buttonText="Calculate" onClick={this.doCalculations}></MButton>
                    </div>
                </nav>

                <div class="table-wrapper">
                    <table className="table is-bordered is-fullwidth has-text-centered">
                        <col width="20%"></col>
                        <col width="20%"></col>
                        <col width="20%"></col>
                        <col width="20%"></col>
                        <col width="20%"></col>
                        <thead>
                            <tr>
                                <th align="center">Name</th>
                                <th align="center">Estimated Quantity</th>
                                <th align="center">Cost</th>
                                <th align="center">Total Cost</th>
                                <th align="center">Estimated Time of Completing order</th>
                            </tr>   
                        </thead>

                        <tbody>
                            <tr>
                                <td>Package name</td>
                                <td id="Package name" style={tdStyle}></td>
                                <td style={tdStyle}>RM10,000</td>
                                <td rowSpan="6" style={tdStyle}>RM100,000</td>
                                <td rowSpan="6" style={tdStyle}>Tuesday, 26-June-2019</td>
                            </tr>
                            <tr>
                                <td>Equipment name</td>
                                <td id ="Equipment name" style={tdStyle}></td>
                                <td style={tdStyle}>RM20,000</td>
                            </tr>
                            <tr>
                                <td>Material name</td>
                                <td id ="Material name" style={tdStyle}></td>
                                <td style={tdStyle}>RM30,000</td>
                            </tr>
                            <tr>
                                <td>Employee Hours</td>
                                <td id ="Employee hours" style={tdStyle}></td>
                                <td style={tdStyle}>RM30,000</td>
                            </tr>
                            <tr>
                                <td>Employees</td>
                                <td id ="Employees" style={tdStyle}></td>
                                <td style={tdStyle}>RM30,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        );
    }
}

export default MFinancial;