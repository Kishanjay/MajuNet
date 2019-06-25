import React, { Component } from 'react';

class MButton extends Component {
 

constructor(props){
    super(props);
}

    render() {
        //console.log("Props: ", this.props);
        return (
            <button
                style={this.props.style}
                className={this.props.className}
                onClick={this.props.onClick}
            >
                {this.props.buttonText}
            </button>
        );
    }
}
 
export default MButton;