import RSAReducer from './rsa/RsaReducer';

import {combineReducers} from 'redux';

const AppReducer = combineReducers({rsa: RSAReducer});

export default AppReducer;