import React from 'react';

class LifecycleB extends React.Component{
    constructor() {
        super();

        this.state = {
            name: 'Aman'
        }
        console.log('Lifecycle B Constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('Lifecycle B getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('Lifecycle B componentDidMount')
    }

    render() {
        console.log('Lifecycle B render')
        return null;
    }
}

export default LifecycleB;