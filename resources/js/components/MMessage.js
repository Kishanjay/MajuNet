import React, { Component } from 'react';

class MMessage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.response) { 
            return null;
        }
        const success = this.props.response.status == 201;
        const message = success ? this.props.onSuccess : this.props.onError;
        const code = success ? JSON.stringify(this.props.response.data,  null, 4) : null;
        return (
            <article className="message is-success">
                <div className="message-body">
                    <strong>{message}</strong>
                    {code && 
                        <pre>{code}</pre>
                    }
                </div>
            </article>
        )
    }
}


export default MMessage;