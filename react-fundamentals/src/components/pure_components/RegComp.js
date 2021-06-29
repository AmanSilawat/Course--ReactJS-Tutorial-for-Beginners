import React from 'react';

class PureComp extends React.Component {
    render() {
        console.log('regular Component ');
        return (
            <div>
                Regular Component {this.props.name}
            </div>
        )
    }
}

export default PureComp;