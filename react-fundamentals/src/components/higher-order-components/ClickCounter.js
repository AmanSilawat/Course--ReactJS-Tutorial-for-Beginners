import React from 'react';
import WithCounter from './WithCounter';

class ClickCounter extends React.Component {
    render() {
        const { count, incrementCount } = this.props;
        return <button onClick={incrementCount}> {this.props.name} Clicked {count} times</button>
    }
}

export default WithCounter(ClickCounter, 5);