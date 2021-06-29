import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            message: 'Hello'
        }
    }
    increment() {
        // this.state.count = this.state.count + 1;
        // ---
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     },
        //     () => {
        //         console.log('callback value', this.state.count);
        //     }
        // )
        // --
        this.setState(
            (prevState) => ({
                count: prevState.count + 1
            }
            ),
            () => {
                console.log('callback value', this.state.count);
            }
        );

        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        );
    }
}

export default Counter;