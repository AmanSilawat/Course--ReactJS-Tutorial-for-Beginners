import React, {useReducer} from 'react';

const initialState = 0;

function reducer(state, action) {
    console.log(state);
    switch (action) {
        case 'increment':
            return state + 1;
        
        case 'decrement':
            return state - 1;
        
        case 'reset':
            return initialState;
    
        default:
            return state;
    }
}

function CounterOne(params) {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>count value  {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Increment</button>
            <button onClick={() => dispatch('reset')}>Increment</button>
        </div>
    )
}

export default CounterOne;