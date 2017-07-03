import expect from "expect";
import dispatcher from "../../../app/redux/dispatcher/StoreDispatcher";


describe("Store Dispatcher", () => {
    it("increment action change state to 1 if initial state is 0", () => {
        let nextState = dispatcher(0, {type: 'INCREMENT'});
        expect(nextState).toBe(1);
    });

    it("increment action change state to 2 if initial state is 1", () => {
        let nextState = dispatcher(1, {type: 'INCREMENT'});
        expect(nextState).toBe(2);
    });

    it("decrement action change state to 1 if initial state is 2", () => {
        let nextState = dispatcher(2, {type: 'DECREMENT'});
        expect(nextState).toBe(1);
    });

    it("return state as 0 if initial state is undefined", () => {
        let nextState = dispatcher(undefined, {type: 'SOMETHING'});
        expect(nextState).toBe(0);
    });

});