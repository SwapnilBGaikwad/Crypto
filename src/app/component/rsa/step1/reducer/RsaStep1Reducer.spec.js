import expect from "expect";

import RsaStep1Reducer from './RsaStep1Reducer';

describe('RsaStep1Reducer specs', () => {
    it('should update number in state if UPDATE_NUMBER after action', () => {
        let state = {rsa: 10};
        let action = {type: 'UPDATE_NUMBER', value: {rsa: 20}};
        let newState = RsaStep1Reducer(state, action);
        expect(newState.rsa).toBe(20);
    });
});