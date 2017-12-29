import React, {Component} from 'react'

import {Card, CardHeader, CardText} from 'material-ui/Card'
import {connect} from 'react-redux';

import {encryptMessage} from '../utils/EncryptMessage';

class Decryption extends Component {
    render() {
        const {decrypted} = this.props;
        return (
            <Card>
                <CardHeader title="Step 5"/>
                <CardText>
                    Decrypted Message: {decrypted}
                </CardText>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {p, q} = state.rsa.step1;
    const e = state.rsa.step2.e;
    const N = parseInt(p.value,10) * parseInt(q.value,10);
    const publicKey = {key: e, N};
    const message = state.rsa.step4.message;
    const encryptedMessage = encryptMessage(message, publicKey);
    const d = state.rsa.step3.d;
    const privateKey = {key: d, N};

    return {
        decrypted: encryptMessage(encryptedMessage,privateKey)
    };
};

const mapDispatchToProps = () => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Decryption);