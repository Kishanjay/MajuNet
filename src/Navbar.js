import React from 'react';

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.props = props;

    }

    render() {

        return (
            <ul>
                <li>
                    Hello {this.props.name}
                </li>
            </ul>
        )
    }
}

export default Navbar;