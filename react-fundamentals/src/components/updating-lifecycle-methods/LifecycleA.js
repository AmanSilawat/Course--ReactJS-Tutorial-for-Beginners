import React from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'Aman'
        }
        console.log('Lifecycle A Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps', props, state);
        if (state.name === 'Aman') {
            return {name: "Rahul"}
        }
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('LifecycleA shouldComponentUpdate', nextProps, nextState)
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                {this.state.name}
                <button onClick={this.changeState}>Change state</button>
				LifecycleA
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA;