import React, { useContext } from 'react';
import { CounterContext } from './../../../App';

function ComponentA() {
    const counterContext = useContext(CounterContext);
    console.log(counterContext);

    return (
        <div>
            Component A count: {counterContext.counter}
            <button onClick={() => counterContext.dispatch('increment')}>Increment</button>
            <button onClick={() => counterContext.dispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContext.dispatch('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA;