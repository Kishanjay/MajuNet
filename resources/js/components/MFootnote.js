import React, { Component } from 'react';

class MFootnote extends Component {

    render() { 
        return ( 
            <footer className="footer bg-opaque">
            <div className="content has-text-centered">
                <p>
                <strong>MajuNet</strong> by <a href="http://www.unimas.my/">UNIMAS</a> and <a href="https://www.vu.nl/en">VU</a>.
                Please email the <a href="https://github.com/Kishanjay/MajuNet">collaborators</a> for bug fixes.
                </p>

                <p>
                <strong>MajuNet</strong> daripada <a href="http://www.unimas.my/">UNIMAS</a> dan <a href="https://www.vu.nl/en">VU</a>.
                Sila berhubung dengan <a href="https://github.com/Kishanjay/MajuNet">pengembang sistem</a> untuk sebarang pengubahsuai.
                </p>
            </div>
            </footer>
         );
    }
}
 
export default MFootnote;