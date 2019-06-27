import React, { Component } from 'react';
import { Link } from 'react-router-dom'



class MEmpDetails extends Component {
    constructor(props){
        super(props);

        console.log(props);
    }
    
    componentDidMount(){
        const { empId } = this.props.location.state;
        console.log(empId);
    }
    render() {
        console.log("Props: ", this.props.empId);
        return ( 
            <div class="container">
                <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
                <ul>
                    <li><Link to="/Employee">
                            Employees
                        </Link></li>
                    <li class="is-active"><a href="#" aria-current="page">Employees Details</a></li>
                </ul>
                </nav>

                <figure class="image is-128x128">
                    <img src={require('../components/logo.png')}/>
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

                    <tr>
                    <td>here here!!{this.props.empId}</td>
                    </tr>
                    
                </table>

            </div>
         );
    }
}
 
export default MEmpDetails;