import React from 'react';

const Hello = () => {
    // return (
    //     <div className="dummyClass">
    //         <h1>Hello Aman Silawat</h1>
    //     </div>
    // )

    return React.createElement('div', {className: 'dummyClass'}, React.createElement('h1', null, 'Hello Aman'))
}

export default Hello;