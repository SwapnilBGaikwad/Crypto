import React from 'react';

import {connect} from 'react-redux'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {getDValues} from './utils/GetDValues';
import {checkDValidity, onDChange} from './actions/RSAStep3Actions';
import If from '../../common/If';


const Step3 = ({d, n, possibleD = [], errorText, onDChange, handleClick}) => {
    return (
        <Card>
            <CardHeader title="Step 3" subtitle="Choose private key d (Decryption Key)"/>
            <CardText>
                Choose d from below values
                <div>
                    <TextField id="dVals" disabled={true} value={possibleD}/>
                </div>
                <div>
                    <TextField id="d" hintText="d value" type={'number'}
                               onChange={(event) => onDChange(event.target.value)}
                               errorText={errorText}/>
                </div>
                <CardActions>
                    <FlatButton label="Set d" onClick={() => handleClick(possibleD)}/>
                </CardActions>
                <If when={errorText === ''}>
                    <CardText>Private key is (d , n) = {d + ', ' + n} </CardText>
                </If>
            </CardText>
        </Card>
    );
};
const mapStateToProps = (state) => {
    const p = state.rsa.step1.p.value;
    const q = state.rsa.step1.q.value;
    const e = state.rsa.step2.e;
    const n = p * q;
    const d = state.rsa.step3.d;
    const errorText = state.rsa.step3.errorText;
    return {
        d, e, n,
        possibleD: getDValues(p, q, e),
        errorText
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onDChange: onDChange(dispatch),
        handleClick: checkDValidity(dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step3);