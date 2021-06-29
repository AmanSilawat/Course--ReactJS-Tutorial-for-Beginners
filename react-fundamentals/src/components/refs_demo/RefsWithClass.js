import React, { Component } from 'react';
import Input from './Input';

class Refs extends Component {
    constructor(props) {
        super(props)
        this.componentRef = React.createRef();

    }

    clickHandler = () => {
        this.componentRef.current.focusInput(); // reference of Input component
        console.log(this.componentRef); 
    }

    render() {
        return (
            <div>
                <Input ref={this.componentRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export default Refs;