import {CHECK_IS_PRIME, UPDATE_NUMBER} from '../action/RSAStep1Actions';
import isPrime from '../../../../utils/Prime';

let defaultState = {
    p: {
        value: 0,
        errorText: ''
    },
    q: {
        value: 0,
        errorText: ''
    },
    isValidNumbers: false
};

export default function RsaStep1Reducer(state = {}, action) {
    switch (action.type) {
        case UPDATE_NUMBER:
            Object.assign(state, action.value);
            return state;
        case CHECK_IS_PRIME:
            if(!isPrime(state.p.value)) {
                state.p.errorText = "p is not prime";
                state.isValidNumbers = false;
            } else if(!isPrime(state.q.value)) {
                state.q.errorText = "q is not prime";
                state.isValidNumbers = false;
            } else {
                state.isValidNumbers = true;
            }
            return Object.assign({},state);
        default:
            return Object.assign(defaultState, {});
    }
}