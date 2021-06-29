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
        console.log('Lifecycle A getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Lifecycle A componentDidMount')
    }

    render() {
        console.log('Lifecycle A render')
        return <LifecycleB />
    }
}

export default LifecycleA;