import React from 'react';

class If extends React.Component {
    render() {
        if(this.props.when) {
            return <div>{this.props.children}</div>;
        } else {
            return null;
        }
    }
}

export default If;