import React from 'react';
import './myStyle.css'

// inline styling
const heading = {
    fontSize: '25px',
    color: 'blue'
}

function Stylesheet(props) {
    let className = props.primary ? 'primary' : '';
    return (
        <div>
            <h1 className={className}>StyleSheets</h1>
            <h2 style={heading}>StyleSheets</h2>
        </div>
    )
}

export default Stylesheet
