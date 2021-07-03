import React, { useState, useEffect } from 'react';

function ConditionallyRunEffects(params) {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        document.title = `Click ${count} Times`;
    }, [count]);

    return (
        <div>
            hello
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} Times</button>
        </div>
    )
}

export default ConditionallyRunEffects;