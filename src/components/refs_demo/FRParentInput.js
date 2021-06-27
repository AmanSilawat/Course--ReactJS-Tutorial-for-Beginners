import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParentInput extends Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
    }
    clickHandler = () => {
        console.log(this.inputRef)
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef} />
                <button onClick={this.clickHandler}>focus Input</button>
            </div>
        )
    }
}

export default FRParentInput;