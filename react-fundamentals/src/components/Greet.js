// import React from 'react';

export const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>hello {props.name} a.k.a {props.heroname}</h1>
            {props.children}
        </div>
    );
}
// export default Greet;