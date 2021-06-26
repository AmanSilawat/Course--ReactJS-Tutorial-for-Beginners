import React from 'react';
import MemoComp from './MemoComp';

// class ParentComp extends React.PureComponent {
class ParentComp extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'aman'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'aman'
            })
        }, 2000)
    }

    render() {
        console.log('--0-0-0- Parent Component ');
        return (
            <div>
                Parent Component
                <MemoComp name={this.props.name} />
            </div>
        )
    }
}

export default ParentComp;