import React, { useState, useEffect } from 'react';

function HookMouse(params) {
    const [x_pos, setX_pos] = useState(0);
    const [y_pos, setY_pos] = useState(0);

    const mousePositionHandler = (e) => {
            setX_pos(e.clientX);
            setY_pos(e.clientY);
    }

    useEffect(() => {
        window.addEventListener('mousemove', mousePositionHandler);

        return () => {
            window.removeEventListener('mouseover', mousePositionHandler)
        }
    }, []);

    return <div>Hooks X - {x_pos} Y - { y_pos}</div>
}

export default HookMouse;