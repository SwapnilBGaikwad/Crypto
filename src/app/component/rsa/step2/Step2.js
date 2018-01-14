import React from 'react';

import {connect} from 'react-redux'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {getEValues} from './utils/GetEValues';
import {checkEValidity, onEChange} from './actions/RSAStep2Actions';
import If from '../../common/If';


const Step2 = ({e, n ,possibleE = [], errorText, validE, onEChange, handleClick}) => {
    return (
        <Card>
            <CardHeader title="Step 2" subtitle="Choose public key e (Encryption Key)"/>
            <CardText>
                Choose e from below values
                <div>
                    <TextField id="Evals" disabled={true} value={possibleE}/>
                </div>
                <div>
                    <TextField id="e" hintText="e value" type={'number'}
                               onChange={(e) => onEChange(e.target.value)}
                               errorText={errorText}/>
                </div>
                <CardActions>
                    <FlatButton label="Set e" onClick={() => handleClick(possibleE)}/>
                </CardActions>
                <If when={validE}>
                    <CardText>Public key is (e , n) = {e + ', ' + n} </CardText>
                </If>
            </CardText>
        </Card>
    );
};
const mapStateToProps = (state) => {
    let p = state.rsa.step1.p.value;
    let q = state.rsa.step1.q.value;
    const n = p * q;
    const e = state.rsa.step2.e;
    let errorText = state.rsa.step2.errorText;
    let validE = state.rsa.step2.validE;
    return {
        e, n,
        possibleE: getEValues(p, q),
        errorText,
        validE
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onEChange: onEChange(dispatch),
        handleClick: checkEValidity(dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Step2);