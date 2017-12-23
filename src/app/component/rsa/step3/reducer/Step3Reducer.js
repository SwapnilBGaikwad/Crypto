import {UPDATE_D_VALUE,VALIDATE_D_VALUE} from '../actions/RSAStep3Actions';

const Step3Reducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_D_VALUE:
            state.d = parseInt(action.d,10);
            break;
        case VALIDATE_D_VALUE:
            if(!action.possibleD.find(x => x === state.d)) {
                state.errorText = 'Choose d from given list';
            } else {
                state.errorText = undefined;
            }
            break;
        default:
            return {
                d: 0,
                possibleD: [],
                errorText: ''
            };
    }
    return Object.assign({}, state);
};

export default Step3Reducer;