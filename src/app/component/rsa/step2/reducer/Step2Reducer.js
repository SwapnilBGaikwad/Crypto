import {UPDATE_E_VALUE,VALIDATE_E_VALUE} from '../actions/RSAStep2Actions';

const Step2Reducer = (state = {},action) => {
    switch (action.type) {
        case UPDATE_E_VALUE:
            return {
                ...state,
                e: parseInt(action.possibleE,10)
            };
        case VALIDATE_E_VALUE:
            let errorText,validE;
            console.log('action.possibleE : ', action.possibleE);
            console.log('action.state.e : ', state.e);
            if(!action.possibleE.find(x => x === state.e)) {
                errorText = 'Choose e from given list';
                validE = false;
            } else {
                errorText = undefined;
                validE = true;
            }
            return {
                ...state,
              errorText,
              validE
            };
        default:
            return state;
    }
};

export default Step2Reducer;