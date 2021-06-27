import React, { Component } from 'react';

class Refs extends Component {
    constructor() {
        super();
        
        this.inputRef = React.createRef();
        console.log('this.inputRef', this.inputRef); // null
        
        // second approach
        this.cbRef = null;
        this.setCbRef = element => {
            this.cbRef = element
        }
        console.log('this.cbRef', this.cbRef); // null
    }

    componentDidMount() {
        console.log(this.inputRef); // { current: input }
        console.log('this.cbRef', this.cbRef); // input
    }
    
    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
            </div>
        );
    }
}

export default Refs;