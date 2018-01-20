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

const isValid = (value) => {
    return value !== null && value > 0;
};

export default function RsaStep1Reducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_NUMBER:
            Object.assign(state, action.value);
            return state;
        case CHECK_IS_PRIME:
            let isValidNumbers = true;
            let p = {value: undefined, errorText: undefined};
            let q = {value: undefined, errorText: undefined};
            p.value = state.p.value;
            q.value = state.q.value;

            if (!isValid(state.p.value)) {
                p.errorText = "Invalid p value";
                isValidNumbers = false;
            }
            if (!isValid(state.q.value)) {
                q.errorText = "Invalid q value";
                isValidNumbers = false;
            }
            if (!isPrime(state.p.value)) {
                p.errorText = "p is not prime";
                isValidNumbers = false;
            }
            if (!isPrime(state.q.value)) {
                q.errorText = "q is not prime";
                isValidNumbers = false;
            }
            return {
                p,q,isValidNumbers
            };
        default:
            return state;
    }
}