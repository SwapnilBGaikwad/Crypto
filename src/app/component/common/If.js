import React from 'react';

class If extends React.Component {
    render() {
        console.log('this.props.when : ' + this.props.when);
        return null;
        if(this.props.when) {
            return <div>{this.props.children}</div>;
        } else {
            return null;
        }
    }
}

export default If;