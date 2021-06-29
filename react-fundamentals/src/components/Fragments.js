import React from 'react';

class Fragments extends React.Component {
    constructor() {
        super();
        this.colors = [
            {
                id: 1,
                name: 'red',
            },
            {
                id: 2,
                name: 'green',
            },
            {
                id: 3,
                name: 'blue',
            },
            {
                id: 4,
                name: 'purple'
            },
        ];
    }

    // ! React.Fragment
    // render() {
    //     return (
    //         <React.Fragment>
    //             <h1>heading</h1>
    //             <h2>heading</h2>
    //         </React.Fragment>
    //     )
    // }


    render() {
        return (
            <React.Fragment>
                {
                    this.colors.map(color => (
                        <React.Fragment key={color.id}>
                            <span>Color Name</span>
                            <span>{color.name}</span>
                        </React.Fragment>
                    ))
                }
            </React.Fragment>
        )
    }


    // ! short hand syntax
    // render() {
    //     return (
    //         <>
    //             <h1>Heading</h1>
    //             <h1>Heading</h1>
    //         </>
    //     )
    // }


}

export default Fragments;