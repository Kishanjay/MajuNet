import React, { Component } from 'react';
import MButton from '../components/MButton';

class MFinancial extends Component {
    constructor(props) {
        super(props);

        this.doCalculations = this.doCalculations.bind(this);
    }

    doCalculations(ev) {
        var amountOrder = document.getElementById("amountOrder").value;
        var noOfEmployee = Math.round((amountOrder * 0.02).toFixed(0));
        
        if(noOfEmployee < 1){
            noOfEmployee = 1;
        }

        ev.preventDefault();
        document.getElementById('Package name').innerHTML = Math.round((amountOrder * 1.1).toFixed(2));
        document.getElementById('Equipment name').innerHTML = (amountOrder * 0.4).toFixed(2);
        document.getElementById('Material name').innerHTML = Math.round((amountOrder * 0.35).toFixed(2));
        document.getElementById('Employee hours').innerHTML = Math.round((amountOrder * 0.6).toFixed(2));
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
                            <h1 className="title">Anggaran Pesanan Produk(nasihat)</h1> {/*Estimation of Order (advice) */}
                        </div>
                    </div>
                    <div className="level-right">
                    <input id="amountOrder" className="input" type="text" placeholder="Jumlah Produk"/>{/* Number of products */}
                        <MButton className="button is-info" buttonText="Kira" onClick={this.doCalculations}></MButton> {/**Kira = Calculate */}
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
                                <th align="center">Nama</th> {/* Name */}
                                <th align="center">Anggaran Kuantiti</th> {/*Estimated Quantity */}
                                <th align="center">Kos</th> {/*Cost */}
                                <th align="center">Jumlah Kos</th> {/* Total Cost */}
                                <th align="center">Anggaran Tarikh Siap Pesanan</th> {/* Estimated Time of Completing order */}
                            </tr>   
                        </thead>

                        <tbody>
                            <tr>
                                <td>Nama Pakej</td>{/* Package name */}
                                <td id="Package name" style={tdStyle}></td>
                                <td style={tdStyle}>RM10,000</td>
                                <td rowSpan="6" style={tdStyle}>RM100,000</td>
                                <td rowSpan="6" style={tdStyle}>Tuesday, 26-June-2019</td>
                            </tr>
                            <tr>
                                <td>Nama Peralatan</td>{/* Equipment name */}
                                <td id ="Equipment name" style={tdStyle}></td>
                                <td style={tdStyle}>RM20,000</td>
                            </tr>
                            <tr>
                                <td>Bahan</td>{/* Material name */}
                                <td id ="Material name" style={tdStyle}></td>
                                <td style={tdStyle}>RM30,000</td>
                            </tr>
                            <tr>
                                <td>Jangka Masa Diperlukan</td> {/* Employee Hours (Total working hours needed) */}
                                <td id ="Employee hours" style={tdStyle}></td>
                                <td style={tdStyle}>RM30,000</td>
                            </tr>
                            <tr>
                                <td>Jumlah Pekerja Diperlukan</td>{/* Employees (Number of employees needed) */}
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