import RSAReducer from '../rsa/RSAReducer';

import {combineReducers} from 'redux';

const AppReducer = combineReducers({rsa: RSAReducer});

export default AppReducer;