import RSAReducer from '../rsa/step1/reducer/RsaStep1Reducer';

import {combineReducers} from 'redux';

const AppReducer = combineReducers({rsa: RSAReducer});

export default AppReducer;