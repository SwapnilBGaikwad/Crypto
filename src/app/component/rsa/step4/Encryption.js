import React, {Component} from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {connect} from 'react-redux';

import {onMessageSubmit} from './action/Step4Actions';
import {encryptMessage} from './utils/EncryptMessage';

class Encryption extends Component {
    constructor(props) {
        super(props);
        this.state = {message: 0};
    }

    render() {
        return (
            <Card>
                <CardHeader title="Step 4" subtitle="Enter Message"/>
                <CardText>
                    Enter message to encrypt
                    <div>
                        <TextField name={'message'} type={'number'} onChange={(e) => {
                            this.setState({message: e.target.value})
                        }}/>
                    </div>
                    <CardText>
                        Encrypted Message: {this.props.encryptedMessage}
                    </CardText>
                    <CardActions>
                        <FlatButton label="Set Message" onClick={() => this.props.handleSubmit(this.state.message)}/>
                    </CardActions>
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {p, q} = state.rsa.step1;
    const e = state.rsa.step2.e;
    const publicKey = {e, N: parseInt(p.value,10) * parseInt(q.value,10)};
    const message = state.rsa.step4.message;
    const encryptedMessage = encryptMessage(message, publicKey);
    return {
        encryptedMessage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleSubmit: onMessageSubmit(dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Encryption);