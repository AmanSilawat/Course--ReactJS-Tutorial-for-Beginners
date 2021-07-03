import React, { useRef, useEffect } from 'react';

function FocusInput() {
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus()
    }, []);
    
    return <input ref={inputRef} type="text" />
}

export default FocusInput;