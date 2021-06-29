import React from 'react'

export default function ChildComponent(props) {
    console.log('childProps', props)
    return (
        <div>
            <button onClick={() => props.greetHandler('child--')}>Greet Parent</button>
        </div>
    )
}
