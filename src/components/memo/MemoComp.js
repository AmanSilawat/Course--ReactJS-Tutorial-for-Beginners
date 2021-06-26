import React from 'react';


function MemoComp(props) {
    console.log('regular Component ');
    return (
        <div>
            Regular Component {props.name}
        </div>
    )
}

export default React.memo(MemoComp);