import { Component } from 'react';

class Resume extends Component {
    render() {
        const {name} = this.props
        return <h1 className='topLine'>This is {name}'s class component</h1>
    }
}

export default Resume;