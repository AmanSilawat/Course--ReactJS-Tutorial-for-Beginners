import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './UserContext';

export class ComponentE extends Component {
    // ! first way contextType
    // render() {
    //     return (
    //         <div>
    //             <div>Component E Context { this.context }</div>
    //             <ComponentF />
    //         </div>
    //     )
    // }

    // ! Second type contentType
    static contextType = UserContext;
    render() {
        return (
            <div>
                <div>Component E Context { this.context }</div>
                <ComponentF />
            </div>
        )
    }

    // render() {
    //     return (
    //         <div>
    //             <ComponentF />
    //         </div>
    //     )
    // }
}

ComponentE.contextType = UserContext; // ! first way contextType
export default ComponentE;