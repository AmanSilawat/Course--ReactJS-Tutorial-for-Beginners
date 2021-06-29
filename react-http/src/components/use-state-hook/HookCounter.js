import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0); // set default value `0`
    return (
        <div>
            <button onClick={() => setCount(count + 1) }>Count {count}</button>
        </div>
    )
}

export default HookCounter;
