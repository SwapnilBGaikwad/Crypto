import {CHECK_IS_PRIME, UPDATE_NUMBER} from '../../actions/RSAActions';
import isPrime from '../../utils/Prime';

let defaultState = {
    p: {
        value: 0,
        errorText: ''
    },
    q: {
        value: 0,
        errorText: ''
    }
};

export default function RSAReducer(state = {}, action) {
    switch (action.type) {
        case UPDATE_NUMBER:
            Object.assign(state, action.value);
            return state;
        case CHECK_IS_PRIME:
            if(!isPrime(state.p.value)) {
                state.p.errorText = "p is not prime";
            }
            if(!isPrime(state.q.value)) {
                state.q.errorText = "q is not prime";
            }
            return Object.assign({},state);
        default:
            return Object.assign(defaultState, {});
    }
}