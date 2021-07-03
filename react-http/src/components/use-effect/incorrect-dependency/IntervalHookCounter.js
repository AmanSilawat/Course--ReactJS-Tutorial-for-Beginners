import React, { useState, useEffect } from 'react';

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    const tick = () => {
        // setCount(count + 1);
        setCount(prevCount => prevCount + 1); // ! second way - use prev count
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);
        return () => {
            clearInterval(interval);
        }
    }, []); // ! first way - set dependance to 'count'

    return <div>Functional Component - {count}</div>
}

export default IntervalHookCounter;