import {UPDATE_E_VALUE,VALIDATE_E_VALUE} from '../actions/RSAStep2Actions';

const Step2Reducer = (state = {},action) => {
    switch (action.type) {
        case UPDATE_E_VALUE:
            state.e = parseInt(action.possibleE,10);
            break;
        case VALIDATE_E_VALUE:
            if(!action.possibleE.find(x => x === state.e)) {
                state.errorText = 'Choose e from given list';
            } else {
                state.errorText = undefined;
                state.validE = true
            }
            break;
        default:
            break;
    }
    return Object.assign({}, state);
};

export default Step2Reducer;