import { Component } from "react";


class Counter extends Component {

    constructor(){
        super();
        this.state={
            counter: 0,
        };
        //does not need increment = () => .... only needs increment ()
        //this.increment = this.increment.bind(this)
    }

    increment = () => {
        this.setState({
            counter: this.state.counter +1
        })
    }

    decrement(){
        this.setState({
            counter: this.state.counter-1,
        })
    }

    render() {
        return (<div>
            <button onClick={this.increment}>+</button>
            <h3>Count value is: {this.state.counter}</h3>
            <button onClick={()=>this.decrement()}>-</button>
        </div>)
    }
}

export default Counter;