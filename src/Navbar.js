import React from 'react';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;

    }

    render() {

        return (
            <div>
                <a href="#">Home</a>
                <a href="#">Information</a>
                <a href="#">Marketplace</a>
                <a href="#">Contact</a>
            </div>
        )
    }
}

export default Navbar;