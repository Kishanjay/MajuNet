import React, { Component } from 'react';

class MAdd_Employee extends Component {
    componentDidMount(){
        function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#blah').attr('src', e.target.result);
                }
                
                reader.readAsDataURL(input.files[0]);
            }
        }
        
        $("#imgInp").change(function(){
            readURL(this);
        });
    }
    render() { 
        return ( 
            <div className="container">
                <form>
                    Select image to upload:
                    <input type="file" name="fileToUpload" id="fileToUpload"/>
                    <img id="blah" src="#" alt="your image" />
                </form>

                <table className="table is-hoverable">
                    <tr>
                        <td><p>Nama Penuh:</p></td>
                        <td><input class="input" type="text" placeholder="Sila isikan nama penuh"/></td>
                    </tr>

                    <tr>
                        <td><p>Alamat rumah:</p></td>
                        <td><textarea class="textarea" type="text" placeholder="Sila isikan alamat rumah"/></td>
                    </tr>

                    <tr>
                        <td><p>No IC:</p></td>
                        <td><input class="input" type="text" placeholder="Sila isikan no. IC"/></td>
                    </tr>

                    <tr>
                        <td><p>No. Telefon:</p></td>
                        <td><input class="input" type="text" placeholder="Sila isikan no. telefon"/></td>
                    </tr>
                    
                </table>
            </div>
         );
    }
}
 
export default MAdd_Employee;