import React, { useReducer } from 'react';

const initialState = 0;

function reducer(state, action) {
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

function CounterThree(params) {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <div>
                <div>count value  {count}</div>
                <button onClick={() => dispatch('increment')}>Increment</button>
                <button onClick={() => dispatch('decrement')}>Increment</button>
                <button onClick={() => dispatch('reset')}>Increment</button>
            </div>
            <div>
                <div>count value Two  {countTwo}</div>
                <button onClick={() => dispatchTwo('increment')}>Increment</button>
                <button onClick={() => dispatchTwo('decrement')}>Increment</button>
                <button onClick={() => dispatchTwo('reset')}>Increment</button>
            </div>
        </div>
    )
}

export default CounterThree;