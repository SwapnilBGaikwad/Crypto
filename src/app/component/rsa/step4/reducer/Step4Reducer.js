import {MESSAGE_SUBMIT} from '../action/Step4Actions';
import {} from '../utils/EncryptMessage'

const Step4Reducer = (state = {}, action) => {
    switch (action.type) {
        case MESSAGE_SUBMIT:
            state.message = parseInt(action.message,10);
            break;
        default:
            return state;
    }
    return Object.assign({}, state);
};

export default Step4Reducer;