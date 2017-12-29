import {MESSAGE_SUBMIT} from '../action/Step4Actions';

const Step4Reducer = (state = {}, action) => {
    switch (action.type) {
        case MESSAGE_SUBMIT:
            return {...state, message: parseInt(action.message, 10)};
        default:
            return state;
    }
};

export default Step4Reducer;