import React, {Component} from 'react';

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {connect} from 'react-redux';

import {onMessageSubmit} from './action/Step4Actions';
import {encryptMessage} from '../utils/EncryptMessage';
import If from '../../common/If';

class Encryption extends Component {
    constructor(props) {
        super(props);
        this.state = {message: 0};
    }

    render() {
        return (
            <Card>
                <CardHeader title="Step 4"/>
                <CardText>
                    Enter message to encrypt
                    <div>
                        <TextField name={'message'} type={'number'} onChange={(e) => {
                            this.setState({message: e.target.value})
                        }}/>
                    </div>
                    <CardActions>
                        <FlatButton label="Set Message" onClick={() => this.props.handleSubmit(this.state.message)}/>
                    </CardActions>
                    <If when={this.props.encryptedMessage !== undefined}>
                        <CardText>
                            Encrypted Message: {this.props.encryptedMessage}
                        </CardText>
                    </If>
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const message = state.rsa.step4.message;
    if(message === undefined) {
        return {};
    }

    const {p, q} = state.rsa.step1;
    const e = state.rsa.step2.e;
    const N = parseInt(p.value,10) * parseInt(q.value,10);
    const publicKey = {key: e, N};
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