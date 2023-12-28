import { Component } from "react";

class ClassEvent extends Component {
    handleClick(){
        console.log('class based event clicked')
    }
    render() {
        return <div> Class Component
            <button onClick={this.handleClick}>Click</button>
        </div>
    }
}

export default ClassEvent;