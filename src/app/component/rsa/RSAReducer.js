import {combineReducers} from 'redux'

import step1 from './step1/reducer/RsaStep1Reducer';
import step2 from './step2/reducer/Step2Reducer';
import step3 from './step3/reducer/Step3Reducer';

const RSAReducer = combineReducers({step1,step2,step3});

export default RSAReducer;