import { Component } from 'react';

class Message extends Component {
    render(){
        return <div>
                This is a class component
                    <h3>Message: {this.props.messageContent}</h3>
                    <h2>Code: {this.props.messageCode}</h2>
                </div>
    }
};

export default Message;