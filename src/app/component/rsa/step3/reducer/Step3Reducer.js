import {UPDATE_D_VALUE, VALIDATE_D_VALUE} from '../actions/RSAStep3Actions';

const Step3Reducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_D_VALUE:
            return {...state, d: parseInt(action.d, 10)};
        case VALIDATE_D_VALUE:
            let errorText;
            if (!action.possibleD.find(x => x === state.d)) {
                errorText = 'Choose d from given list';
            } else {
                errorText = undefined;
            }
            return {...state, errorText};
        default:
            return state;
    }
};

export default Step3Reducer;