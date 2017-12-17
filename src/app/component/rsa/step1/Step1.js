import React from 'react'

import {connect} from 'react-redux';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';

import If from '../../common/If';

import {checkValidity, onPChange, onQChange} from './action/RSAStep1Actions';

const Steps1 = ({p, q, isValidNumbers, onPChange, onQChange, handleClick}) => {
    return (<Card>
        <CardHeader title="Step 1" subtitle="Set p and q"/>
        <CardText>
            Choose p and q as prime numbers
            <br/>
            <div>
                <TextField hintText="p value" type={'number'}
                           onChange={(e) => onPChange(e.target.value)}
                           errorText={p.errorText}/>
            </div>
            <div>
                <TextField hintText="q value" type={'number'}
                           onChange={(e) => onQChange(e.target.value)}
                           errorText={q.errorText}/>
            </div>
        </CardText>
        <CardActions>
            <FlatButton label="Set p and q" onClick={() => handleClick()}/>
        </CardActions>
        <If when={isValidNumbers}>
            <CardText>N = p * q : {p.value * q.value} </CardText>
            <CardText>Phi(N) = (p - 1) * (q - 1) : {(p.value - 1) * (q.value - 1)} </CardText>
        </If>
    </Card>);
};

const mapStateToProps = (state) => {
    return {
        p: state.rsa.p,
        q: state.rsa.q,
        isValidNumbers: state.rsa.isValidNumbers
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onPChange: (no) => {
            dispatch(onPChange(no));
        },
        onQChange: (no) => {
            dispatch(onQChange(no));
        },
        handleClick: () => {
            dispatch(checkValidity());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Steps1);