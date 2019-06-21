import React, { Component } from 'react';


class MButton extends Component {
    state={
        buttonText: this.props.buttonText,
        buttonClass: this.props.buttonClass
    };

constructor(props){
    super(props);
}

    render() {
        console.log("Props: ", this.props);
        return (
            <button 
                className={this.state.buttonClass}>
                {this.state.buttonText}
            </button>
        );
    }
}
 
export default MButton;