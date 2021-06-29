import React from 'react';
import RegComp from './RegComp';
import PureComp from './PureComp';

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
                <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp>
            </div>
        )
    }
}

export default ParentComp;