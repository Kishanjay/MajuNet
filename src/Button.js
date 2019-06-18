import React, { Component } from 'react';


class Button extends Component {
    
constructor(props){
    super(props);
    this.props = props;
}

    render() { 
        return ( 
            <a href="#">Test{this.props.name}</a>
         );
    }
}
 
export default Button;