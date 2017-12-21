import React from 'react';

import {connect} from 'react-redux'

import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import {getEValues} from './utils/GetEValues';
import {checkEValidity, onEChange} from './actions/RSAStep2Actions';
import If from '../../common/If';


const Step2 = ({e,possibleE  = [], errorText, validE , onEChange, handleClick}) => {
    return (
        <Card>
            <CardHeader title="Step 2" subtitle="Choose public key e"/>
            <CardText>
                Choose e (Encryption Key) from below values
                <div>
                    <TextField disabled={true} value={possibleE}/>
                </div>
                <div>
                    <TextField hintText="e value" type={'number'}
                               onChange={(e) => onEChange(e.target.value)}
                               errorText={errorText}/>
                </div>
                <CardActions>
                    <FlatButton label="Set e" onClick={() => handleClick(possibleE)}/>
                </CardActions>
                <If when={validE}>
                    <CardText>Public key is e {e} </CardText>
                </If>
            </CardText>
        </Card>
    );
};
const mapStateToProps = (state) => {
    let p = state.rsa.step1.p.value;
    let q = state.rsa.step1.q.value;
    let e = state.rsa.step2.e;
    let errorText = state.rsa.step2.errorText;
    let validE = state.rsa.step2.validE;
    return {
        e,
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